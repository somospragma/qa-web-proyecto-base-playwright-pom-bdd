import { test, expect } from '@playwright/test';
import { SwagLabsLogin } from '../pages/LoginPage';

test.describe("Feature: Login ", () => {
    //Arrange
    let loginPage : SwagLabsLogin;

    test.beforeEach(async ({ page }) => {
        loginPage = new SwagLabsLogin(page);
        //Act
        await loginPage.goto();
    });

    test('successfully login',async ({ page }) => {
        
        await loginPage.doLogin('standard_user','secret_sauce');
        //assert
        await expect(page, "He should see the inventory page").toHaveURL("https://www.saucedemo.com/inventory.html");
    })

    test('Fail login @debug ',async ({ page }) => {
        test.fail();
        await loginPage.doLogin('locked_out_user','secret_sauce');
        //assert
        await expect(page, "He should see the inventory page").toHaveURL("https://www.saucedemo.com/inventory.html");
        
        // expect( await loginPage.validateLokedMessage()).toContain('Sorry, this user has been locked out.')
    })
})