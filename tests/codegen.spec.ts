import { test, expect } from '@playwright/test';

test.describe('Login tests', () => {
  test('Positive login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await page.getByRole('button', { name: ' Login' }).click();
    await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  });

  test('Negative login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('fail user');
    await page.getByText('Password', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('failpassword');
    await page.getByRole('button', { name: ' Login' }).click();
    await expect(page.locator('#flash')).toContainText('Your username is invalid! ×');
  });
});