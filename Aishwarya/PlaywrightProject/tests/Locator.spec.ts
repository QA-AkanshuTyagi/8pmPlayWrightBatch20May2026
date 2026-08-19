import {test, expect} from '@playwright/test';
test('To find the locator of the element', async ({page}) => 
    {
        await page.goto('https://www.amazon.in/');
        
       // const signIn = await page.locator("//span[@id='nav-link-accountList-nav-line-1']")
      //   await signIn.click();

         const searchbar = await page.locator("#twotabsearchtextbox") 
         await searchbar.fill("Iphone 17")

         const searchbtn = await page.locator("#nav-search-submit-button")

         await searchbtn.click();
         //const iphone = await page.locator("//span[.='iPhone Air 256 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Space Black']//ancestor::a[@href='/sspa/click?ie=UTF8&spc=MTo1NTM0MjkwNjc2MTY2MTg2OjE3ODUzOTM5NzY6c3BfYXRmOjMwMDcxNDEyOTAyMjYzMjo6MDo6&url=%2FiPhone-Air-256-GB-Promotion%2Fdp%2FB0FQFBDQJ1%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2LVEGUYLG6C7M%26dib%3DeyJ2IjoiMSJ9.d-UljqCpbsyhmVBtcP7twQP7CXPufkpEQxzvSxGTmAsn-IVYE_lAB-eXqOJpJBgwi0r8g7jollTO97lGlGerhrR33jvHf8q7Y9g1EIiXD69FIoWPg1_drErwYHrc7v7pXlmpSmpYRAZI9_FvqNzYIcIXbO2P913Z-CyszAiLUHi0jU4hyKF1FogaH7hqqa7RWQu730WYHv-k1l53JvYCge07eOf9w-p9znUxZFYs0y4.FVF_b1jbIdQ7I1_BuoHC5rEWW52Vmi9eMZnkZAIF9K8%26dib_tag%3Dse%26keywords%3Diphone%2B17%26qid%3D1785393976%26sprefix%3Diphone%2B17%252Caps%252C269%26sr%3D8-1-spons%26aref%3DRZV09fQlxc%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=RZV09fQlxc&sp_cr=ZAZ']").textContent();
         
      await page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']").first().click();
         await page.waitForTimeout(3000);
         
         //console.log(iphone);
         
    })