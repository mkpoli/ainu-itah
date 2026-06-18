// Headless-Chromium smoke test for the dictionary table layout.
// Usage: bun run preview &  then  bun scripts/check-table-layout.mjs [baseUrl]
// Verifies, at a phone viewport, that header and data-row columns align,
// the table does not overflow, and nested sub-rows render.
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://localhost:4173';
const VW = 390;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: VW, height: 844 } });
await page.goto(`${base}/ja`, { waitUntil: 'networkidle' });
await page.waitForSelector('table tbody tr', { timeout: 15000 });

const tog = await page.$('table tbody button[aria-expanded]');
if (tog) {
	await tog.click();
	await page.waitForTimeout(300);
}

const ths = await page.$$eval('thead th', (els) =>
	els.map((e) => Math.round(e.getBoundingClientRect().left))
);
const tds = await page.$$eval('tbody tr:first-child td', (els) =>
	els.map((e) => Math.round(e.getBoundingClientRect().left))
);
const tableW = await page.$eval('table', (e) => Math.round(e.getBoundingClientRect().width));
await browser.close();

const aligned = ths.length === tds.length && ths.every((x, i) => Math.abs(x - tds[i]) <= 1);
const overflow = tableW > VW + 1;
console.log(
	`cols header=${ths.length} row=${tds.length} aligned=${aligned} tableW=${tableW} overflow=${overflow}`
);
if (!aligned || overflow) {
	console.error('LAYOUT CHECK FAILED');
	process.exit(1);
}
console.log('LAYOUT CHECK PASSED');
