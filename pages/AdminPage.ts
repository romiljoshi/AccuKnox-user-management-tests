import  {Page, Locator, expect} from '@playwright/test';


export class AdminPage{
    private readonly page: Page;
    private readonly addUserButton: Locator;
    private readonly bannerText: Locator;
    private readonly userRoleDropdown: Locator;
    private readonly EmpName: Locator;
    private readonly statusDropdown: Locator;
    private readonly UserName: Locator;
    private readonly Password: Locator;
    private readonly cnfpassword: Locator;
    private readonly saveButton: Locator;
    private readonly errorMessages: Locator;
    private readonly clickRoleOptiondrpdwn: Locator;
    private readonly selectedRoleOptiondrpdwn: Locator;
    private readonly clickStatusOptiondrpdwn: Locator;
    private readonly selectENABLEDoption: Locator;
    private readonly searchbtn: Locator;
    private readonly rows: Locator;
    //constructor to initialize the page and locators
    constructor(page: Page){
        this.page=page;
        this.addUserButton=page.getByRole('button', { name: 'Add' });
        this.bannerText=page.getByRole('heading', { name: 'Admin' });
        this.userRoleDropdown=page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
        this.EmpName=page.getByRole('textbox', { name: 'Type for hints...' });
        this.statusDropdown=page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
        this.UserName=page.getByRole('textbox').nth(2);
        this.Password=page.getByRole('textbox').nth(3);
        this.cnfpassword=page.getByRole('textbox').nth(4);
        this.saveButton=page.getByRole('button', { name: 'Save' });
        this.errorMessages=page.locator('form');
        this.clickRoleOptiondrpdwn=page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
        this.selectedRoleOptiondrpdwn=page.getByRole('option', { name: 'ESS' });
        this.clickStatusOptiondrpdwn=page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
        this.selectENABLEDoption=page.getByRole('option', { name: 'Enabled' });
        this.searchbtn=page.getByRole('button', { name: 'Search' });
        this.rows=page.locator('.oxd-table-body>div');
    }  
    
    //method to click on the Add User button
    async clickOnAddUser(){
        await this.addUserButton.click();
    }

    async verifyBannerText(){
        if(await this.bannerText.isVisible()){
            let text=await this.bannerText.textContent();
            return text;
        }
    }

    async selectUserRole(){
        await this.userRoleDropdown.click();
        const roleOption=this.page.getByRole('option', { name: 'ESS' });
        await roleOption.click();
    }

    async enterEmployeeName(name: string){
        await this.EmpName.fill(name);
    }

    async selectStatus(){
        await this.statusDropdown.click();
        const statusOption=this.page.getByRole('option', { name: 'Enabled' });
        await statusOption.click();
    }

    async enterUserName(username: string){
        await this.UserName.fill(username);
    }

    async enterPassword(password: string){
        await this.Password.fill(password);
    }

    async confirm_password(cnfpassword: string){
        await this.cnfpassword.fill(cnfpassword);
    }

    async clickSaveButton(){
        await this.saveButton.click();
    }

    async verifyErrorMessages(){
        const errorMessages=await this.errorMessages.textContent();
        return errorMessages;
    }

    async clickRoleOptionForSearch(){
        await this.clickRoleOptiondrpdwn.click();
    }

    async select_ESS_RoleForSearch(){
        await this.selectedRoleOptiondrpdwn.click();
    }

    async clickStatusOptionForSearch(){
        await this.clickStatusOptiondrpdwn.click();
    }

    async select_ENABLED_StatusForSearch(){
        await this.selectENABLEDoption.click();
    }

    async clickSearchButton(){
        await this.searchbtn.click();
    }

    async deleteUserByUsername(username: string){
        let rowdata=await this.rows.all();
        for(let row of rowdata){
            let rowText=await row.textContent();
            if(rowText===username){
                const deleteButton=row.locator('button').last();
                await deleteButton.click();
                break;
            }
        }

    }    
}    