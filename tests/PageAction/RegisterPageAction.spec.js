import { RegisterPageObject } from "../PageObject/RegisterPageObject.spec.js";

export class RegisterPageAction extends RegisterPageObject {

    constructor(page, expect) {
        super(page, expect);
    }

    async launchbrowserandgotourl(url) {
        await this.base.launchbrowserandgotourl(url);
        console.info("Browser Opened");
    }

    async clicksignuploginbutton() {
        await this.signup_login.click();
        console.info("Login clicked");
    }

    async entersignupname(name) {
        await this.signup_name.fill(name);
        console.info("Signup name entered");
    }

    async entersignupemail(email) {
        await this.signup_email.fill(email);
        console.info("Signup email entered");
    }

    async clicksignupbutton() {
        await this.signup_button.click();
        console.info("Signup button clicked");
    }

    async selectgender(){
        await this.ms_gender.click();
        console.info("Ms Gender Selected")
    }

    async selectgendersecond(){
        await this.mrs_gender.click();
        console.info("Mrs Gender Selected");
    }

    async enterpassword(Password){
        await this.signup_password.fill(Password);
        console.info("Password Entered");
    }

    async selectDate(day, month, year) {
        try {
            await this.day.selectOption({ label: day });
            await this.month.selectOption({ label: month });
            await this.year.selectOption({ label: year });
        }
        catch (e) {
            console.log("Date Selection Error: " + e);
        }
    }

    async enetrfirstname(firstname){
        await this.signup_firstname.fill(firstname)
        console.info("First Name Entered");
    }

    async enterlastname(lastname){
        await this.signup_lastname.fill(lastname);
        console.info("Last Name Entered")
    }

    async entercompanyname(companyname){
        await this.signup_companyname.fill(companyname)
        console.info("Enter Company Name");
    }

    async enteraddress(address){
        await this.signup_addressfirst.fill(address);
        console.info("Entered Address First field")
    }

    async entercountry(countryname){
        await this.signup_country.fill(countryname);
        console.info("Country Name Entered")
    }
    
    async selectCountry(country) {
        try {
            await this.country.selectOption({ label: country });
        }
        catch (e) {
            console.log("Country Selection Error: " + e);
        }
    }
    async enterstate(statename){
        await this.signup_state.fill(statename);
        console.info("State Entered")
    }
    
    async entercity(cityname){
        await this.signup_city.fill(cityname)
        console.info("City Entered")
    }

    async enterzipcode(zipcode){
        await this.signup_zipcode.fill(zipcode)
        console.info("ZipCode Entered")
    }

    async entermobilenum(mobilenum){
        await this.signup_phonenum.fill(mobilenum)
        console.info("Mobile Number Added")
    }

    async clickaccountcreate(){
        await this.create_button.click()
        console.info("Account Created")
    }


}