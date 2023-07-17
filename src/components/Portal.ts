import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { StateController, Unsubscribe } from "@lit-app/state";
import { when } from "lit/directives/when.js";

import {
  customProperties,
  fontFaces,
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
import { getHash, getScopeFromUrl, updateHash } from "../utils/routing";
import { getCurrentAccessToken } from "../utils/storage";
import { settings } from "../settings";
import { getInitialLocale } from "../utils/locale";
import { getNavigationItemByAppPath } from "../utils/navigation.ts";

const oAuthClient = createOAuthClient();

const authReady = (async function () {
  // Start Authorization Code Flow with PKCE
  await ensureAuthenticated(oAuthClient, getScopeFromUrl(), getInitialLocale());
  portalState.init();
})();

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    ${fontFaces}
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

    window.addEventListener("message", this.handleMessage);

    // When visiting the portal anew with an app path in URL hash, set
    // this as the initial app path
    const url = new URL(location.href);
    portalState.actualAppPath = url.hash;

    // For subsequent hash changes, update the state
    window.addEventListener("hashchange", this.handleHashChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.subscriptions.forEach((unsubscribe) => unsubscribe());
    window.removeEventListener("message", this.handleMessage);
    window.removeEventListener("hashchange", this.handleHashChange);
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

  private handleMessage = ({ data }: MessageEvent) => {
    switch (data.type) {
      case "bkdAppPushState": {
        const url = data.args[2];
        this.updateUrlAndNavigationState(url, false);
        break;
      }
      case "bkdAppReplaceState": {
        const url = data.args[2];
        updateHash(getHash(url), true);
        break;
      }
      case "bkdAppHashChange": {
        const { url } = data;
        updateHash(getHash(url));
        break;
      }
    }
  };

  /**
   * When navigating between modules of the same app, be sure to update the
   * portal URL and navigation state
   */
  private updateUrlAndNavigationState(url: string, replaceHash: boolean) {
    const hash = getHash(url);
    updateHash(hash, replaceHash);

    const navigationItem = getNavigationItemByAppPath(
      portalState.navigation,
      hash
    );
    if (
      navigationItem?.item?.key &&
      navigationItem.item.key !== portalState.navigationItemKey
    ) {
      portalState.actualAppPath = hash;
      portalState.navigationItemKey = navigationItem.item.key;
    }
  }

  /**
   * Update the iframe's appPath whenever the user changes the hash in
   * the portal URL
   */
  private handleHashChange(event: HashChangeEvent): void {
    const url = new URL(event.newURL);
    portalState.appPath = url.hash;
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
