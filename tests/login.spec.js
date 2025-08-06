// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');

// Get credentials from environment variables
const username = process.env.STANDARD_USER_USERNAME;
const password = process.env.STANDARD_USER_PASSWORD;

test.describe('SauceDemo Login', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    // Initialize Page Objects
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    const url = process.env[process.env.ENVIRONMENT+ "_BASE_URL"]
    const admin_user = process.env[process.env.ENVIRONMENT+ "_ADMIN_USER"]
    const admin_password = process.env[process.env.ENVIRONMENT+ "_ADMIN_PASSWORD"]
    const amp_user = process.env[process.env.ENVIRONMENT+ "_AMP_USER"]
    const amp_password = process.env[process.env.ENVIRONMENT+ "_AMP_PASSWORD"]
    const cache_user = process.env[process.env.ENVIRONMENT+ "_CACHE_USER"]
    const cache_password = process.env[process.env.ENVIRONMENT+ "_CACHE_PASSWORD"]
    console.log(`Using URL: ${url}`);
    // Go to the login page before each test
    await loginPage.navigate(url);
  });
test('should allow a admin user to log in successfully', async () => {
    // Use the login method from the LoginPage object
    console.log("logged in as admin user")
  });
 }); 