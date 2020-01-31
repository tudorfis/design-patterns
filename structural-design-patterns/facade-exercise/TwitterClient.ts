import { Tweet } from "./Tweet";

export class TwitterClient {
    getRecentTweets(accessToken: string): Tweet[] {
        console.log(`Getting recent tweets...`);
        return [];
    }
}