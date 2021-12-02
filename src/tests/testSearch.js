const ui = require ('../app/ui');

describe('example spec', function () {
    beforeEach (async() => {
        await ui.ph.navigate('https://pptr.dev/#?product=Puppeteer&version=v12.0.1&show=api-release-notes');
    });
    
    it('The fourth test: navigate to Release Notes page and search', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://pptr.dev/images/wrench.svg' && resp.status() === 200;
        })
        await ui.search.searchText('elementHandle');
        ui.clickBy('searchResults', 3);
     
        let links = await ui.search.searchContent;
        let link = await ui.search.getText2(links[0]);
        //console.log(link);
        ui.expect(link).to.include('disposed');
  });
});