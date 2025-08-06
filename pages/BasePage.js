// pages/BasePage.js
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
}

module.exports = BasePage;