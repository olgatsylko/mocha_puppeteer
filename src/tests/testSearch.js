const ui = require ('../app/ui');

describe('Search', function () {
    beforeEach (async() => {
        await ui.ph.navigate();
    });
    
    it('The fourth test: search', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://img.shields.io/npm/v/puppeteer.svg' && resp.status() === 200;
        })
        const text = await ui.header.getText('title');
        ui.expect(text).to.equal('Puppeteerv12.0.1Search:');

       // await ui.search.searchInput;
        await ui.search.searchText('elementHandle');
        //await ui.clickBy('searchResults', 2);
        ui.expect(await ui.ph.page.title()).to.include('ElementHandle');
       
        let links = await ui.search.searchContent;
        let link = await ui.search.getText2(links[0]);
        ui.expect(link).to.include('disposed');
  });
});