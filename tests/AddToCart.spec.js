const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');


test.describe('Log into Nuxeo page', { tag: ['@dev', '@test'] }, () => {
  test.describe.configure({ mode: 'serial' });
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
    await loginPage.login(userType);
  });

  test('Dashboard Visibility', async () => {
    await dashboardPage.isTheDashboardVisible();
  });

  test('Select All Dropdown Option', async () => {
    await dashboardPage.selectAllDropdownOption('Image');
  });

  test('Enter Full Text Search', async () => {
    await dashboardPage.enterFullTextSearch('Pioneers at Night.JPEG');
  });

  test('Add To Cart', async () => {
    await dashboardPage.hover();
    await dashboardPage.clickDetails();
    await dashboardPage.clickAddToCart();
    await dashboardPage.ClickCart();
  });

  test('Select Rendition Option', async () => {

    await dashboardPage.selectRenditionOption('Thumbnail');
  });

  test('Download Selected', async () => {
    await dashboardPage.downloadSelected();
  });

  test('Select Dialog Checkbox', async () => {
    await dashboardPage.isDialogVisible();
    await dashboardPage.selectDialogCheckbox('Other');
  });
  test('Select zip', async () => {
    await dashboardPage.selectZip();
  });

  test('Download', async () => {
    await dashboardPage.download();
  });
});