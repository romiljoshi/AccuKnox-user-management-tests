# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddNewUserWithValidCredentials.spec.ts >> Add New User with Valid Credentials
- Location: tests\AddNewUserWithValidCredentials.spec.ts:36:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import  {Page, Locator, expect} from '@playwright/test';
  2  | 
  3  | 
  4  | export class AdminPage{
  5  |     private readonly page: Page;
  6  |     private readonly addUserButton: Locator;
  7  |     private readonly bannerText: Locator;
  8  |     private readonly userRoleDropdown: Locator;
  9  |     private readonly EmpName: Locator;
  10 |     private readonly statusDropdown: Locator;
  11 |     private readonly UserName: Locator;
  12 |     private readonly Password: Locator;
  13 |     private readonly cnfpassword: Locator;
  14 |     private readonly saveButton: Locator;
  15 |     //constructor to initialize the page and locators
  16 |     constructor(page: Page){
  17 |         this.page=page;
  18 |         this.addUserButton=page.getByRole('button', { name: 'Add' });
  19 |         this.bannerText=page.getByRole('heading', { name: 'Admin' });
  20 |         this.userRoleDropdown=page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
  21 |         this.EmpName=page.getByRole('textbox', { name: 'Type for hints...' });
  22 |         this.statusDropdown=page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  23 |         this.UserName=page.getByRole('textbox').nth(2);
  24 |         this.Password=page.getByRole('textbox').nth(3);
  25 |         this.cnfpassword=page.getByRole('textbox').nth(4);
  26 |         this.saveButton=page.getByRole('button', { name: 'Save' });
  27 |     }
  28 |     //method to click on the Add User button
  29 |     async clickOnAddUser(){
  30 |         await this.addUserButton.click();
  31 |     }
  32 | 
  33 |     async verifyBannerText(){
  34 |         if(await this.bannerText.isVisible()){
  35 |             let text=await this.bannerText.textContent();
  36 |             return text;
  37 |         }
  38 |     }
  39 | 
  40 |     async selectUserRole(){
> 41 |         await this.userRoleDropdown.click();
     |                                     ^ Error: locator.click: Target page, context or browser has been closed
  42 |         const roleOption=this.page.getByRole('option', { name: 'ESS' });
  43 |         await roleOption.click();
  44 |     }
  45 | 
  46 |     async enterEmployeeName(name: string){
  47 |         await this.EmpName.fill(name);
  48 |     }
  49 | 
  50 |     async selectStatus(){
  51 |         await this.statusDropdown.click();
  52 |         const statusOption=this.page.getByRole('option', { name: 'Enabled' });
  53 |         await statusOption.click();
  54 |     }
  55 | 
  56 |     async enterUserName(username: string){
  57 |         await this.UserName.fill(username);
  58 |     }
  59 | 
  60 |     async enterPassword(password: string){
  61 |         await this.Password.fill(password);
  62 |     }
  63 | 
  64 |     async confirm_password(cnfpassword: string){
  65 |         await this.cnfpassword.fill(cnfpassword);
  66 |     }
  67 | 
  68 |     async clickSaveButton(){
  69 |         await this.saveButton.click();
  70 |     }
  71 | }
```