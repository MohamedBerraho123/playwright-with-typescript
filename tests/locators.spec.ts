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

  //4.css selectors Examples
  //1.Get by id css selector
  await page.locator('#username').fill('selected_by_css'); 
  //2.Get by tag attribute and attribute value
  await page.locator('input[name="password"]').fill('selected_by_css');
  //3.GEt by class name
  await page.locator('.radius').click();
  //Xpath Selector Examples
  //1.Get by XPath ID
  await page.locator('//input[@id="username"]').fill('selected_by_xpath');
  //2. GET by Xpath with text match using contains
  await page.locator('xpath=//button[contains(., "Login")]').click();
  //3.store element by text for failed login and assert it is visible
  const errorMessage = page.locator('//div[@id="flash"]');
  await expect(errorMessage).toContainText('Your username is in valid!');
  //
})