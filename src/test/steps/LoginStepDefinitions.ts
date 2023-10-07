import { Given, When, Then } from "@cucumber/cucumber";
import { SwagLabsLogin } from '../../pages/LoginPage';
// import { test, expect } from '@playwright/test';
import { chromium, Page, Browser, expect} from '@playwright/test';
import { fixture } from "../../hooks/pageFixture";


// let browser : Browser;
// let page: Page;
let loginPage: SwagLabsLogin;


Given('The user is on login page', async function () {
   
    loginPage = new SwagLabsLogin(fixture.page);
    await loginPage.goto();
  });

When('he do the login with user {string} and password {string}', async function (userName, pass) {
    await loginPage.doLogin(userName,pass);
  });

Then('he should see the inventario page', async function () {
    await expect(fixture.page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    // browser.close()
  });

