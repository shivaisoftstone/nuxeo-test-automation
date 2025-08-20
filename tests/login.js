const { page, test, expect, BrowserContext, allure } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

let loginPage;
  let dashboardPage;
  let userType = "amp";
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate("/nuxeo/catalog");
    await loginPage.setCookiesFromFile(userType);
    await loginPage.login(userType);

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

test.describe('Log into Nuxeo page', { tag: ['@login'] }, () => {
  
  test('Login with user credentials', async () => {

    await loginPage.login(userType);


  });

  test('click collection', async () => {


    await page.getByText("COLLECTION").click();
    await page.waitForTimeout(5000);
  });



});


