import { OAuth2Token } from "@badgateway/oauth2-client";

const INSTANCE_KEY = "bkdInstance";
const CODE_VERIFIER_KEY = "bkdCodeVerifier";
const REDIRECT_URI_KEY = "bkdRedirectUrl";
const ACCESS_TOKEN_KEY = "bkdAccessToken";
const REFRESH_TOKEN_KEY = "bkdRefreshToken";

// The "apps" rely on this being present
const CURRENT_ACCESS_TOKEN_KEY = "CLX.LoginToken";
const LOCALE_KEY = "uiCulture";
// TODO: is `CLX.TokenExpire` required too?

///// localStorage /////

export function getInstance(): string | null {
  return localStorage.getItem(INSTANCE_KEY);
}

export function storeInstance(instance: string): void {
  localStorage.setItem(INSTANCE_KEY, instance);
}

export function getAccessToken(scope: string): string | null {
  return localStorage.getItem(`${ACCESS_TOKEN_KEY}_${scope}`);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function storeToken(scope: string, token: OAuth2Token): void {
  const { refreshToken, accessToken } = token;
  localStorage.setItem(`${ACCESS_TOKEN_KEY}_${scope}`, accessToken);
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
}

export function resetAllTokens(): void {
  new Array(localStorage.length).fill(undefined).forEach((_, i) => {
    const key = localStorage.key(i);
    if (
      key &&
      (key.startsWith(ACCESS_TOKEN_KEY) || key === REFRESH_TOKEN_KEY)
    ) {
      localStorage.removeItem(key);
    }
  });

  sessionStorage.removeItem(CURRENT_ACCESS_TOKEN_KEY);
}

export function storeLocale(locale: string) {
  localStorage.setItem(LOCALE_KEY, locale);
}

///// sessionStorage /////

export function getCurrentAccessToken(): string | null {
  return sessionStorage.getItem(CURRENT_ACCESS_TOKEN_KEY);
}

export function storeCurrentAccessToken(accessToken: string): void {
  sessionStorage.setItem(CURRENT_ACCESS_TOKEN_KEY, accessToken);
  //old apps use localStorage
  localStorage.setItem(CURRENT_ACCESS_TOKEN_KEY, JSON.stringify(accessToken));
}

/**
 * Returns and removes login state from sessionStorage.
 */
export function consumeLoginState(): {
  codeVerifier: string;
  redirectUri?: string;
} | null {
  const codeVerifier = sessionStorage.getItem(CODE_VERIFIER_KEY);
  const redirectUri = sessionStorage.getItem(REDIRECT_URI_KEY) ?? undefined;

  sessionStorage.removeItem(REDIRECT_URI_KEY);
  sessionStorage.removeItem(CODE_VERIFIER_KEY);

  return codeVerifier ? { redirectUri, codeVerifier } : null;
}

export function storeLoginState(
  codeVerifier: string,
  redirectUri?: string
): void {
  sessionStorage.setItem(CODE_VERIFIER_KEY, codeVerifier);
  if (redirectUri) {
    sessionStorage.setItem(REDIRECT_URI_KEY, redirectUri);
  } else {
    sessionStorage.removeItem(REDIRECT_URI_KEY);
  }
}
