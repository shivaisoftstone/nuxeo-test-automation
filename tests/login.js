const { page, test, expect, BrowserContext, allure } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


test.describe('Log into Nuxeo page', () => {
  test.describe.configure({ mode: 'serial' });
  let loginPage;
  let userType = "amp"; // or "amp" based on your requirement
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    const url = process.env[process.env.ENVIRONMENT + "_BASE_URL"]
    await loginPage.navigate("/nuxeo/catalog");
    await loginPage.setCookiesFromFile(userType);

  });

  test.afterAll(async ({ }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      allure.attach('Screenshot', screenshot, 'image/png');
    }
  });

  test('Login with user credentials', { tag: ['@dev', '@test', '@regression'] }, async () => {

    await loginPage.login(userType);


  });

  test('click collection', { tag: ['@dev', '@test'] }, async () => {


    await page.getByText("COLLECTION").click();
    await page.waitForTimeout(5000);
  });



});


