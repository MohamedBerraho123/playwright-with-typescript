import{test,expect} from '@playwright/test';
test('Examples of playwright locators',async ({page})=>{
  //Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/login");

  //Exmaples of built-in Locators

  //1. Get by role
  const loginButton=page.getByRole('button',{name:'Login'});
  await expect(loginButton).toBeVisible();
  //2. Get by text
  const loginHeaderText=page.getByText('Login page');
  await expect(loginHeaderText).toBeVisible();
  //3.Get by Label
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('password').fill('SuperSecretPassworld!');
})