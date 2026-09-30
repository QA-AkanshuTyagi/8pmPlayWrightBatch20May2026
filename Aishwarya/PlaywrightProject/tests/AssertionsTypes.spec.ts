import {test,expect,Locator} from '@playwright/test'
test(' Verify Page Assertions' , async({page})=>{
 const URL: string= 'https://www.facebook.com/login/';
 await page.goto(URL);
 const currentURL : string =  page.url();
 console.log(currentURL);
 const pagetitle : string = await page.title();
 console.log(pagetitle);
 await expect(page).toHaveURL(currentURL);  // checking current url and expected url
 await expect(page).toHaveTitle(pagetitle); //  checking page title and expected page title
 
})

test(' Verify Text Assertions ', async({page})=>{
const URL: string= 'https://www.facebook.com/login/';
await page.goto(URL);
const text = page.locator("//span[text()='Log in to Facebook']");
console.log(await text.textContent());
await expect(text).toHaveText('Log in to Facebook');  // checking text is present or not
await expect(text).toContainText('to');      // checking text contains  'to' or not
})

test(' Verify value Assertions ', async({page})=>{
const URL: string= 'https://www.facebook.com/login/';
await page.goto(URL);
await page.waitForTimeout(3000);
const email:Locator = page.getByRole('textbox', { name: 'email' });
await email.fill('aishumahadik.am@gmail.com');
console.log(await email.inputValue());    //fetch value from email text box
await expect(email).toHaveValue('aishumahadik.am@gmail.com');  // checking value is present or not
})


test(' Verify Locator Assertions ', async({page})=>{
const URL: string= 'https://www.facebook.com/login/';
await page.goto(URL);
const email:Locator = page.getByRole('textbox', { name: 'email' });
await expect(email).toBeVisible();  // checking email text box is visible or not
await expect(email).toBeEnabled();  // checking email text box is enabled or not
await expect(email).toHaveCount(1);  // checking how much email text box is there
await expect(email).toBeEditable();  // checking email text box is editable or not
//await expect(email).toBeDisabled();  // checking email text box is disabled or not
//await expect(email).toBeHidden();  // checking email text box is hidden or not
//await expect(email).toBeChecked();  // checking email text box is checked or not
await expect(email).toBeEmpty();  // checking email text box is empty or not
await expect(email).toHaveAttribute('name', 'email');  // checking email text box has attribute name or not
await expect(email).toHaveClass('x1i10hfl xggy1nq xtpw4lu x1tutvks x1s3xk63 x1s07b3s x1a2a7pz xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 xzsf02u x1sfh74k x1lliihq x15h3p50 x10emqs4 x3fqe8q x1vr9vpq x1iyjqo2 x10d0gm4 x1p97g3g x1fhayk4 xmtqnhx x16wdlz0 x3cjxhe x11ig0mb xe9ewy2 x11lt19s xeuugli xgmu6d7 xlyipyv x1quw8ve xx0ingd x1hcrkkg xfvqz1d x12vv892 x1hu168l xttzon8 xdj266r xyiysdx x14vy60q x109j2v6 x1x1zemo x1y44fgy xdzva22 xs8nzd4 x1fzehxr xha3pab');  // checking email text box has class or not
await expect(email).toHaveId('_R_c9l6neappb6amH1_');  // checking email text box has id or not
await expect(email).toBeTruthy();  // checking email text box is truthy or not
})