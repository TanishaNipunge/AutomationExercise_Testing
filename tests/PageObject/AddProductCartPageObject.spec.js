// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Products' button
// 5. Hover over first product and click 'Add to cart'
// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price


import { BaseClass } from "../BaseClass/BaseClass.spec.js";

export class ProductsPage extends BaseClass {

    constructor(page, expect) {
        super(page, expect);

        this.products = this.page.locator("//a[@href='/products']");

        this.first_product = this.page.locator("//div[@class='product-image-wrapper']").nth(0);

        this.second_product = this.page.locator("//div[@class='product-image-wrapper']").nth(1);

        this.addtocart = this.page.locator("//a[text()='Add to cart']");

        this.continue_shopping = this.page.locator("//button[text()='Continue Shopping']");

        this.view_cart = this.page.locator("//u[text()='View Clart']");

        // Cart Products
        this.cart_products = this.page.locator("//tr[contains(@id,'product-')]");

        this.product_name = this.page.locator(".cart_description h4 a");

        this.product_price = this.page.locator(".cart_price p");

        this.product_quantity = this.page.locator(".cart_quantity button");

        this.product_total = this.page.locator(".cart_total_price");
    }
}
