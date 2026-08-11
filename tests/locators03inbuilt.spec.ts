//using inbuilt locators of playwright
//import { test, expect } from '@playwright/test';
//test ('validating  Locators using Inbuilt Locators from Playwright',async({ page }) => {
 //await page.goto('https://www.amazon.com/');
//await page.getByRole('searchbox',{name:'search amazon'}).fill('laptop');
// await page.getByRole('button',{name: 'Go', exact:true}).click();

//await page.waitForTimeout(4000);
//})


import { test, expect } from '@playwright/test';
test ('validating  Locators using Inbuilt Locators from Playwright concept 2',async({ page }) => {
 await page.goto('https://testautomationpractice.blogspot.com/');
 await page.getByRole('textbox',{ name:'Enter Name',exact:true}).fill('nikhil');
 await page.getByRole('textbox',{ name:'Enter EMail',exact:true}).fill('np6529023@gmail.com');
 await page.getByRole('textbox',{name:'Enter Phone',exact:true}).fill('7078775185');
 await page.getByLabel('Address').fill('123 Main Street');  
await page.getByRole('radio',{name:'Male',exact:true}).click();
await page.getByRole('checkbox',{name:'Tuesday',exact:true}).click();
await page.getByRole('combobox',{name:'Country'}).selectOption('India');


})