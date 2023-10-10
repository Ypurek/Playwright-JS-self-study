// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeAll(async ({ page }) => {
  // Go to the starting url before each test.
  console.info('beforeAll');

});

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  console.info('beforeEach');
});

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
