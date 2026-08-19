import {test,expect} from '@playwright/test';
test('To verify login Functionality of OrangeHRM Application', async ({page})=>
{

    var urlname= 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    await page.goto(urlname);
    var un= await page.getByRole('textbox',{name:'username'});
             await un.fill("Admin");
   var pass=  await page.getByPlaceholder("Password");
             await pass.fill("admin123");
    //await page.getByText(" Login ").click(); -- on page 2 Login test are present so it will gives error
   var loginbtn=  await page.getByRole('button',{name:'Login'});
                  await loginbtn.click();
    
    await page.getByRole('link',{name:'Admin'}).click();
    
    await page.getByRole('button',{name:'Add'}).click();
    await page.locator("//div[@class='oxd-select-wrapper']").first().click();
    await page.getByRole('option',{name:'Admin'}).click();
    await page.locator("//div[@class='oxd-select-wrapper']").nth(1).click();
    await page.getByRole('option',{name:'Enabled'}).click();


   // await page.getByLabel('Username').fill('aishwarya');
    
})

test('To add new user in admin panel', async({page})=>
{ 
     

})

test('To verify logout functionality of OrangeHRM Application', async({page})=>
{
const userProfile = await page.locator("//span[@class='oxd-userdropdown-tab']");
    await userProfile.click();
    await page.waitForTimeout(5000);
    await page.getByText("Logout").click();
    await page.waitForTimeout(5000);
    await page.close();

})