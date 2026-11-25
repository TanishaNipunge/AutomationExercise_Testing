import { BaseClass } from "../BaseClass/BaseClass.spec.js";

export class ContactPageObject extends BaseClass {
    constructor(page, expect) {
        super(page, expect);
        this.contactus = this.page.locator("//a[@href='/contact_us']");
        this.contactname = this.page.locator("//input[@name='name']");
        this.contactemail = this.page.locator("//input[@name='email']");
        this.subject = this.page.locator("//input[@name='subject']");
        this.message = this.page.locator("//textarea[@id='message']");
        this.uploadfileInput = this.page.locator("//input[@name='upload_file']");
        this.submit = this.page.locator("//input[@type='submit']");
        this.home = this.page.locator("//a[@class='btn btn-success']");
    }
}
