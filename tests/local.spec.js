// @ts-check
const { test, expect } = require('@playwright/test');


test('has header in local server', async ({ page }) => {
  await page.goto('/');

  let header = page.locator('h1');
  await expect(header).toHaveText(/Interactive/);
  
});
