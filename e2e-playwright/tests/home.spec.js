import { expect, test } from "@playwright/test";

test("home page shows store logo", async ({ page }) => {
  await page.goto("/");

  const logo = page.locator("#logo a");
  await expect(logo).toBeVisible();
  await expect(logo).toContainText(/Your Store/i);
});
