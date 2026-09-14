import puppeteer from "puppeteer-core";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  // 1. Desktop 1440x960 Hero & Services
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1200));

  await page.screenshot({ path: "scripts/final-hero-desktop.png" });

  // Scroll down to capabilities / services section
  const capsEl = await page.$("#capabilities");
  if (capsEl) {
    await capsEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: "scripts/final-services-desktop.png" });
  }

  // Scroll down to technology & process
  const techEl = await page.$("#technology");
  if (techEl) {
    await techEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: "scripts/final-tech-process.png" });
  }

  // Scroll down to innovation & footer
  const innovEl = await page.$("#innovation");
  if (innovEl) {
    await innovEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: "scripts/final-innovation.png" });
  }

  // 2. Mobile 390x844
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: "scripts/final-mobile-hero.png" });

  const capsMobile = await page.$("#capabilities");
  if (capsMobile) {
    await capsMobile.scrollIntoView();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: "scripts/final-mobile-services.png" });
  }

  console.log("All screenshots captured successfully!");
  await browser.close();
}

main().catch(console.error);
