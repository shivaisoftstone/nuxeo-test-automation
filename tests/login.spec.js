// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


// Get credentials from environment variables
const username = process.env.STANDARD_USER_USERNAME;
const password = process.env.STANDARD_USER_PASSWORD;

test.describe('SauceDemo Login', () => {
  let loginPage;


  test.beforeEach(async ({ page }) => {
    // Initialize Page Objects
    loginPage = new LoginPage(page);
    const url = process.env[process.env.ENVIRONMENT+ "_BASE_URL"]
    // Go to the login page before each test
    await loginPage.navigate(url);
  });
  test('user can login', { tag: ['@dev', '@test' ] }, async ({ page }) => {
    const url = process.env[process.env.ENVIRONMENT+ "_BASE_URL"]
    const admin_user = process.env[process.env.ENVIRONMENT+ "_ADMIN_USER"]
    const admin_password = process.env[process.env.ENVIRONMENT+ "_ADMIN_PASSWORD"]
    const amp_user = process.env[process.env.ENVIRONMENT+ "_AMP_USER"]
    const amp_password = process.env[process.env.ENVIRONMENT+ "_AMP_PASSWORD"]
    const cache_user = process.env[process.env.ENVIRONMENT+ "_CACHE_USER"]
    const cache_password = process.env[process.env.ENVIRONMENT+ "_CACHE_PASSWORD"]

    console.log(`Using URL: ${url}`);
  });

 }); 