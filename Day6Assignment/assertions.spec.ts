

import { expect, test } from "@playwright/test";

test("Learn Assertions using expect library", async ({ page }) => {


    await page.goto("https://leaftaps.com/opentaps/control/main");
    await expect(page.locator('//h2[text()="Leaftaps Login"]'))
        .toHaveCSS('background-color', 'rgb(233, 238, 241)');


    //Non-retry assertions:

    const title = await page.title()

    console.log(title);

    // expect.soft(title).toBe("Leaftaps")


    //  await expect(locator).toBeEditable() => Syntax got from playwright documentation

    await expect(page.locator('//input[@id="username"]')).toBeEditable(); // We should import expect keyword from playwright library

    await page.locator('//input[@id="username"]').fill("democsr2")

    await page.locator('//input[@id="password"]').fill("crmsfa");

    //   await expect(page.locator('//input[@class="decorativeSubmit"]')).toBeDisabled({timeout:8000}); //Negatve Scenario

    //5000ms is the default timeout of assertions and retried for 14 times
    //8000 ms the retried for 19 times

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.waitForTimeout(3000)



})

