/**
 * Test Case : Delete User
 * steps:-
 * 1. Launch the application
 * 2. Login with valid credentials
 * 3. Navigate to the user management section
 * 4. Select the user to be deleted
 * 5. Confirm the deletion
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

test('Delete User', async ({ page }) => {
    const isLoginPageExist = await loginPage.isPageExist();
    expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed
    await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials      

    await homePage.clickOnAdmin(); // Step 3: Click on Admin module

    //select user role and status
    adminPage = new AdminPage(page);
    await adminPage.deleteUserByUsername("Admin"); // Step 4: Select the user to be deleted
})