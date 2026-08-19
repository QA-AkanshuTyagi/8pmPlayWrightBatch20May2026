import {test, expect} from '@playwright/test';
test('To Verify WebElement using xpath and Css Locator', async({page}) => 
{
    const URL: string = 'https://www.amazon.in';
    await page.goto(URL);
    await page.waitForTimeout(3000);

    const searchbox = await page.locator("//input[@id='twotabsearchtextbox'] ");
    await searchbox.fill('iphone 17');
    const searchbtn = await page.locator ("//input[@id='nav-search-submit-button']");
    await searchbtn.click();
    const firstitem = await page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']").first();
    await firstitem.click();
  
    
    // print text from website
    let a = await page.locator("//div[text() = 'New customer? ' ]").textContent();
    console.log(a);  
    // print some specific word from that text  
    let b = await page.locator("//div[contains(text(),'New customer? ')]").textContent();
    console.log(b?.match('New customer?')?.[0]);
  
  
  //const addtocartbtn = await page.locator("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']");
    const addtocartbtn = await page.locator("//span[@id='submit.add-to-cart']//ancestor::span[@id='submit.add-to-cart-announce']").textContent();
   
    console.log(addtocartbtn);

})
