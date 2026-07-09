
import {test} from "@playwright/test"

test("Actions on the Facebook login page using css", async ({page}) => {
    
await page.goto("https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Des_LA");


await page.locator('[id="_R_1h6kqsqppb6amH1_"]').fill("democsr");  // Option1


//await page.locator('#_R_1h6kqsqppb6amH1_').fill("democsr"); // Option2


await page.locator(`[id="_R_1hmkqsqppb6amH1_"]`).fill("crmsfa"); // Option1

//await page.locator(`#_R_1hmkqsqppb6amH1_`).fill("crmsfa"); // Option2


//await page.locator('[class="x1i10hfl xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x16tdsg8 x1hl2dhg xggy1nq x1fmog5m xu25z0z x140muxe xo1y3bh x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"]').click(); // Option2
//await page.locator(`div[aria-label="Log in"]`).click();

await page.locator('//input[@aria-label="Log in"]').click();
//await page.locator('[aria-label="Log in"]').click();
  // await page.getByText('Iniciar sesión').click();
//await page.getByRole("button", { name: "Iniciar sesión" }).click();
await page.waitForTimeout(900000) // for demo purpose

})


