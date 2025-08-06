// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const ShadowDomPage = require('../pages/ShadowDomPage');



test.describe('ShadowDOM scenario', () => {
  let shadowDomPage;

  test.beforeEach(async ({ page }) => {
    // Initialize Page Objects
    shadowDomPage = new ShadowDomPage(page);
   
    
    // Go to the login page before each test
    await shadowDomPage.navigate('/shadowdom.html');
  });

  test.only('shadow DOM basic test', async () => {
    // Use the login method from the LoginPage object
    await shadowDomPage.fillForm();
    await expect(shadowDomPage.getResult()).resolves.toContain('Hello Ram! Role: Editor, Age: 20, Subscribed: Yes');
    await new Promise(resolve => setTimeout(resolve,5000));

  });

});