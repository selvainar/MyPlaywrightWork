

import { test } from "@playwright/test";

test("Create a Lead Functionality using Xpath Locator Strategy", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.waitForTimeout(3000)
    await page.locator('//a[contains(text(),"FA")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("TCS");

    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Selvarani");

    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Kumar");
    
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_SELFGEN"}); // value is the most stable way of choosing the dropdown since it is connected to the backend
    await page.waitForTimeout(3000)

})

