const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://github.com/jhonatasmatos');

  // Wait for full name to appear".
  const element = await page.waitForSelector('.p-name');
  const fullName = await element.evaluate((el) => {
    return el.textContent;
  });

  // Print full name.
  console.log(fullName);

  await browser.close();
})();
