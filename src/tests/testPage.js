const ui = require ('../app/ui');

describe('example spec', function () {
    beforeEach (async() => {
        await ui.ph.navigate('https://pptr.dev/#?product=Puppeteer&version=v12.0.1&show=api-release-notes');
    });
    
    it('The second test: navigate to Release Notes page and search', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://pptr.dev/images/wrench.svg' && resp.status() === 200;
        })

        let releaseNotes = ui.factory.getPage('Release Notes');
        const rn = await releaseNotes.getText('releaseHeader')
        ui.expect(rn).to.equal('Bug Fixes');
  });
});