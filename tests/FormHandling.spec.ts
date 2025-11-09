import { test, expect } from '@playwright/test';

test('Form Handling Demo - W3Schools', async ({ page }) => {
  // Step 1: Go to form page
  await page.goto('https://www.w3schools.com/html/html_forms.asp', {
  waitUntil: 'domcontentloaded',
});

  // Step 2: Fill the text input fields
  await page.fill('input[name="firstname"]', 'Rishav');
  await page.fill('input[name="lastname"]', 'Mahato');

  // Step 3: Click on the submit button
  // (We can’t actually submit this demo form because it redirects,
  // so we’ll just verify that input values are entered correctly.)
  const firstName = await page.inputValue('input[name="firstname"]');
  const lastName = await page.inputValue('input[name="lastname"]');

  await expect(firstName).toBe('Rishav');
  await expect(lastName).toBe('Mahato');

  // Step 4: Optional — Take a screenshot for record
  await page.screenshot({ path: 'form-filled.png' });
});
