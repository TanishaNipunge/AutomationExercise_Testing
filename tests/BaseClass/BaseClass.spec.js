import { expect } from '@playwright/test';

export class BaseClass {

    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }
    async launchbrowserandgotourl(url) {

        await this.page.goto(url);

    }

    async verifytitle(title) {

        await expect(this.page).toHaveTitle(title);

    }

    async closebrowser() {

    }

}