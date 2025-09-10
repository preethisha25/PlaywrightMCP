import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async enterUsername(username: string) {
    await this.page.fill('#username', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async submit() {
    await this.page.click('#submit');
  }
}