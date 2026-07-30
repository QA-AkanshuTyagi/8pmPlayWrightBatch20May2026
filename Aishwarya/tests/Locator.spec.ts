import {test, expect} from '@playwright/test';
test('To find the locator of the element', async ({page}) => 
    {
        await page.goto('https://www.amazon.in/');
        
       // const signIn = await page.locator("//span[@id='nav-link-accountList-nav-line-1']")
      //   await signIn.click();

         const searchbar = await page.locator("#twotabsearchtextbox") 
         await searchbar.fill("Iphone 17")

         const searchbtn = await page.locator("#nav-search-submit-button")

         await searchbtn.click();

         const reviewArrow = await page.locator("")
    })