import {test , expect} from '@playwright/test';
 test ('chaining  concept',async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');    
const value=await page.locator("//td[.='Learn Selenium']/parent::tr/following::tr").locator("//td").nth(2).textContent();
 
 console.log(value);



})

 test ('chaining  concept 2 ',async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');    

  const value=await page.locator("//tbody[@id='rows']").locator("//tr").nth(2).locator("//td").nth(2).textContent();
 
 console.log(value);

})

test ('filter concept',async ({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
   await page.getByRole("table").filter({hastext:'System'}).locator("//tr").nth(2).textContent();






})








