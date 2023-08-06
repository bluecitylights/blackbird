import { getAccessToken, redirectToAuthCodeFlow, newAccessToken, logOut } from "./auth";

export const SpotifyAuth = {
    redirectToAuthCodeFlow: redirectToAuthCodeFlow,
    newAccessToken: newAccessToken,
    getAccessToken: getAccessToken
}