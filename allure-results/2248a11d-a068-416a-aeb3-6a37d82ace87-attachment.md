# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NavigateToAdminModule.spec.ts >> Navigate to Admin Module
- Location: tests\NavigateToAdminModule.spec.ts:17:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Admin"
Received: undefined
```

# Test source

```ts
  1  | /** 
  2  |  * Test Case : Navigate to Admin Module
  3  |  * 
  4  |  * steps:- 
  5  |  * 1. Launch the application
  6  |  * 2. Login with valid credentials
  7  |  * 3. Click on Admin module 
  8  |  * 4. Verify that the Admin module is displayed
  9  |  */
  10 | 
  11 | import { test, expect } from '@playwright/test';
  12 | import { LoginPage } from '../pages/LoginPage';
  13 | import { HomePage } from '../pages/HomePage';
  14 | import { AdminPage } from '../pages/AdminPage';
  15 | import { TestConfig } from '../test.config';
  16 | 
  17 | test('Navigate to Admin Module', async ({ page }) => {
  18 |     const config = new TestConfig();
  19 |     await page.goto(config.appURL); // Step 1: Launch the application
  20 | 
  21 |     const loginPage = new LoginPage(page);
  22 |     const isLoginPageExist = await loginPage.isPageExist();
  23 |     expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed     
  24 |     await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials
  25 | 
  26 |     const homePage = new HomePage(page);
  27 |     await homePage.clickOnAdmin(); // Step 3: Click on Admin module 
  28 | 
  29 |     const adminPage = new AdminPage(page);
  30 |     const bannerText = await adminPage.verifyBannerText();
> 31 |     expect(bannerText).toBe('Admin'); // Verify that the Admin module is displayed
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  32 | })    
```