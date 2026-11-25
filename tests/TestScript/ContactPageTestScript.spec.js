import { test, expect } from "@playwright/test";
import { LoginAction } from "../PageAction/LoginPageAction.spec.js";
import { ContactAction } from "../PageAction/ContactPageAction.spec.js";

test.describe("SignUp To Automation Exercise", () => {

    test("SignUp to Application", async ({ page }) => {
        const LoginActionref = new LoginAction(page, expect);
        const ContactActionref = new ContactAction(page, expect);

        await LoginActionref.launchbrowserandgotourl('https://automationexercise.com');

        page.once('dialog', dialog => dialog.accept());

        await ContactActionref.clickcontactus();
        await ContactActionref.entername('Test User');
        await ContactActionref.enteremail('testuser@example.com');
        await ContactActionref.entersubject('Test Subject');
        await ContactActionref.entermessage('Test Message');
        await ContactActionref.uploadfile('C:/Users/tanis/OneDrive/Pictures/3D image of a cute c.png');
        await ContactActionref.clicksubmit();
        await ContactActionref.clickhome();
    });

});
