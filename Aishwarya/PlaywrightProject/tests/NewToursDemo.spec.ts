import {test, expect, Locator} from '@playwright/test';
test('To Verify WebElement using Inbuild Locator', async({page}) => 
{
      const URL: string = 'https://demo.guru99.com/test/newtours/'; 
      await page.goto(URL);
      await page.waitForTimeout(5000);
      //await page.getByRole('textbox',{name:"userName"}).fill('admin');
       const userName: Locator = await page.getByRole('textbox');
      console.log("Total TextBox Count is : "+userName.count()); 
      await userName.first().fill('admin');
      const pass: Locator = await page.getByRole('textbox');
      await pass.last().fill('admin');
      const loginbtn: Locator = await page.getByRole('button',{name:"Submit"});
      await loginbtn.click();
      await page.waitForTimeout(5000);
      if(await page.getByText('Login Successfully').isVisible())
      {
        console.log("Login is Successful"); 
        const logoutbtn : Locator = await page.getByText('SIGN-OFF');
        await logoutbtn.click();
         if(await page.getByText('sign-in here').isVisible())
         {
          console.log("Logout is Successful"); 
         }
      }
else
{
    console.log("Login is Unsuccessful");
  }

})
