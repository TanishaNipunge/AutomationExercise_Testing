import { ContactPageObject } from "../PageObject/ContactPageObject.spec.js";

export class ContactAction extends ContactPageObject {
    constructor(page, expect) {
        super(page, expect);
    }

    async clickcontactus() {
        await this.contactus.click();
        console.info("Clicked on Contact Us");
    }

    async entername(name) {
        await this.contactname.fill(name);
        console.info("Entered Name");
    }

    async enteremail(email) {
        await this.contactemail.fill(email);
        console.info("Entered Email");
    }

    async entersubject(subject) {
        await this.subject.fill(subject);
        console.info("Entered Subject");
    }

    async entermessage(message) {
        await this.message.fill(message);
        console.info("Entered Message");
    }

    async uploadfile(filepath) {
        await this.uploadfileInput.setInputFiles(filepath);
        console.info("File Uploaded");
    }

    async clicksubmit() {
        await this.submit.click();
        console.info("Clicked Submit");
    }

    // async clickhome() {
    //     await this.home.click();
    //     console.info("Clicked Home");
    // }
}
