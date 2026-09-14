import puppeteer from "puppeteer-core";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960 });

  const errors = [];
  const logs = [];

  page.on("console", (msg) => {
    logs.push(`[${msg.type()}] ${msg.text()}`);
    if (msg.type() === "error" || msg.type() === "warning") {
      errors.push(`[${msg.type()}] ${msg.text()}`);
    }
  });

  page.on("pageerror", (err) => {
    errors.push(`[PAGE_ERROR] ${err.toString()}`);
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 2000));

  // Check for nextjs error overlay
  const issueText = await page.evaluate(() => {
    const el = document.querySelector("nextjs-portal") || document.querySelector("#nextjs-dev-tools");
    if (el) return el.shadowRoot ? el.shadowRoot.innerHTML : el.innerHTML;
    return null;
  });

  console.log("=== ALL LOGS ===");
  logs.forEach((l) => console.log(l));

  console.log("=== CONSOLE ERRORS & WARNINGS ===");
  errors.forEach((e) => console.log(e));

  if (issueText) {
    console.log("=== ISSUE OVERLAY ===");
    console.log(issueText.slice(0, 2000));
  }

  await browser.close();
}

main().catch(console.error);
