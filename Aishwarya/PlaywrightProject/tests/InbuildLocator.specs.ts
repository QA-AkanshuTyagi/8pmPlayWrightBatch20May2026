import {test,expect,Locator} from '@playwright/test';
test('To Locate WebElement using Inbuild Locators', async({page})=>
{
   const URL: string = 'https://demo.guru99.com/test/newtours/';
   await page.goto(URL);
})