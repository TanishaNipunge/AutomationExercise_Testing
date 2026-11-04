import { expect } from '@playwright/test';

export class BaseClass {

    constructor(page) {

        this.page = page;

    }

    async launchbrowserandgotourl(url) {

        await this.page.goto(url);

    }

    async verifytitle(title) {

        await expect(this.page).toHaveTitle(title);

    }

    async closebrowser() {

        // Playwright fixture automatically closes browser.

    }

}