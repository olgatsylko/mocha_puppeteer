const puppeteer = require ('puppeteer');
const {expect} = require ('chai');

let page, browser;

describe('example spec', function () {
    before (async () => {
        browser = await puppeteer.launch({headless:false});
    });

    after (() => browser.close());

    beforeEach (async() => {
        page = await browser.newPage();
        await page.goto('https://pptr.dev/');
    });

    afterEach(async() => page.close());

    it('second test', async function () {
        await page.waitForResponse(resp => {
            return resp.url() === 'https://img.shields.io/npm/v/puppeteer.svg' && resp.status() === 200;
        })
    
        // await page.waitForTimeout(5000);
        const title = (await page.$$('content-box h1'))[0];
        const text = (await page.evaluate (element => element.textContent, title)).trim();
        const text1 = (await title.evaluate ((node => node.innerText))).trim();
        expect(text).to.equal('Puppeteer');
        expect(text1).to.equal('Puppeteer');

  });
});