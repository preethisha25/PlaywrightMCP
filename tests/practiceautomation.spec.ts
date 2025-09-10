import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoggedInPage } from '../pages/LoggedInPage';

test('Practice Automation Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loggedInPage = new LoggedInPage(page);

  // Navigate to the login page and log in
  await loginPage.navigate();
  await loginPage.enterUsername('student');
  await loginPage.enterPassword('Password123');
  await loginPage.submit();

  // Verify the logged-in page
  await loggedInPage.verifyUrl();
  await loggedInPage.verifySuccessMessage();
  await loggedInPage.verifyLogoutButton();
});