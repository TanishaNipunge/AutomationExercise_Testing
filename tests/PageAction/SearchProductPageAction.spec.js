
import { SearchProductObject } from '../PageObject/SearchProductPageObject.spec';
export class SearchProductAction extends SearchProductObject {

    constructor(page) {
        super(page);
    }

    async clickproducts() {
        await this.products.click();
        console.info("Clicked on Products");
    }

    async enterproductname(productname) {
        await this.search_input.fill(productname);
        console.info("Entered Product Name");
    }

    async clicksearch() {
        await this.search_button.click();
        console.info("Clicked on Search Button");
    }
}