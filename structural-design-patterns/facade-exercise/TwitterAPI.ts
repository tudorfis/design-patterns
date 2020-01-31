import { Tweet } from "./Tweet";
import { TwitterClient } from "./TwitterClient";
import { OAuth } from "./OAuth";

export class TwitterAPI {
    constructor(
        private appKey: string,
        private appSecret: string
    ) { }

    getRecentTweets(): Tweet[] {
        const twitterClient = new TwitterClient();
        const tweets = twitterClient.getRecentTweets(this.getAccessToken())
        return tweets;
    }

    private getAccessToken(): string {
        const oauth = new OAuth();
        const requestToken = oauth.requestToken("appKey", "secret");
        const accessToken = oauth.getAccessToken(requestToken);

        return accessToken;
    }
}