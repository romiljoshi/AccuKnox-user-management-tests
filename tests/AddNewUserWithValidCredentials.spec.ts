/**
 * Test Case : Add New User with Valid Credentials
 * 
 * steps:-
 * 1. Launch the application
 * 2. Login with valid credentials
 * 3. Click on Admin module
 * 4. Click on Add User button
 * 5. Fill in the user details
 * 6. Save the new user
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

test('Add New User with Valid Credentials', async ({ page }) => {
    const isLoginPageExist = await loginPage.isPageExist();
    expect(isLoginPageExist).toBe(true); // Verify that the login page is displayed
    await loginPage.login(config.validUsername, config.validPassword); // Step 2: Login with valid credentials

    await homePage.clickOnAdmin(); // Step 3: Click on Admin module

    adminPage = new AdminPage(page);
    await adminPage.clickOnAddUser(); // Step 4: Click on Add User button

    // Step 5: Fill in the user details
    await adminPage.selectUserRole();
    await adminPage.enterEmployeeName(config.EmployeeName);
    await adminPage.selectStatus();
    await adminPage.enterUserName(config.UserName);
    await adminPage.enterPassword(config.Password);
    await adminPage.confirm_password(config.Password);
    // Step 6: Save the new user
    await adminPage.clickSaveButton();
})    