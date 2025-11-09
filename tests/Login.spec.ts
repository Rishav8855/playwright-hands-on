import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../fixtures/testData';

test.describe('Swag Labs - Login Tests (POM)', () => {

  test('Valid Login and Logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await loginPage.verifySuccessfulLogin();
    await loginPage.logout();
  });

  test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await loginPage.verifyLoginFailed();
  });

});
