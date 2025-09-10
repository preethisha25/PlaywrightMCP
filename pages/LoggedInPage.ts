import { Page, expect } from '@playwright/test';

export class LoggedInPage {
  constructor(private page: Page) {}

  async verifyUrl() {
    await expect(this.page).toHaveURL(/.*practicetestautomation\.com\/logged-in-successfully\//);
  }

  async verifySuccessMessage() {
    const successMessage = await this.page.locator('body').innerText();
    expect(successMessage).toMatch(/Congratulations|successfully logged in/i);
  }

  async verifyLogoutButton() {
    // Use the provided XPath locator for the Log out button
    const logoutButton = this.page.locator("//a[contains(text(), 'Log out')]");
    // Increase timeout for visibility check
    await expect(logoutButton).toBeVisible({ timeout: 10000 });
  }
}