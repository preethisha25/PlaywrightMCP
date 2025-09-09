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

    // Enhanced locator strategy with explicit wait
    const searchBoxLocator = "//input[@name = 'field-keywords']";
    try {
      await this.page.waitForSelector(searchBoxLocator, { timeout: 15000, state: 'visible' });
      await this.page.fill(searchBoxLocator, query);
      await this.page.press(searchBoxLocator, 'Enter');
    } catch (error) {
      console.error('Search box not found. Logging page content for debugging.');
      console.log(await this.page.content()); // Log the page's HTML for debugging
      throw error;
    }
  }
}
