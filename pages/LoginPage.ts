import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;
  readonly errorMessage;
  readonly menuButton;
  readonly logoutLink;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
