// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. Enter product name in search input and click search button
// 7. Verify 'SEARCHED PRODUCTS' is visible
// 8. Verify all the products related to search are visible


import { BaseClass } from '../BaseClass/BaseClass.spec.js';
export class SearchProductObject extends BaseClass {

constructor(page) {
    super(page);


    this.products = this.page.locator("//a[@href='/products']");

    this.search_input = this.page.locator("//input[@id='search_product']");

        this.search_button = this.page.locator("//button[@id='submit_search']");

        this.searched_products = this.page.locator("//h2[text()='Searched Products']");

        this.product_list = this.page.locator("//div[@class='productinfo text-center']");
}


}