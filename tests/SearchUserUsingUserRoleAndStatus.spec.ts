/*
 * Test Case : Search User Using User Role and Status
 * 
 * steps:-
 * 1. Launch the application
 * 2. Login with valid credentials
 * 3. Click on Admin module
 * 4. Click on Search User button
 * 5. Select a user role and status
 * 6. Click on Search button
 * 7. Verify that the search results are displayed correctly
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

test('Search User Using User Role and Status', async ({ page }) => {
    const isLoginPageExist = await loginPage.isPageExist();
    expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed
    await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials  

    await homePage.clickOnAdmin(); // Step 3: Click on Admin module

    //select user role and status
    adminPage = new AdminPage(page);
    await adminPage.clickRoleOptionForSearch(); // Step 4: Click on Search User button
    await adminPage.select_ESS_RoleForSearch();

    //select status
    await adminPage.clickStatusOptionForSearch();
    await adminPage.select_ENABLED_StatusForSearch();

    //search user
    await adminPage.clickSearchButton(); // Step 6: Click on Search button
})