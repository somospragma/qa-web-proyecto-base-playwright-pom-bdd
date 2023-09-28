import { test, expect } from "@playwright/test";

test('Sum', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const sum1Input = await page.locator("#sum1");

    const sum2Input = await page.locator("#sum2");

    const getValuesBtn = page.locator("//button[text()='Get Sum']");

    let num1 = 121;
    let num2 = 546;
    await sum1Input.type(""+ num1);
    await sum2Input.type(""+ num2);
    await getValuesBtn.click();

    const result = page.locator("#addmessage");


    console.log(await result.textContent());

    let expectedResult = num1 + num2;

    expect(result).toHaveText("" + expectedResult);


})