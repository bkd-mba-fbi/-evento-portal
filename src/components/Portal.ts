import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { StateController, Unsubscribe } from "@lit-app/state";
import { when } from "lit/directives/when.js";

import {
  customProperties,
  registerLightDomStyles,
  theme,
} from "../utils/theme";
import {
  activateTokenForScope,
  createOAuthClient,
  ensureAuthenticated,
  logout,
} from "../utils/auth";
import { portalState } from "../state/portal-state";
import { getScopeFromUrl } from "../utils/routing";
import { getCurrentAccessToken } from "../utils/storage";
import { settings } from "../settings";
import { getInitialLocale } from "../utils/locale";

const oAuthClient = createOAuthClient();

const authReady = (async function () {
  // Start Authorization Code Flow with PKCE
  await ensureAuthenticated(oAuthClient, getScopeFromUrl(), getInitialLocale());
  portalState.init();
})();

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    :root {
      ${customProperties}
    }
  `.toString()
);

@customElement("bkd-portal")
@localized()
export class Portal extends LitElement {
  @state()
  authReady = false;

  static styles = [
    theme,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content {
        flex: auto;
      }
    `,
  ];

  private subscriptions: Array<Unsubscribe> = [];

  constructor() {
    super();

    authReady.then(() => (this.authReady = true));

    new StateController(this, portalState);
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.subscriptions.push(
      portalState.subscribeScopeAndLocale(
        (scope, locale) => activateTokenForScope(oAuthClient, scope, locale),
        true
      )
    );
    this.subscriptions.push(
      portalState.subscribeInstanceName(this.updateTitle.bind(this))
    );
    this.subscriptions.push(
      portalState.subscribeNavigationItem(this.updateTitle.bind(this))
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.subscriptions.forEach((unsubscribe) => unsubscribe());
  }

  private isAuthenticated(): boolean {
    const token = getCurrentAccessToken();
    return Boolean(token);
  }

  /**
   * Update the document title based on the current state
   */
  private updateTitle(): void {
    const { instanceName, navigationItem: item } = portalState;
    const hasItem = item?.label && item?.key !== settings.navigationHome.key;
    document.title = hasItem
      ? [item?.label, instanceName].join(" ― ")
      : instanceName;
  }

  private handleLogout() {
    logout(oAuthClient);
  }

  render() {
    return html`
      ${when(
        this.authReady && this.isAuthenticated(),
        () => html`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal": Portal;
  }
}
