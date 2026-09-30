import {test,expect, Locator} from '@playwright/test';
test('find Table Element using Chaining Concept', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com');
const price:Locator = page.locator("//td[.='Learn Java']//parent::tr").locator('//td').nth(3);
console.log(await price.textContent());


})

test('find Table Element using Chaining Concept1', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com');
const AllDetails:Locator = page.locator("//tbody[@id='rows']").locator('//tr').nth(2);
console.log(await AllDetails.textContent());

const CPUValue:Locator = page.locator("//tbody[@id='rows']").locator('//tr').nth(2).locator('//td').nth(2);
console.log(await CPUValue.textContent());

})

test('fetching value from table using filter', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com');
const tablevalue:Locator = page.getByRole('table').filter({hasText:'Tablet'}).locator('//tr').nth(2);
console.log(await tablevalue.textContent());

const checkvalue:Locator = page.getByRole('table').filter({hasText:'Tablet'}).locator('//tr').nth(2).locator('//td').nth(3).locator('//input[@type="checkbox"]').first();
await checkvalue.check();

})