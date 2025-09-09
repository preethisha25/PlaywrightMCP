import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.amazon.com');
  }

  async searchFor(query: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#twotabsearchtextbox', { timeout: 10000 });
    await this.page.fill('#twotabsearchtextbox', query);
    await this.page.press('#twotabsearchtextbox', 'Enter');
  }
}
