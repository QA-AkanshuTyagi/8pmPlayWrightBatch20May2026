import {test,expect} from '@playwright/test';

test('Verifying amazon website',async({page})=>{
const url:string='https://www.amazon.in/'
 await page.goto(url);







})