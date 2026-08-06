//xpath
import { test, expect } from '@playwright/test';
test ('validating Locator using xpath',async({ page }) => {
 await page.goto('https://www.amazon.com/');
 const searchBox:Locator = page.locator('//input[@id="twotabsearchtextbox"]');
await searchBox.fill('laptop');
const searchButton:Locator = page.locator('//input[@id="nav-search-submit-button"]');
    await searchButton.click();

})




