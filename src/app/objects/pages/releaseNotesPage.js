const BasePage = require("./basePage");
const ph = require ('../../pageHolder');

class ReleaseNotesPage extends BasePage {
    constructor() {
        super();
        //this.releaseHeader = ph.page.$('.api-entry h3');
    }

    get releaseHeader() {
        return this.ph.page.$('.api-entry h3');
    }

}

module.exports = ReleaseNotesPage;