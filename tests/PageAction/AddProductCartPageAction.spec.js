import { ProductsPage } from "../PageObject/AddProductCartPageObject.spec.js";

export class ProductsPageAction extends ProductsPage {

    constructor(page, expect) {
        super(page, expect);
    }

    async clickProducts() {
        await this.products.click();
        console.log("Products Button Clicked");
    }

    async addFirstProductToCart() {

        await this.first_product.hover();

        await this.first_product.locator("//a[text()='Add to cart']").first().click();

        console.log("First Product Added To Cart");
    }

    async clickContinueShopping() {
        await this.continue_shopping.click();

        console.log("Continue Shopping Clicked");
    }

    async addSecondProductToCart() {

        await this.second_product.hover();

        await this.second_product.locator("//a[text()='Add to cart']").first().click();

        console.log("Second Product Added To Cart");
    }
    
    async clickViewCart() {
        await this.view_cart.click();

        console.log("View Cart Clicked");
    }

    async verifyProductsInCart() {
        await this.expect(this.cart_products).toHaveCount(2);

        console.log("Both Products Are Added To Cart");
    }

    async verifyProductDetails() {

        await this.expect(this.product_price).toHaveCount(2);

        await this.expect(this.product_quantity).toHaveCount(2);

        await this.expect(this.product_total).toHaveCount(2);

        console.log("Product Prices, Quantities And Total Prices Verified");
    }
}
