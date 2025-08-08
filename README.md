
npm install
npm install -D @playwright/test allure-playwright
ENVIRONMENT=DEV npx playwright test --grep @dev --project=chromium --headed 
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report











allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report

npx allure-commandline generate ./allure-results --clean -o ./allure-report
npx allure-commandline open ./allure-report