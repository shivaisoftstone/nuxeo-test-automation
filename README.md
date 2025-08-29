#Software installation
Install node, Jre (for seeing sllure results)

#Checkout the project
Git repo: https://github.com/ICSEng/nuxeo-global-dam-e2e-new.git
Branch: main

#Install the dependencies in project root folder
npm install
npm install -D @playwright/test allure-playwright
npx playwright install

#copy .env file
This file contains passwords. So, copy this file manually to root folder for security reasons.

#Run tests with tag and environment (run in Bash)
ENVIRONMENT=TEST npx playwright test --grep @test --project=chromium --headed 

#see the allure reports
npm run report

#For generating code (For development only)
ENVIRONMENT=TEST npx playwright codegen --target=javascript







