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
    await this.page.fill('input[name="field-keywords"]', query);
    await this.page.press('input[name="field-keywords"]', 'Enter');
  }
}
