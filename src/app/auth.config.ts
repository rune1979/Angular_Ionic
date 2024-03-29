import { isPlatform } from "@ionic/angular";
import config from "../../capacitor.config";

export const domain = "rune1979.eu.auth0.com";
export const clientId = "r3s5WbUDX6Eou0LHN1stx8Zhjygo73CK";
const { appId } = config;

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform("ios") || isPlatform("android");

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : "http://localhost:8100";