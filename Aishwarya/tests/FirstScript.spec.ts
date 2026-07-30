import {expect, test} from '@playwright/test';

test ('To Verify the Amazon URL' , async ({page}) =>
{

    await page.goto('https://www.amazon.in/');

})