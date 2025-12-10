import { test, expect } from "@playwright/test";

test.describe("amazon", () => {
  test("todays deal", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    await page.locator(".nav-div").nth(7).click();

    await page.locator(".a-image-container").nth(0).click();
    await page.waitForTimeout(3000);

    //   const elementToClick = page.locator("#buy-now-button");
    //   console.log(elementToClick);
    //   await elementToClick.nth(1).click();
    await page.locator("#buy-now-button").click();

    //   const elementToClick = page.locator(".a-button-input");
    //   console.log(elementToClick);
    //   await elementToClick.nth(7).click();

    await page.waitForTimeout(3000);

    await page.fill("#ap_email_login", "raniya@ces.com");

    await expect(page.locator("#ap_email_login")).toHaveValue("raniya@ces.com");

    await page.waitForTimeout(3000);
  });
});
