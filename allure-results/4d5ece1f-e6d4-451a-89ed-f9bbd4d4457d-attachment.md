# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddUserWithDuplicateUserName.spec.ts >> Add New User with Duplicate Username
- Location: tests\AddUserWithDuplicateUserName.spec.ts:37:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Add' })

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
  15 |     private readonly errorMessages: Locator;
  16 |     //constructor to initialize the page and locators
  17 |     constructor(page: Page){
  18 |         this.page=page;
  19 |         this.addUserButton=page.getByRole('button', { name: 'Add' });
  20 |         this.bannerText=page.getByRole('heading', { name: 'Admin' });
  21 |         this.userRoleDropdown=page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
  22 |         this.EmpName=page.getByRole('textbox', { name: 'Type for hints...' });
  23 |         this.statusDropdown=page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  24 |         this.UserName=page.getByRole('textbox').nth(2);
  25 |         this.Password=page.getByRole('textbox').nth(3);
  26 |         this.cnfpassword=page.getByRole('textbox').nth(4);
  27 |         this.saveButton=page.getByRole('button', { name: 'Save' });
  28 |         this.errorMessages=page.locator('form');
  29 |     }
  30 |     //method to click on the Add User button
  31 |     async clickOnAddUser(){
> 32 |         await this.addUserButton.click();
     |                                  ^ Error: locator.click: Target page, context or browser has been closed
  33 |     }
  34 | 
  35 |     async verifyBannerText(){
  36 |         if(await this.bannerText.isVisible()){
  37 |             let text=await this.bannerText.textContent();
  38 |             return text;
  39 |         }
  40 |     }
  41 | 
  42 |     async selectUserRole(){
  43 |         await this.userRoleDropdown.click();
  44 |         const roleOption=this.page.getByRole('option', { name: 'ESS' });
  45 |         await roleOption.click();
  46 |     }
  47 | 
  48 |     async enterEmployeeName(name: string){
  49 |         await this.EmpName.fill(name);
  50 |     }
  51 | 
  52 |     async selectStatus(){
  53 |         await this.statusDropdown.click();
  54 |         const statusOption=this.page.getByRole('option', { name: 'Enabled' });
  55 |         await statusOption.click();
  56 |     }
  57 | 
  58 |     async enterUserName(username: string){
  59 |         await this.UserName.fill(username);
  60 |     }
  61 | 
  62 |     async enterPassword(password: string){
  63 |         await this.Password.fill(password);
  64 |     }
  65 | 
  66 |     async confirm_password(cnfpassword: string){
  67 |         await this.cnfpassword.fill(cnfpassword);
  68 |     }
  69 | 
  70 |     async clickSaveButton(){
  71 |         await this.saveButton.click();
  72 |     }
  73 |     async verifyErrorMessages(){
  74 |         const errorMessages=await this.errorMessages.textContent();
  75 |         return errorMessages;
  76 |     }
  77 | }
```