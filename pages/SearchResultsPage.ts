import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async verifyiPhoneInList() {
  // Wait for at least one search result containing 'iPhone' to be visible
  await this.page.waitForSelector("//div[@data-cy='title-recipe']/a/h2/span[contains(text(), 'iPhone')]", { timeout: 20000 });
  const allTitles = await this.page.locator("//div[@data-cy='title-recipe']/a/h2/span[contains(text(), 'iPhone')]").allTextContents();
  console.log('Amazon search result titles containing "iPhone":', allTitles);
  // Check if at least one link contains 'iPhone'
  expect(allTitles.length).toBeGreaterThan(0);
  }
}
