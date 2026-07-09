
import {test} from "@playwright/test"

test("Actions on the Salesforce login page using css", async ({page}) => {
    
await page.goto("https://login.salesforce.com/?locale=in");


//await page.locator('[id="username"]').fill("democsr");  // Option1

// await page.locator('#username').fill("democsr"); // Option2

//await page.locator('[class="inputLogin"]').nth(0).fill("democsr"); // Option3

await page.locator('[class="input r4 wide mb16 mt8 username"]').fill("dilipkumar.rajendran@testleaf.com"); // Option4


//await page.locator(`[id="password"]`).fill("crmsfa"); // Option1

//await page.locator(`#password`).fill("crmsfa"); // Option2

// await page.locator(`[class="inputLogin"]`).nth(1).fill("crmsfa");  // Option3

await page.locator(`[class="input r4 wide mb16 mt8 password"]`).fill("TestLeaf@2025");  // Option3


//await page.locator('[class="button r4 wide primary]').click();

await page.locator(`[id="Login"]`).click();
//await page.locator('.button r4 wide primary').click(); // Option2

await page.waitForTimeout(10000) // for demo purpose

})


/* 
tags their heirachy in leaftap DOM
------------------------------------

form => grandparent

p => parent

label and input=> grandchild

label and input => siblings 

--------------------------------------------

parent to child => direct relationship : form>p

grandparent to grandchild => not directly connect : form input

--- Siblings----

siblings that are immedialtely present to your present tag =>  label+input 

siblings that are not immediately present tag =>  meta~link, meta~script 

--------------------------------------------



*/