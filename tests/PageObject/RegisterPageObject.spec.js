// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
import { BaseClass } from "../BaseClass/BaseClass.spec.js";

export class RegisterPageObject extends BaseClass {

    constructor(page, expect) {
        super(page, expect);

        this.signup_login = this.page.locator("//a[@href='/login']");
        this.login_heading = this.page.getByRole('heading', { name: 'Login to your account' });
        this.signup_heading = this.page.getByRole('heading', { name: 'New User Signup!' });

        this.signup_name = this.page.locator("//input[@data-qa='signup-name']");
        this.signup_email = this.page.locator("//input[@data-qa='signup-email']");
        this.signup_button = this.page.locator("//button[@data-qa='signup-button']");

        this.details_heading = this.page.getByRole('heading', { name: 'Enter Account Information' });

        this.ms_gender = this.page.locator("//label[@for='id_gender1']");
        this.mrs_gender = this.page.locator("//label[@for='id_gender2']");

        this.signup_password = this.page.locator("//input[@type='password']");
        this.signup_firstname = this.page.locator("//input[@name='first_name']");
        this.signup_lastname = this.page.locator("//input[@name='last_name']");

        this.signup_companyname = this.page.locator("//input[@name = 'company']")
        this.signup_addressfirst = this.page.locator("//input[@name='address1']");
        this.signup_country = this.page.locator("//select[@name='country']");
        this.country = this.page.locator("//select[@data-qa='country']");

        this.signup_state = this.page.locator("//input[@name='state']");
        this.signup_city = this.page.locator("//input[@id='city']");
        this.signup_zipcode = this.page.locator("//input[@id='zipcode']");
        this.signup_phonenum = this.page.locator("//input[@id='mobile_number']");

        this.create_button = this.page.locator("//button[text()='Create Account']");

        this.signup_day = this.page.locator("//select[@data-qa='days']");
        this.signup_month = this.page.locator("//select[@data-qa='months']");
        this.signup_year = this.page.locator("//select[@data-qa='years']");
    }
}