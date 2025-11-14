import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const url = 'https://www.saucedemo.com/';
  const username = 'standard_user';
  const password = 'secret_sauce';
  await page.goto(url);
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveScreenshot();
  await expect(page.locator('div').filter({ hasText: 'Swag Labs' }).nth(5)).toHaveScreenshot();
  await expect(page.locator('[data-test="footer"]')).toHaveScreenshot();
});