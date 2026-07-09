

import { expect, test } from "@playwright/test";

test("Create a Lead Functionality using Xpath Locator Strategy", async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml");
   // await page.locator('//input[@class="ui-chkbox-icon ui-icon ui-c ui-icon-blank"]').check();
    await page.locator(`//span[text()="Basic"]`).click();
   await page.locator(`//span[text()="Ajax"]`).click();
   const notification = page.locator('.ui-growl-message');
  await expect(notification).toBeVisible();
  console.log('Notification:', await notification.textContent());
   
  await page.locator(`//label[text()='Java']`).click();
   
   await page.locator(`//label[text()="Python"]`).click();
   await page.locator(`//div[@data-iconstates='["","ui-icon ui-icon-check","ui-icon ui-icon-closethick"]']`).click()


  //await page.locator(`//ul[@data-label='Cities']`).click();
  await page.locator(`//li[@data-item-value='London']`).click();
  await page.locator(`//li[@data-item-value='Paris']`).click();


   
    await page.waitForTimeout(30000)

})

