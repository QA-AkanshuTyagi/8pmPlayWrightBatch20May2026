

/*Sometime we are not able to inspect element from dropdown then use following concept
 search item now related name items are listed in dropdown
 inspect 
 now open sources and press pause button and then click on the item you want to inspect
 we use here indexing concept to inspect the element from dropdownlist
 second option for pause screen: ctr+shift+P then type emulate a focused page
*/


import {test,expect, Locator} from '@playwright/test'
test('Inspect and search dropdownlist',async({page})=>{
 await page.goto('https://www.flipkart.com');
 const searchbox:Locator = page.getByRole('textbox', {name: 'Search for Products, Brands and More'});
 await page.waitForTimeout(5000);
 await searchbox.fill('iphone');
var list : Locator = page.locator('ul>li');
const no: number = await list.count();
console.log(no);
const items: string[] = await list.allInnerTexts();

for(let i = 0; i < no; i++)
{
  console.log(items);
}
})


test('Select Dropdown Listed Item ',async({page})=>{
 await page.goto('https://www.flipkart.com');
 const searchbox:Locator = page.getByRole('textbox', {name: 'Search for Products, Brands and More'});
 await page.waitForTimeout(5000);
 await searchbox.fill('iphone');
 // locate the 3rd suggestion and click it
 const iphone: Locator = page.locator('.Swx5kP').nth(2);
 //console.log(iphone.allTextContents());
 await iphone.click();

})