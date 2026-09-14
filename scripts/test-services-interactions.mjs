import puppeteer from "puppeteer-core";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  const caps = await page.$("#capabilities");
  if (caps) await caps.scrollIntoView();
  await new Promise((r) => setTimeout(r, 600));

  // 1. Click Next button to slide to card 2
  const nextBtn = await page.$('button[aria-label="Next service"]');
  if (nextBtn) {
    await nextBtn.click();
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: "scripts/verify-services-slide2.png" });
    console.log("Slide 2 screenshot captured");
  }

  // 2. Click Grid button to toggle grid view
  const gridBtn = await page.$('button[aria-label="Grid View"]');
  if (gridBtn) {
    await gridBtn.click();
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: "scripts/verify-services-grid.png" });
    console.log("Grid view screenshot captured");
  }

  // 3. Click Scroll button to switch back to scroll view
  const scrollBtn = await page.$('button[aria-label="Carousel Scroll View"]');
  if (scrollBtn) {
    await scrollBtn.click();
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: "scripts/verify-services-back-to-scroll.png" });
    console.log("Back to scroll screenshot captured");
  }

  await browser.close();
}

main().catch(console.error);
