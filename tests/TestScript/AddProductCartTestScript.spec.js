
import { test, expect } from "@playwright/test";
import { ProductsPageAction } from "../PageAction/AddProductCartPageAction.spec.js";

test.describe("Add Multiple Products To Cart", () => {

    test("Verify Two Products Added To Cart", async ({ page }) => {

        const ProductsActionRef = new ProductsPageAction(page, expect);

        // 1. Launch browser and navigate to URL
        await page.goto("http://automationexercise.com");

        // 2. Verify Home Page
        await expect(page).toHaveURL("https://automationexercise.com/");

        console.log("Home Page Displayed Successfully");

        // 3. Click Products
        await ProductsActionRef.clickProducts();

        // 4. Add First Product
        await ProductsActionRef.addFirstProductToCart();

        // 5. Continue Shopping
        await ProductsActionRef.clickContinueShopping();

        // 6. Add Second Product
        await ProductsActionRef.addSecondProductToCart();

        // 7. View Cart
        await ProductsActionRef.clickViewCart();

        // 8. Verify Both Products
        await ProductsActionRef.verifyProductsInCart();

        // 9. Verify Product Details
        await ProductsActionRef.verifyProductDetails();

    });

});
