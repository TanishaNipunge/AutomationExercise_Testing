// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'View Product' for any product on home page
// 5. Verify product detail is opened
// 6. Increase quantity to 4
// 7. Click 'Add to cart' button
// 8. Click 'View Cart' button
// 9. Verify that product is displayed in cart page with exact quantity

import { BaseClass } from "../BaseClass/BaseClass.spec";
export class VerifyCartObject extends BaseClass {

    constructor(page, expect) {
        super(page, expect);

        // Product Locators
        this.viewProductButton = this.page.locator('a[href="/product_details/1"]').first();

        // Product Details Page Locators
        this.productName = this.page.locator("//div[@class='product-information']/h2");
        this.quantity = this.page.locator("#quantity");
        this.addtocart = this.page.getByRole('button', { name: 'Add to cart' });

        // Cart Locators
        this.viewCart = this.page.locator("//u[text()='View Cart']");
        this.cartProduct = this.page.locator("#product-1");
        this.cartQuantity = this.page.locator("#product-1 .cart_quantity button");
    }
}
