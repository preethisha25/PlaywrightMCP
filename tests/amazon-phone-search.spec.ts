import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test('Amazon: search for iphone 16 and verify results', async ({ page }) => {
  const homePage = new HomePage(page);
  const resultsPage = new SearchResultsPage(page);

  await homePage.goto();
  await homePage.searchFor('iphone 16');
  await resultsPage.verifyiPhoneInList(); 
});
