export class LoginPage {
    constructor(page) {
        this.page = page;

        this.signup_login = page.locator("//a[@href='/login']");

        this.login_heading = page.getByRole('heading', {name: 'Login to your account'});

        this.email = page.locator("//input[@data-qa='login-email']");

        this.password = page.locator('[data-qa="login-password"]');

        this.login_button = page.locator("//button[@data-qa='login-button']");

        this.error_message = page.getByText('Your email or password is incorrect!');
        // this.logged_in_text = page.getByText('Logged in as');
        this.logged_in_text = page.getByText(/Logged in as/i);

        this.logout_button = page.locator('a[href="/logout"]');
    }
}
