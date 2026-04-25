import { expect, test } from "@playwright/test";

test('searching for "mac" returns at least one result', async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("Search").fill("mac");
  await page.locator("button.btn.btn-default.btn-lg").click();

  const products = page.locator(".product-layout");
  await expect(products.first()).toBeVisible();
  const total = await products.count();
  expect(total).toBeGreaterThanOrEqual(1);
});
