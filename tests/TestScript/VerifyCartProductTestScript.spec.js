
import { test, expect } from "@playwright/test";
import { VerifyCartAction } from "../PageAction/VerifyCartProductPageAction.spec";

test("Verify Product Quantity in Cart", async ({ page }) => {

    const cartAction = new VerifyCartAction(page, expect);

    await cartAction.launchBrowserAndNavigate();
    await cartAction.verifyHomePage();

    await cartAction.clickViewProduct();
    await cartAction.verifyProductDetails();

    await cartAction.increaseQuantity();
    await cartAction.clickAddToCart();

    await cartAction.clickViewCart();
    await cartAction.verifyCartQuantity();

});
