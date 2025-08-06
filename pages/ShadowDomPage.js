// pages/LoginPage.js
const BasePage = require('./BasePage');

class ShadowDomPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators
    this.usernameInput = page.locator('#name');
  }

  async fillForm() {
    await this.page.getByRole('textbox', { name: 'Name' }).click();
    await this.page.getByRole('textbox', { name: 'Name' }).fill('Ram');
    await this.page.getByRole('checkbox', { name: 'Subscribe to newsletter' }).check();
    // await this.page.getByRole('checkbox', { name: 'Subscribe to newsletter' }).uncheck();
    await this.page.getByRole('radio', { name: 'Editor' }).check();
    await this.page.getByRole('spinbutton', { name: 'Age (Spinbox)' }).click();
    await this.page.getByRole('spinbutton', { name: 'Age (Spinbox)' }).fill('20');
    await this.page.getByText('This is a div inside Shadow').click();
    await this.page.locator('#submitBtn').click();
    // await this.page.getByRole('button', { name: 'Upload File' }).click();
        await this.page.setInputFiles('input[type="file"]', './tests/login.spec.js');
    // await this.page.getByRole('button', { name: 'Upload File' }).setInputFiles('shadowdom.html');
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.getByRole('link', { name: 'Download Sample File' }).click();
    const download = await downloadPromise;
    


  }

  async getResult() {
    // Wait for the result to appear
    await this.page.waitForSelector('#result');
    // Return the text content of the result element
    return this.page.locator('#result').textContent();
  }
  
}

module.exports = ShadowDomPage;