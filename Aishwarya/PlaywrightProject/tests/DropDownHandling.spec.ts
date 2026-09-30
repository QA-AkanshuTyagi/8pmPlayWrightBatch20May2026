import { test, expect, Locator } from '@playwright/test'
test('To handle single value dropdown using select class and through value',  async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com');
 const countryDropdown: Locator = page.locator('#country');
 await countryDropdown.selectOption({value:'uk'});
 await page.waitForTimeout(5000);
 await page.close();    // closing current page
})

test('To handle single value dropdown using select class and through label', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com');
   const countryDropdown: Locator = page.locator("//select[@id='country']");
   await countryDropdown.selectOption({label: ' Germany '});   // label comes from textname.
   await page.waitForTimeout(5000);
   await page.close();
})

test('To handle single value dropdown using select class and through index', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com');
   const countryDropdown: Locator = page.locator("//select[@id='country']");
   await countryDropdown.selectOption({index: 5});   
   await page.waitForTimeout(5000);
   await page.close();
})

test('To handle single value dropdown using select class and through text', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com');
   const countryDropdown: Locator = page.locator("//select[@id='country']");
   await countryDropdown.selectOption('India');   
   await page.waitForTimeout(5000);
   await page.close();
})

test('Validate total no of dropdown values', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const dropdwonCount: Locator = page.locator('#country>option');  // from 1 node to second node
    await expect(dropdwonCount).toHaveCount(10);
   //await expect(dropdwonCount).toHaveCount(11);  // check error there are cpunt for expected and recieved for confirmation
})

test('To handle Multiple value dropdown using select class',  async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com');
 const countryDropdown: Locator = page.locator('#colors');
 await countryDropdown.selectOption(['red','blue','green']);   // by values 
 //await countryDropdown.selectOption([{label: 'Yellow'}, {label: 'Red'}]);  // by label 
 //await countryDropdown.selectOption([{index: 2},{index: 3}]);    // by index
 //await countryDropdown.selectOption(['Red','Blue']);   // by text

 await page.waitForTimeout(5000);
 await page.close();    // closing current page
})
