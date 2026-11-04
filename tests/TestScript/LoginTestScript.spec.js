import { test, expect } from '@playwright/test';
import { LoginAction } from '../PageAction/LoginPageAction.spec.js';

test.describe('Automation Exercise Login Tests', () => {
    let loginActionRef;

    test.beforeEach(async ({ page }) => {
        loginActionRef = new LoginAction(page);
        await loginActionRef.launchbrowserandgotourl('https://automationexercise.com');
        await loginActionRef.clicksignuplogin();
    });

    test('Valid Login Test', async () => {
        await loginActionRef.loginToApplication('Rightdata@gmail.com', 'Rightdata@123');
        await expect(loginActionRef.loginPage.logged_in_text).toBeVisible();
        await loginActionRef.logout();
        await expect(loginActionRef.loginPage.login_heading).toBeVisible();
    });

    test('Invalid Login Test', async () => {
        await loginActionRef.loginToApplication('wrongemail@gmail.com', 'wrongpassword123');
        await expect(loginActionRef.loginPage.error_message).toBeVisible();
    });
});
