import { test, expect } from '@playwright/test';
import { SearchProductAction } from '../PageAction/SearchProductPageAction.spec.js';

test('Search Product', async ({ page }) => {

    const search = new SearchProductAction(page);

    
    await page.goto('https://automationexercise.com/', {waitUntil: 'domcontentloaded'});

   
    await expect(page).toHaveTitle(/Automation Exercise/);

   
    await search.clickproducts();

    
    await expect(page.getByText('All Products', { exact: true })).toBeVisible();

   
    await search.enterproductname('Winter Top');

   
    await search.clicksearch();

    
    await expect(search.searched_products).toBeVisible();

    
    await expect(search.product_list.first()).toBeVisible();

    
    await expect(page.getByText('Winter Top', { exact: true }).first()).toBeVisible();

});