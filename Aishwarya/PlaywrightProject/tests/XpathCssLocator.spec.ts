import {test, expect, Locator} from '@playwright/test';
test('To Verify WebElement using xpath and Css Locator', async({page}) => 
{
    const URL: string = 'https://www.amazon.in';
    await page.goto(URL);
    await page.waitForTimeout(3000);

    const searchbox:Locator = page.locator("//input[@id='twotabsearchtextbox'] ");
    await searchbox.fill('iphone 17');
    const searchbtn:Locator = page.locator ("//input[@id='nav-search-submit-button']");
    await searchbtn.click();
    const firstitem:Locator = page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']").first();
    await firstitem.click();
  
    
    // print text from website
    //let a = await page.locator("//div[text() = 'New customer? ' ]").textContent();
    //console.log(a);  
    // print some specific word from that text  
   // let b = await page.locator("//div[contains(text(),'New customer? ')]").textContent();
   // console.log(b?.match('New customer?')?.[0]);
  
  //await page.waitForTimeout(5000);
  //const addtocartbtn = await page.locator("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']");
    const addtocartbtn:Locator =  page.locator("(//input[@id='add-to-cart-button'])[1]");
    await addtocartbtn.click();
    

})
test('To Verify WebElement using xpath and Css Locator2', async({page}) => 
{
    await page.goto('https://www.amazon.in/iPhone-Pro-512-Promotion-Breakthrough/dp/B0FQF2ZJWT/ref=sr_1_1_sspa?crid=2VDAQTGKUG3KA&dib=eyJ2IjoiMSJ9.Ndee-iWRtNig694b-q_cz6pHd_xdwQ74mK0Ew85Dp_gHlUzfPqOqhHNxsnY7NlY7Sr7sg0uSUy0bmu8UTFdnuChMbqUPZntdzuli2DvG4AqVL0TI_0uwg4Kqn-vfZefh1Ha-aht0fRllt3v2gCU3ZhqfSzz-vg6cVSSwqH7xhy_91lXL1Pe_OQhlavVbsQEaZ-upqepnBXtObekyvQga-KwoqT8EgkDxuAiEuBLSVWQ.hxxcDyFLBadkLalMr1L9bfGPTt3qzG6xm5RJvttZvMg&dib_tag=se&keywords=iphone%2B17&qid=1787239935&sprefix=iphone%2B17%2Caps%2C271&sr=8-1-spons&aref=TMnrjU71nO&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
    const addtocartbtn:Locator =  page.locator("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']");
     await addtocartbtn.click();
})