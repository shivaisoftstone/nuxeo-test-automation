const { page, test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


test.describe('Log into Nuxeo page', () => {
  let loginPage;
  let userType = "admin"; // or "amp" based on your requirement

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    const url = process.env[process.env.ENVIRONMENT + "_BASE_URL"]
    await page.goto(url);
    await loginPage.setCookiesFromFile(userType);
    await page.goto("/nuxeo/catalog");
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      allure.attach('Screenshot', screenshot, 'image/png');
    }
  });

  test('Login with user credentials', { tag: ['@dev', '@test'] }, async ({ page }) => {

    await loginPage.login(userType);

  });




});


