import {Page, Locator, expect} from '@playwright/test';

export class HomePage{
    private readonly page: Page;
    private readonly Admin: Locator;

    //constructor to initialize the page and locators
    constructor(page: Page){
        this.page=page;
        this.Admin=page.getByRole('link', { name: 'Admin' });
    }  
    
    //method to verify if the home page is displayed
    async clickOnAdmin()
    {
        await this.Admin.click();
    }
}