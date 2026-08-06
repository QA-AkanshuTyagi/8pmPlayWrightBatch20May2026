import { test, expect } from '@playwright/test';

test ( 'verify amazon website', async ({ page }) => {
const url: string = 'https://www.amazon.com/';
await page.goto(url);


} )