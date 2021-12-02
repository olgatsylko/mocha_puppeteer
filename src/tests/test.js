const ui = require ('../app/ui');

describe('example spec', function () {

    before (async () => {
       await ui.ph.launch();
    });

    after (() => ui.ph.finish());

    beforeEach (async() => {
        await ui.ph.create();
        await ui.ph.navigate();
    });

    afterEach(async() => ui.ph.close());

    it('first test: click menu link', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://img.shields.io/npm/v/puppeteer.svg' && resp.status() === 200;
        })

        const text = await ui.header.getText('title');
        ui.expect(text).to.equal('Puppeteerv12.0.1Search:');

        let mItems = [];
        mItems = await ui.menu.menuItems;
       
        const ttl = await ui.menu.getText2(mItems[1]);
        ui.expect(ttl).to.equal('Release Notes');

        await ui.menu.clickBy('menuItems', 1);
        console.log("22222222");
        await ui.ph.page.waitForTimeout(5000)
        console.log("3333333");
       
        let releaseNote = ui.factory.getPage('Release Notes');
        //let x = await releaseNote.releaseHeader;
        console.log("44444444");

       // const rn = await ui.ph.page.$('.api-entry h3').evaluate(node => node.innerText);
        const rn = await ui.ph.page.$('.api-entry h3').click();
        console.log(rn);

        console.log(await ui.ph.page.url());
       
        //const rn = await releaseNote.getText('releaseHeader')
        //ui.expect(rn).to.equal('Bug Fixes');

        // await ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === 'https://pptr.dev/#?product=Puppeteer&version=v12.0.1&show=api-release-notes' && resp.status() === 200;
        // })
  });
});