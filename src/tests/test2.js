/*const ui = require ('../app/ui');

describe('example spec', function () {
    before (async () => {
       await ui.ph.launch();
    });

    after (() => ui.ph.finish());

    beforeEach (async() => {
        await ui.ph.create();
        await ui.ph.navigate('https://pptr.dev/#?product=Puppeteer&version=v12.0.1&show=api-release-notes');
    });

    afterEach(async() => ui.ph.close());

    it('second test: navigate to Release Notes page', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://pptr.dev/images/wrench.svg' && resp.status() === 200;
        })
        const text = await ui.header.getText('title');
        ui.expect(text).to.equal('Puppeteerv12.0.1Search:');

        let releaseNotes = ui.factory.getPage('Release Notes');
        
        const releaseNot = await ui.ph.page.$('Bug Fixes');//Подумать как сделать экспект
        
        //////Validate Search
        await ui.search.searchText('elementHandle');
    
        
        //const links = await ui.ph.page.$$('a[href*="elementhand"]');
        //console.log(searchEl);
        //ui.clickBy('links', 1);
  
        
        //let headerPage = await releaseNotes.pageHeader;
        //console.log(headerPage);
        //let value = await ui.getText2(headerPage);
        // ui.expect(value).to.equal('Bug Fixes');

//Test 3
        // ui.menu.clickBy('menuItems', 'Overview');
        // const over = (await ui.ph.page.$('puppeteer overview'));
  

  });
});*/