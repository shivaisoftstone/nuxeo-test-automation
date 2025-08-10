// pages/LoginPage.js
const BasePage = require('./BasePage');
const { chromium } = require('playwright');

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
  }
  async ClickMediaFinder() {
    await this.page.getByRole('link', { name: 'Media Finder' }).click();
  }
}

module.exports = DashboardPage;