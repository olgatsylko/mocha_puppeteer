const ui = require ('../app/ui');

describe('example spec', function () {
    beforeEach (async() => {
        await ui.ph.navigate();
    });

    it('The third test: click right menu link', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://img.shields.io/npm/v/puppeteer.svg' && resp.status() === 200;
        })
        await ui.rightMenu.rightMenuItems;
        await ui.rightMenu.clickBy('rightMenuItems', 1);
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://github.com/puppeteer/puppeteer/security/overall-count' && resp.status() === 200;
        })
        ui.expect(await ui.ph.page.title()).to.include('troubleshooting');

        await ui.ph.page.goBack();

        await ui.rightMenu.rightMenuItems;
        await ui.rightMenu.clickBy('rightMenuItems', 0);
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://i.stack.imgur.com/ppMV7.png' && resp.status() === 200;
        })
        ui.expect(await ui.ph.page.title()).to.include('Questions');

  });
});