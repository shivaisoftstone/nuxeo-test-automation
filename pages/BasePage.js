// pages/BasePage.js
const fs = require('fs');
const path = require('path');

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigates to a specified path.
   * @param {string} path
   */
  async navigate(path) {
    await this.page.goto(path);
  }

  // async selectDropdownOption(selector, optionText) {
  // await this.page.click(selector);
  // await this.page.selectOption(selector, { value: optionText, timeout: 10000 });
  // }

  async selectDropdownOption(selector, optionText, nth = 0) {
    let locator = await this.page.locator(selector).nth(nth);
    await locator.click();
    await locator.selectOption(optionText);
  }


  async setCookiesFromFile(userType) {

    let cookiesPath;
    if (userType == 'admin') {
      cookiesPath = path.resolve(__dirname, `../.auth/${process.env.ENVIRONMENT}/adminLogin.json`);
    }
    else {
      cookiesPath = path.resolve(__dirname, `../.auth/${process.env.ENVIRONMENT}/ampLogin.json`);
    }

    const storage = JSON.parse(fs.readFileSync(cookiesPath, 'utf-8'));
    await this.page.context().addCookies(storage.cookies);
  }

}

module.exports = BasePage;