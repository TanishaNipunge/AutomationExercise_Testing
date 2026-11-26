
import { VerifyCartObject } from "../PageObject/VerifyCartProductPageObject.spec";

export class VerifyCartAction extends VerifyCartObject {
    constructor(page,expect){
        super(page,expect)
    }
    async launchBrowserAndNavigate() {
        await this.page.goto("http://automationexercise.com");
        console.info("Browser Launched!!");
    }

    async verifyHomePage() {
        await this.expect(this.page).toHaveTitle(/Automation Exercise/);
        console.info("Home Page Verified");
    }

    async clickViewProduct() {
        await this.viewProductButton.click();
        console.info("Clicked Product Button");
    }

    async verifyProductDetails() {
        await this.expect(this.productName).toBeVisible();
        console.info("Product Details Verified");
    }

    async increaseQuantity() {
        await this.quantity.fill("4");
        console.info("Product Quantity Increased to 4");
    }

    async clickAddToCart() {
        await this.addtocart.waitFor({ state: 'visible' });
        await this.addtocart.click();
        console.info("Add to Cart Button Clicked");
    }

    async clickViewCart() {
        await this.viewCart.click();
        console.info("View Cart Button Clicked");
    }

    async verifyCartQuantity() {
        await this.expect(this.cartProduct).toBeVisible();
        await this.expect(this.cartQuantity).toHaveText("4");
        console.info("Product Quantity Verified Successfully in Cart");
    }
}
