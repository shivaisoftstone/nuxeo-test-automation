const { page, test, expect } = require('@playwright/test');

//importing the page objects
const LoginPage = require('../pages/LoginPage');
const SamplePage = require('../pages/SamplePage');


test.describe('Log into Nuxeo page', () => {
  // page objects declaration
  let loginPage;
  let samplePage;
  let userType = "admin"; // or "amp" based on your requirement

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    samplePage = new SamplePage(page);
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

   //your test here
    await SamplePage.someMethod();

  });




});


