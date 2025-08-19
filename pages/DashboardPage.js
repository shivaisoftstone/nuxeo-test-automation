// pages/LoginPage.js
const BasePage = require('./BasePage');
const { chromium } = require('playwright');
const DashboardSelectors = require('../selectors/DashboardSelectors.js');
const { timeout } = require('../playwright.config.js');

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.dashboardSelectors = new DashboardSelectors();
  }

  async ClickMediaFinder() {
    await this.page.getByText('Media Finder').click();
  }
  async ClickCollections() {
    await this.page.getByText('COLLECTIONS').click();
  }
  async ClickCart() {
    await this.page.click('header button:nth-child(3)');
  }
  async ClickFilter() {
    await this.page.getByRole('link', { name: 'Filter' }).click();
  }
  async selectDisplayOptionByLabel(labelText) {
    await this.page.getByText(' Display').click();
    await this.page.getByRole('option', { name: labelText }).click();
  }
  async selectSortByOptionByLabel(labelText) {
    await this.page.getByText('Sort By').click();
    await this.page.getByRole('option', { name: labelText }).click();
  }
  async clickSelectAll() {
    await this.page.getByText('ALL').click();
  }
  async clearSelection() {
    await this.page.getByText('Clear Selection').click();
  }
  async clickAllButton() {
    await this.page.getByText('ALL').click();
  }
  async selectAllDropdownOption(optionText) {
    await this.selectDropdownOption('#technical_mediaTypes select', optionText);
  }
  async enterFullTextSearch(text) {
    await this.page.fill("input[name='system_fulltext']", text);
    await this.page.press("input[name='system_fulltext']", 'Enter'); // Triggers search 
  }
  async clickClearAll() {
    await this.page.getByText('Clear All').click();
  }
  async saveSearchAs(title) {
    await this.page.getByText('Save As').click();
    await this.page.getByText('input[aria-label="Search Title"]').fill(title);
    await this.page.getByRole('button', { name: 'Confirm' }).click();
  }
  async clickTitan() {
    await this.page.getByText(' TITAN').click();
  }
  async clickLogout() {
    await this.page.getByText(' LOGOUT').click();
  }
  async clickDetails() {
    await this.page.getByText(' Details ').click();
  }
  async copyAssetID() {
    await this.page.click('button[aria-label="Copy asset ID"]');
  }
  async clickAddToCollection() {
    await this.page.click('button[aria-label="Add to Collection"]');
  }
  async clickAddToCart() {
    await this.page.click('button[aria-label="Add to Cart"]');
  }
  async clickSelectItem() {
    await this.page.click('input[aria-label="Select item"]');
  }
  async clickImage() {
    await this.page.click('button[aria-label="Image"]');
  }
  async getDetailTitle() {
    return this.page.getByText('Title').textContent;
  }
  async getDetailDocStatus() {
    return this.page.getByText('Doc status').textContent;
  }
  async getDetailId() {
    return this.page.getByText('Asset ID').textContent;
  }
  async getDetailPublicDescription() {
    return this.page.getByText('Public Description').textContent;
  }

  async getDetailDistributionUri() {
    return this.page.getByText('Distribution URI').textContent;
  }

  async getDetailAltText() {
    return this.page.getByText('Alt Text').textContent;
  }

  async getDetailLanguageBinary() {
    return this.page.getByText('Language Binary').textContent;
  }

  async getDetailMediaType() {
    return this.page.getByText('Media Type').textContent;
  }

  async getDetailIpCode() {
    return this.page.getByText('IP Code').textContent;
  }

  async getDetailProductDeliverable() {
    return this.page.getByText('Product Deliverable').textContent;
  }

  async getDetailIpCorrelation() {
    return this.page.getByText('IP Correlation').textContent;
  }

  async getDetailFileName() {
    return this.page.getByText('File Name').textContent;
  }

  async getDetailResolution() {
    return this.page.getByText('Resolution').textContent;
  }

  async getDetailCreateDate() {
    return this.page.getByText('Create Date').textContent;
  }
  async clickClose() {
    await this.page.click('button[aria-label="Close"]');
  }
  async isTheDashboardVisible() {
    return await this.page.locator('#leftContent').waitFor({ state: 'visible', timeout: 10000 });
  }
  async hover() {
    await this.page.hover('figure:nth-child(1)');
  }
  async clickRenditions() {
    await this.page.getByText('Renditions').click();
  }
  async selectRenditionOption(optionValue) {
    await this.selectDropdownOption('select.sc-11vq36o-0.fpoOcm', optionValue, 0);
  }
  async downloadSelected() {
    await this.page.locator('span[aria-label="Download Selected"]').first().click();
  }
  async isDialogVisible() {
    return await this.page.locator('div[role=dialog]').waitFor({ state: 'visible', timeout: 1000 });
  }
  async selectDialogCheckbox(value) {
    await this.page.check(`input[type="checkbox"][value="${value}"]`);
  }
  async selectZip() {
    await this.page.getByText('(Normal)').click();
  }
  async download() {
    await this.page.getByRole('button', { name: 'Download' }).click();
  }
}

module.exports = DashboardPage;