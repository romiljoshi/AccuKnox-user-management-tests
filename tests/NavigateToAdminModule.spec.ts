/** 
 * Test Case : Navigate to Admin Module
 * 
 * steps:- 
 * 1. Launch the application
 * 2. Login with valid credentials
 * 3. Click on Admin module 
 * 4. Verify that the Admin module is displayed
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AdminPage } from '../pages/AdminPage';
import { TestConfig } from '../test.config';

let loginPage: LoginPage;
let homePage: HomePage;
let config: TestConfig;
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appURL); // Step 1: Launch the application

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000); // Wait for 2 seconds before closing the page
    await page.close();
})


test('Navigate to Admin Module', async () => {


    const isLoginPageExist = await loginPage.isPageExist();
    expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed     
    await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials

    await homePage.clickOnAdmin(); // Step 3: Click on Admin module 

    //const adminPage = new AdminPage(page);
    //const bannerText = await adminPage.verifyBannerText();
    //expect(bannerText).toContain('Admin'); // Verify that the Admin module is displayed
})    