import { LoginPage } from '../PageObject/LoginPageObject.spec.js';

import { BaseClass } from '../BaseClass/BaseClass.spec.js';

export class LoginAction {

    constructor(page) {

        this.loginPage = new LoginPage(page);

        this.base = new BaseClass(page);

    }

    async launchbrowserandgotourl(url) {

        await this.base.launchbrowserandgotourl(url);
        console.info("Browser Opened");

    }

    async clicksignuplogin() {
        await this.loginPage.signup_login.click();
        console.info("Login clicked");

    }

    async enteremail(email) {

        await this.loginPage.email.fill(email);
        console.info("Email Entered");

    }

    async enterpassword(password) {

        await this.loginPage.password.fill(password);
        console.info("Password Entered ");

    }

    async clickloginbutton() {

        await this.loginPage.login_button.click();
        console.info("Login Button Clicked");

    }

    async loginToApplication(email, password) {

        await this.enteremail(email);

        await this.enterpassword(password);

        await this.clickloginbutton();

    }

    async logout() {

        await this.loginPage.logout_button.click();
        console.info("Logged-out Successfully ");

    }

}