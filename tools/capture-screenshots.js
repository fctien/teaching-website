const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const outDir = path.join(__dirname, "..", "screenshots");

  await page.goto("http://localhost:8080", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "01_hero.png") });
  console.log("01_hero.png");

  await page.click('a[data-section="courses"]');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "02_courses.png") });
  console.log("02_courses.png");

  await page.click('a[data-section="videos"]');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "03_videos.png") });
  console.log("03_videos.png");

  await page.click('a[data-section="resources"]');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "04_resources.png") });
  console.log("04_resources.png");

  await page.click('#navLoginBtn');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, "05_login.png") });
  console.log("05_login.png");

  await browser.close();
  console.log("Done");
})();
