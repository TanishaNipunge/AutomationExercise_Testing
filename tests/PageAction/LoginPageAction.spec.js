import { LoginPage } from '../PageObject/LoginPageObject.spec.js';

import { BaseClass } from '../BaseClass/BaseClass.spec.js';

export class LoginAction {

    constructor(page) {

        this.loginPage = new LoginPage(page);

        this.base = new BaseClass(page);

    }

    async launchbrowserandgotourl(url) {

        await this.base.launchbrowserandgotourl(url);

    }

    async clicksignuplogin() {

        await this.loginPage.signup_login.click();

    }

    async enteremail(email) {

        await this.loginPage.email.fill(email);

    }

    async enterpassword(password) {

        await this.loginPage.password.fill(password);

    }

    async clickloginbutton() {

        await this.loginPage.login_button.click();

    }

    async loginToApplication(email, password) {

        await this.enteremail(email);

        await this.enterpassword(password);

        await this.clickloginbutton();

    }

    async logout() {

        await this.loginPage.logout_button.click();

    }

}