
export const BASE_URL_STAGING = "https://bluefeets.com/graphql";
export const BASE_URL_PRODUCTION = "https://bluefeets.com/graphql";

export function getBaseUrl() {
  return (__DEV__ ? BASE_URL_STAGING  : BASE_URL_PRODUCTION ) + "/";
}


