import {test,expect, Locator} from '@playwright/test'
test('Using getByRole Locator', async({page}) =>
{
   const url : string = 'https://automationexercise.com/login';
   await page.goto(url);
  const un:Locator = await page.getByRole('textbox', {name:'Email Address'}).first();
  await un.fill('aishumahadik.am@gmail.com');

  const pass: Locator = await page.getByRole('textbox',{name:'Password'});
  await pass.fill('aishwarya123');

  const loginbtn: Locator = await page.getByRole('button',{name:'Login'});
  await loginbtn.click();
})

test('Using getByPlaceholder', async({page})=>
{
  const url : string ='https://automationexercise.com/login';
  await page.goto(url);
  const name:Locator = page.getByPlaceholder('Name');
  await name.fill('Aishwarya');
  
  const emailAddress :Locator =  page.getByPlaceholder('Email Address').nth(1);
  console.log(await emailAddress.count());
  await emailAddress.fill('aishumahadik.am@gmail.com');

  const signup: Locator = page.getByRole('button',{name:'SignUp'});
  await signup.click();
  await page.waitForTimeout(3000);
  await page.close();
  

})

test('using getByText', async({page})=>
{
   const url:string = 'https://automationexercise.com/login'; 
    await page.goto(url);
    const text: Locator = page.getByText('New User Signup!',{exact:true});
   console.log(await text.isVisible());
   console.log(await text.textContent());
})

test('Using getByLabel' , async({page})=>
{
  await page.goto('https://www.amazon.in');
  const search = page.getByLabel('Search Amazon.in');
  await search.fill('macbook pro');
})

test('using getByAltText', async({page})=>
{
  await page.goto('https://www.amazon.in');
 const img: Locator =  page.getByAltText('3 months FREE. Unlimited music, ad-free.',{exact:true});
//  console.log(await img.isVisible());
    await img.screenshot({path:'Aishwarya/PlaywrightProject/screenshots/alttext.png'});
    await img.click();

})

test('Using getByTitle', async({page})=>
  {
    await page.goto('https://www.amazon.in');
    await page.locator('//a[text()= "Amazon Pay" ]').click();
    const title = page.getByTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    const titleText = await title.getAttribute('title');
    console.log(titleText);


  })


  test('Using getByRole',async({page})=>
  {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', {name: 'username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    


  })
