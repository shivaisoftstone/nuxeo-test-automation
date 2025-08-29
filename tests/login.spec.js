const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const { allure } = require('allure-playwright');

  let loginPage;
  let dashboardPage;
  let userType = "amp";
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
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

test.describe('Login scenario', { tag: ['@login'] }, () => {
  test('Login and navigate to nuxeo catalog page', async () => {
    
    await page.waitForTimeout(5000);
  });
  test('Go to nuxio catalog page', async () => {
    
     await loginPage.navigate("/nuxeo/catalog");
  });
 

});