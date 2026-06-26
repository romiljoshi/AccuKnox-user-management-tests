import {Page, Locator, expect} from '@playwright/test';

export class LoginPage{
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    //constructor to initialize the page and locators
    constructor(page: Page){
        this.page=page;
        this.usernameInput=page.locator('input[name="username"]');
        this.passwordInput=page.locator('input[name="password"]');
        this.loginButton=page.locator('button[type="submit"]');
    }

    //method to perform login
    async isPageExist(){
        let Title:string = await this.page.title();
        if(Title=="OrangeHRM"){
            return true;
        }else{
            return false;
        }
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}