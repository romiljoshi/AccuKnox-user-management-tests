# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DeleteUser.spec.ts >> Delete User
- Location: tests\DeleteUser.spec.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | /**
  2  |  * Test Case : Delete User
  3  |  * steps:-
  4  |  * 1. Launch the application
  5  |  * 2. Login with valid credentials
  6  |  * 3. Navigate to the user management section
  7  |  * 4. Select the user to be deleted
  8  |  * 5. Confirm the deletion
  9  |  */
  10 | 
  11 | import { test, expect } from '@playwright/test';
  12 | import { LoginPage } from '../pages/LoginPage';
  13 | import { HomePage } from '../pages/HomePage';
  14 | import { AdminPage } from '../pages/AdminPage';
  15 | import { TestConfig } from '../test.config';
  16 | 
  17 | let loginPage: LoginPage;
  18 | let homePage: HomePage;
  19 | let adminPage: AdminPage;
  20 | let config: TestConfig;
  21 | 
> 22 | test.beforeEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  23 |     config = new TestConfig();
  24 |     await page.goto(config.appURL); // Step 1: Launch the application
  25 | 
  26 |     loginPage = new LoginPage(page);
  27 |     homePage = new HomePage(page);
  28 | })
  29 | 
  30 | test.afterEach(async ({ page }) => {
  31 |     await page.waitForTimeout(3000); // Wait for 2 seconds before closing the page
  32 |     await page.close();
  33 | })
  34 | 
  35 | test('Delete User', async ({ page }) => {
  36 |     const isLoginPageExist = await loginPage.isPageExist();
  37 |     expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed
  38 |     await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials      
  39 | 
  40 |     await homePage.clickOnAdmin(); // Step 3: Click on Admin module
  41 | 
  42 |     //select user role and status
  43 |     adminPage = new AdminPage(page);
  44 |     await adminPage.deleteUserByUsername("Admin"); // Step 4: Select the user to be deleted
  45 | })
```