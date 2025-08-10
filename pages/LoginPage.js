// pages/LoginPage.js
const { timeout } = require('../playwright.config');
const BasePage = require('./BasePage');
const LoginSelectors = require('../selectors/LoginSelectors');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.loginSelectors = new LoginSelectors();
  }

  /**
   * A reusable method to perform a complete login action.
   * @param {string} username
   * @param {string} password
   */
  async login(userType) {

    const url = process.env[process.env.ENVIRONMENT + "_BASE_URL"]
    const admin_user = process.env[process.env.ENVIRONMENT + "_ADMIN_USER"]
    const admin_password = process.env[process.env.ENVIRONMENT + "_ADMIN_PASSWORD"]
    const amp_user = process.env[process.env.ENVIRONMENT + "_AMP_USER"]
    const amp_password = process.env[process.env.ENVIRONMENT + "_AMP_PASSWORD"]
    const cache_user = process.env[process.env.ENVIRONMENT + "_CACHE_USER"]
    const cache_password = process.env[process.env.ENVIRONMENT + "_CACHE_PASSWORD"]

    let user = ''
    let password = ''

    if (userType === 'admin') {
      user = admin_user;
      password = admin_password;
      await this.page.getByRole('link', { name: 'Administrator Sign In' }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('link', { name: 'Administrator Sign In' }).click();
      await this.page.getByRole('textbox', { name: 'Username' }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('textbox', { name: 'Username' }).click();
      await this.page.getByRole('textbox', { name: 'Username' }).fill(user);
      await this.page.getByRole('textbox', { name: 'Password' }).click();
      await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
      await this.page.getByRole('button', { name: 'Sign In' }).click();
      await this.page.waitForTimeout(10000);
    }
    if (userType === 'amp' || userType === 'cache') {
      user = amp_user;
      password = amp_password;

      await this.page.locator(this.loginSelectors.signInButton).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator(this.loginSelectors.signInButton).click();
      await this.page.getByRole('textbox', { name: 'Username' }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('textbox', { name: 'Username' }).click();
      await this.page.getByRole('textbox', { name: 'Username' }).fill(user);
      await this.page.getByRole('button', { name: 'Next' }).click();
      await this.page.getByRole('textbox', { name: 'Password' }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('textbox', { name: 'Password' }).click();
      await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
      await this.page.getByRole('button', { name: 'Verify' }).click();
      await this.page.waitForTimeout(10000);
    }







  }

  async getErrorMessageText() {
    return this.errorMessage.textContent();
  }
}

module.exports = LoginPage;