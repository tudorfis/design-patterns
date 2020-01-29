
export class HttpRequest {
    constructor(
        private readonly username: string,
        private readonly password: string
    ) { }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

}