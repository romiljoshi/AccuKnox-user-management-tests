# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DeleteUser.spec.ts >> Delete User
- Location: tests\DeleteUser.spec.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Error: strict mode violation: locator('.oxd-table-body>div').filter({ hasText: 'Admin' }).locator('button') resolved to 2 elements:
    1) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(5)
    2) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')

Call log:
  - waiting for locator('.oxd-table-body>div').filter({ hasText: 'Admin' }).locator('button')

```

# Test source

```ts
  13  |     private readonly cnfpassword: Locator;
  14  |     private readonly saveButton: Locator;
  15  |     private readonly errorMessages: Locator;
  16  |     private readonly clickRoleOptiondrpdwn: Locator;
  17  |     private readonly selectedRoleOptiondrpdwn: Locator;
  18  |     private readonly clickStatusOptiondrpdwn: Locator;
  19  |     private readonly selectENABLEDoption: Locator;
  20  |     private readonly searchbtn: Locator;
  21  |     private readonly rows: Locator;
  22  |     //constructor to initialize the page and locators
  23  |     constructor(page: Page){
  24  |         this.page=page;
  25  |         this.addUserButton=page.getByRole('button', { name: 'Add' });
  26  |         this.bannerText=page.getByRole('heading', { name: 'Admin' });
  27  |         this.userRoleDropdown=page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
  28  |         this.EmpName=page.getByRole('textbox', { name: 'Type for hints...' });
  29  |         this.statusDropdown=page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  30  |         this.UserName=page.getByRole('textbox').nth(2);
  31  |         this.Password=page.getByRole('textbox').nth(3);
  32  |         this.cnfpassword=page.getByRole('textbox').nth(4);
  33  |         this.saveButton=page.getByRole('button', { name: 'Save' });
  34  |         this.errorMessages=page.locator('form');
  35  |         this.clickRoleOptiondrpdwn=page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
  36  |         this.selectedRoleOptiondrpdwn=page.getByRole('option', { name: 'ESS' });
  37  |         this.clickStatusOptiondrpdwn=page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  38  |         this.selectENABLEDoption=page.getByRole('option', { name: 'Enabled' });
  39  |         this.searchbtn=page.getByRole('button', { name: 'Search' });
  40  |         this.rows=page.locator('.oxd-table-body>div');
  41  |     }  
  42  |     
  43  |     //method to click on the Add User button
  44  |     async clickOnAddUser(){
  45  |         await this.addUserButton.click();
  46  |     }
  47  | 
  48  |     async verifyBannerText(){
  49  |         if(await this.bannerText.isVisible()){
  50  |             let text=await this.bannerText.textContent();
  51  |             return text;
  52  |         }
  53  |     }
  54  | 
  55  |     async selectUserRole(){
  56  |         await this.userRoleDropdown.click();
  57  |         const roleOption=this.page.getByRole('option', { name: 'ESS' });
  58  |         await roleOption.click();
  59  |     }
  60  | 
  61  |     async enterEmployeeName(name: string){
  62  |         await this.EmpName.fill(name);
  63  |     }
  64  | 
  65  |     async selectStatus(){
  66  |         await this.statusDropdown.click();
  67  |         const statusOption=this.page.getByRole('option', { name: 'Enabled' });
  68  |         await statusOption.click();
  69  |     }
  70  | 
  71  |     async enterUserName(username: string){
  72  |         await this.UserName.fill(username);
  73  |     }
  74  | 
  75  |     async enterPassword(password: string){
  76  |         await this.Password.fill(password);
  77  |     }
  78  | 
  79  |     async confirm_password(cnfpassword: string){
  80  |         await this.cnfpassword.fill(cnfpassword);
  81  |     }
  82  | 
  83  |     async clickSaveButton(){
  84  |         await this.saveButton.click();
  85  |     }
  86  | 
  87  |     async verifyErrorMessages(){
  88  |         const errorMessages=await this.errorMessages.textContent();
  89  |         return errorMessages;
  90  |     }
  91  | 
  92  |     async clickRoleOptionForSearch(){
  93  |         await this.clickRoleOptiondrpdwn.click();
  94  |     }
  95  | 
  96  |     async select_ESS_RoleForSearch(){
  97  |         await this.selectedRoleOptiondrpdwn.click();
  98  |     }
  99  | 
  100 |     async clickStatusOptionForSearch(){
  101 |         await this.clickStatusOptiondrpdwn.click();
  102 |     }
  103 | 
  104 |     async select_ENABLED_StatusForSearch(){
  105 |         await this.selectENABLEDoption.click();
  106 |     }
  107 | 
  108 |     async clickSearchButton(){
  109 |         await this.searchbtn.click();
  110 |     }
  111 | 
  112 |     async deleteUserByUsername(username: string){
> 113 |         await this.rows.filter({ hasText: username }).locator('button').click();
      |                                                                         ^ Error: locator.click: Error: strict mode violation: locator('.oxd-table-body>div').filter({ hasText: 'Admin' }).locator('button') resolved to 2 elements:
  114 | 
  115 |     }    
  116 | }    
```