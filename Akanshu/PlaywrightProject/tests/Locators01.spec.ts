//xpath
import{test, expect} from '@playwright/test';
test('validating locators using xpath',async({page})=>{
await page.goto('https://www.amazon.in');
const searchBar= page.locator("//input[@id='twotabsearchtextbox']")
await searchBar.fill('iphone17');

const searchbutton=page.locator("//input[@id='nav-search-submit-button']")
await searchbutton.click();
})
//css also completed:

//using id: #idvalue
//using class:.classvalue
//using tagname&class : tagname.classvalue
//using attribute: [attribute='value']
//using tagname&attribute: tagname[attribute='value'] 
//using tagname&class&attribute: tagname.classvalue[attribute='value']
