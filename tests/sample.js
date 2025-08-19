const { page, test, expect } = require('@playwright/test');

//importing the page objects
const LoginPage = require('../pages/LoginPage');
const SamplePage = require('../pages/SamplePage');



test.describe('Log into Nuxeo page', { tag: ['@dev', '@test'] }, () => {
  test.describe.configure({ mode: 'serial' });
  let loginPage;
  let dashboardPage;
  let userType = "amp"; // or "amp" based on your requirement
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    // const url = process.env[process.env.ENVIRONMENT + "_BASE_URL"]
    await loginPage.navigate("/nuxeo/catalog");
    await loginPage.setCookiesFromFile(userType);

  });

  test.afterAll(async ({ }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      allure.attach('Screenshot', screenshot, 'image/png');
    }
    if (context) {
      await context.close();
    }
  });

  test('Login with user credentials', async () => {

    //your test here
    await SamplePage.someMethod();

  });

});


