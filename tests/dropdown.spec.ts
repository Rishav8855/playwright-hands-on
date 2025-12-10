import { test, expect } from "@playwright/test";

// test("handling dropdown", async ({page}) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
//     await page.selectOption("#select-demo", {
//         label: "Wednesday"
//     })
//     await page.waitForTimeout(1000);

//     // expect(page.getByText("Day selected :- Tuesday")).toBeVisible()
//     const myElement = page.locator('.selected-value');
//     const elementText = (await myElement.innerHTML())

//     expect(elementText).toBe("Day selected :- Wednesday");

// })

test("handling dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.waitForTimeout(3000);

  await page.selectOption("#multi-select", [
    {
      label: "California",
    },
  ]);

  await page.waitForTimeout(3000);

  await page.getByRole("button").nth(3).click();
  // await page.selectOption("#multi-select", {
  //     label: "Florida"
  // })
  //  await page.getByText('Get Last Selected').click();

  await page.waitForTimeout(3000);

  //   const myElement = page.locator(".genderbutton");
  //   const elementText = await myElement.innerHTML();

  //   expect(elementText).toBe("California");
});
