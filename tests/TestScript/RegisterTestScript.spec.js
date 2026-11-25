
import { test, expect } from "@playwright/test";
import { LoginAction } from "../PageAction/LoginPageAction.spec.js";
import { RegisterPageAction } from "../PageAction/RegisterPageAction.spec.js";

test.describe("SignUp To Automation Exercise", () => {

    test("SignUp to Application", async ({ page }) => {

        const LoginActionref = new LoginAction(page, expect);
        const SignUpActionref = new RegisterPageAction(page, expect);

        await LoginActionref.launchbrowserandgotourl('https://automationexercise.com');
        await LoginActionref.clicksignuplogin();
        await SignUpActionref.entersignupname("Tanisha Nipunge");
        await SignUpActionref.entersignupemail(`tanisha${Date.now()}@gmail.com`);
        await SignUpActionref.clicksignupbutton();
        await SignUpActionref.selectgender();
        await SignUpActionref.enterpassword("Tanisha@123");
        await SignUpActionref.selectDate("28", "August", "2004");

        await SignUpActionref.enetrfirstname("Tanisha");
        await SignUpActionref.enterlastname("Nipunge");
        await SignUpActionref.entercompanyname("Capgemini");
        await SignUpActionref.enteraddress("Pune");

        await SignUpActionref.selectCountry("India");   
        await SignUpActionref.enterstate("Maharashtra");
        await SignUpActionref.entercity("Pune");
        await SignUpActionref.enterzipcode("411001");
        await SignUpActionref.entermobilenum("9876543210");

        await SignUpActionref.clickaccountcreate();

        await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible();

    });

});
