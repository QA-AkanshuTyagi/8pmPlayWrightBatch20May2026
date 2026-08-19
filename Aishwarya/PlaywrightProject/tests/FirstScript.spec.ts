import {test, expect} from '@playwright/test';

test ('To Verify the Amazon URL' , async ({page}) =>
{

    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000);
    await page.close();

})