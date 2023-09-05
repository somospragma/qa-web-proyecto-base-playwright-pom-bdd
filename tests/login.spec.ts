import { chromium, expect, test } from "@playwright/test";

test("Login test demo", async() =>{

    const browser = await chromium.launch({
        headless: false,
        slowMo:1000
    }); //puedo lanzar navegadores basados en chrome

    
    const newContext = await browser.newContext();

    const page = await newContext.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    // acá le estoy diciendo a la pagina que navege a un lugar en especifico
    
        await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    //Este método se desplaza sobre un elemento que coincida con el xpath ingresado
        await page.click("//*[@class='info']//span[contains(.,'Login')]");
    // este es el metodo para hacer click
        await page.fill("//input[@name='email']", "pruebaplaywright1@yopmail.com");
    // este es el metodo para llenar valores dentro de un input
        await page.fill("//input[@name='password']","admin123");
    
        await page.click("//input[@type='submit']");

        let wishList = " Modify your wish list";

        let wishListWeb = await page.locator("(//a[@class='d-inline-flex text-decoration-none text-reset flex-column my-3'])[4]").innerText();

        console.log(wishListWeb);

        expect(wishList).toMatch(wishListWeb);
        

    //admin123
})