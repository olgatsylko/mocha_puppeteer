const ui = require ('../app/ui');

describe('example spec', function () {
    beforeEach (async() => {
        await ui.ph.navigate();
    });

    it('The first test: click left menu link', async function () {
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
        //await ui.ph.page.waitForTimeout(2000)
    
        let releaseNote = ui.factory.getPage('Release Notes');
        const rn = await releaseNote.getText('releaseHeader')
        ui.expect(rn).to.equal('Bug Fixes');
  
  });
});