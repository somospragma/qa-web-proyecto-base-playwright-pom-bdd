import {BeforeAll, AfterAll, Before, After} from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext} from '@playwright/test';
import { fixture } from "./pageFixture";


let browser : Browser;
let page: Page;
let context : BrowserContext
 
BeforeAll(async function () {
    browser = await chromium.launch({headless:true});
})
Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  fixture.page = page;
})
After(async function () {
   await fixture.page.close();
   await context.close(); 
})
AfterAll(async function () {
    await browser.close() 
 })