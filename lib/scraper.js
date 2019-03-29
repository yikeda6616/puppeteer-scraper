const puppeteer = require('puppeteer');
const delay = require('delay');

export async function getTwitterFollower(username) {
  const TARGET_URL = `https://twitter.com/${username}`;

  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 50 // ms
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800
  });

  console.log('----------go to ' + TARGET_URL);

  await page.goto(TARGET_URL);
  await delay(1000);

  console.log('----------evaluate');

  const result = await page.evaluate(() =>
    document
      .querySelector(
        '.ProfileNav-item--followers a .ProfileNav-value[data-count]'
      )
      .getAttribute('data-count')
  );
  await browser.close();
  return result;
}
