const puppeteer = require("puppeteer");
const url = "https://www.instagram.com";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForSelector("input[name=username]");
  await page.type("input[name=username]", process.env.INSTA_USER, {
    delay: 200,
  });
  await page.type("input[type=password]", process.env.INSTA_PASS, { delay: 200 });
  await page.click("button[type=submit]");
  await page.waitForSelector(".cmbtv > button");
  await page.click(".cmbtv > button");
  await page.waitForSelector(".mt3GC > button");
  await page.click(".mt3GC > button");
  await page.waitForSelector(".cq2ai > img");
  await page.click(".cq2ai > img");
  await page.waitForSelector(".mt3GC > button");
  await page.click(".mt3GC > button");
  // await page.waitForSelector("input[type=text]");
  // await page.type("input[type=text]", "mouhamed", { delay: 200 });
  // await page.waitForSelector(".mt3GC > button");
  // await page.click(".mt3GC > button");
  // await page.waitForSelector(".-qQT3");
  // await page.click(".-qQT3");
  // await page.waitForSelector("._5f5mN");
  // await page.click("._5f5mN");
  // await page.waitForSelector(".cq2ai > img");
  // await page.click(".cq2ai > img", { delay: 2000 });
  // await page.waitForSelector(".mt3GC > button");
  //   await page.click(".mt3GC > button", { delay: 1000 });
  await page.evaluate(() => {
    setTimeout(() => {
      window.scrollBy(0, 100);
    }, 1000);
    setTimeout(() => {
      window.scrollBy(0, 200);
    }, 2000);
    setTimeout(() => {
      window.scrollBy(0, 300);
    }, 3000);
    setTimeout(() => {
      window.scrollBy(0, 400);
    }, 4000);
    setTimeout(() => {
      window.scrollBy(0, 500);
    }, 5000);
    setTimeout(() => {
      window.scrollBy(0, 600);
    }, 6000);
    setTimeout(() => {
      window.scrollBy(0, 700);
    }, 7000);
    setTimeout(() => {
      window.scrollBy(0, 800);
    }, 8000);
  });
  // await page.waitForSelector(".mt3GC > button");
  // await page.click(".mt3GC > button");
  await page.waitForSelector(".Ypffh");
  await page.type(".Ypffh", "Cool ton post! ta assuré mon gars!", {
    delay: 200,
  });
  await page.waitForSelector("button[type=submit]");
  await page.click("button[type=submit]", { delay: 2000 });
  // await page.evaluate(() =>{
  //   setTimeout(() => {
  //     window.scrollBy(0, 500);
  //   }, 1000);
  //   setTimeout(() => {
  //     window.scrollBy(0, 400);
  //   }, 2000);
  //   setTimeout(() => {
  //     window.scrollBy(0, 300);
  //   }, 3000);
  //   setTimeout(() => {
  //     window.scrollBy(0, 200);
  //   }, 4000);
  //   setTimeout(() => {
  //     window.scrollBy(0, 100);
  //   }, 5000);
  //   setTimeout(() => {
  //     window.scrollBy(0, 10);
  //   }, 6000);
  // })

  // await page.evaluate(() => {
  //   window.scrollBy(0, window.innerHeight);
  // });
})();
