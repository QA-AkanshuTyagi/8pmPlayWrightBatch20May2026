import {test,expect,Locator} from '@playwright/test'
test(' File Upload Concept' , async ({page})=>{
    await page.goto('https://grotechminds.com/registration/');
    const uploadfile: Locator = page.getByRole('button', {name:'file'});
    await uploadfile.setInputFiles('/Users/aishwarya/GitHubRepos/8pmPlayWrightBatch20May2026/8pmPlayWrightBatch20May2026/Aishwarya/PlaywrightProject/tests/DataFiles/FileUpload.txt');
}) 

