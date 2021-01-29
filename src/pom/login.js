import { Selector, t } from 'testcafe';

class Login {
    constructor() {
        this.loginButton = Selector("#welcome-page .button-login");
        this.username = Selector("[name='login.username']");
        this.passwd = Selector("[name='login.password']");
        this.submitButton = Selector("button.button-login");
        this.message = Selector("#my-notes-page > h2");
    }

    async pressEnter() {
        await t.click(this.loginButton);
    }

    async enterCredentials(credentials) {
        await t.typeText(this.username, credentials.username, {replace: true});
        await t.typeText(this.passwd, credentials.passwd, {replace: true});
    }

    async submit() {
        await t.click(this.submitButton);
    }
}

export default new Login();