// @ts-check
const { defineConfig, devices } = require('@playwright/test');
// Load environment variables from .env file
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
   reporter: [
    ['html'],
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results',
        clean: true // This is the crucial setting
      },
    ],
  ],
  timeout: 30000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.ENVIRONMENT?.toUpperCase() === 'TEST'
      ? process.env.TEST_BASE_URL
      : process.env.ENVIRONMENT?.toUpperCase() === 'INT'
        ? process.env.INT_BASE_URL
        : process.env.DEV_BASE_URL,



    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    javaScriptEnabled: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },


    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});