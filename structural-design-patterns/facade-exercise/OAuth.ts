
export class OAuth {
    requestToken(appKey: string, appSecret: string): string {
        console.log(`Get a request token...`);
        return `requestToken`;
    }

    getAccessToken(requestToken: string): string {
        console.log(`Get an access token`);
        return `accessToken`;
    }
}