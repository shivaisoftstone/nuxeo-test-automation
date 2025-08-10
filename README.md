#Software installation
Install node, Jre (for seeing sllure results)
#Checkout the project
Git repo: https://github.com/shivaisoftstone/nuxeo-test-automation.git
Branch: main

#Install the dependencies in project root folder
npm install
npm install -D @playwright/test allure-playwright
npx playwright install

#Run tests with tag and environment
ENVIRONMENT=TEST npx playwright test --grep @test --project=chromium --headed 

#see the allure reports
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report


#For generating code (For development only)
ENVIRONMENT=TEST npx playwright codegen --target=javascript





