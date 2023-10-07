import { expect, type Locator, type Page } from '@playwright/test';

export class SwagLabsLogin {

    readonly page: Page;
    readonly userField: Locator;
    readonly passField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userField = page.getByRole('textbox', {name: 'Username'});
        this.passField = page.getByRole('textbox', {name: "Password"});
        this.loginButton = page.getByRole('button',{name: "LOGIN"});
    }

    async goto(){
        await this.page.goto('/')
    }

    async doLogin(user : string, pass: string){
        await this.userField.fill(user);
        await this.passField.fill(pass);
        await this.loginButton.click();
    }

    async validateLokedMessage(){
        return await this.page.textContent('[data-test="error"]');
    }

}