// pages/LoginPage.js
const BasePage = require('./BasePage');
const { chromium } = require('playwright');

class SamplePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
  }
  async someMethod() {
    await this.page.getByRole('link', { name: 'Media Finder' }).click();
  }
}

module.exports = SamplePage;