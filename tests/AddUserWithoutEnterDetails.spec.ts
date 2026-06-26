/**
 * Test Case : Add New User without Entering Details(Negative testcase)
 * 
 * Steps:-
 * 1. Launch the application
 * 2. Login with valid credentials
 * 3. Navigate to Admin page
 * 4. Click on Add User button
 * 5. Click on Save button without entering any details
 * 6. Verify that the error messages are displayed for mandatory fields
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AdminPage } from '../pages/AdminPage';
import { TestConfig } from '../test.config';

let loginPage: LoginPage;
let homePage: HomePage;
let adminPage: AdminPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appURL); // Step 1: Launch the application

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000); // Wait for 2 seconds before closing the page
    await page.close();
})

test('Add New User without Entering Details', async ({ page }) => {
    const isLoginPageExist = await loginPage.isPageExist();
    expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed
    await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials

    await homePage.clickOnAdmin(); // Step 3: Click on Admin module

    adminPage = new AdminPage(page);
    await adminPage.clickOnAddUser(); // Step 4: Click on Add User button
    await adminPage.clickSaveButton(); // Step 5: Click on Save button without entering any details
    // Step 6: Verify that the error messages are displayed for mandatory fields
    const errorMessages = await adminPage.verifyErrorMessages();
    expect(errorMessages).toContain('Passwords do not match');
})