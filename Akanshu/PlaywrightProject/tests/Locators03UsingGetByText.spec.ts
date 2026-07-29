//xpath
import{test, expect} from '@playwright/test';
// test('validating locators using Ijnbuilt locators of playwirght',async({page})=>{
// await page.goto('https://www.amazon.in/');



// //using inbuilt locators of playwright
// await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill('iphone 17');
// await page.getByRole('button',{name:'Go', exact:true}).click();

// //getByRole
// //getbytext
// //getbyplaceholder
// //getbylabel
// //getbyalttext
// ///getbytitle
// //getbydisplayvalue
// //getbytestid


// })
test('validating locators using Inbuilt locators "getby text"',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');



//getbytext
const text=await page.getByText('Section 1').nth(0).textContent();

console.log(text);
//await page.getByRole('button',{name:'Go', exact:true}).click();

//getByRole
//getbytext
//getbyplaceholder
//getbylabel
//getbyalttext
///getbytitle
//getbydisplayvalue
//getbytestid


})