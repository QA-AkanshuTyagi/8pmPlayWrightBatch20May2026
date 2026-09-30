import {test, expect, Locator} from '@playwright/test';
test('Drag and drop element' , async({page})=>{
    await page.goto('https://grotechminds.com/drag-and-drop/');
    const element: Locator = page.locator("//img[@id='drag1']");
    const location: Locator = page.locator("//div[@id='div2']");
    await element.dragTo(location);
})