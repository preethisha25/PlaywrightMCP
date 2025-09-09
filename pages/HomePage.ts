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
   await this.page.getByPlaceholder('Search Amazon').click();
   await this.page.getByPlaceholder('Search Amazon').fill(query);
   await this.page.getByPlaceholder('Search Amazon').press('Enter');
  }
}
