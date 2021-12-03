const BaseObject = require ('../baseObject');
const ph = require ('../../pageHolder');

class Search extends BaseObject {
    get searchResults() {
        return this.ph.page.$$('search-item-api-method-name');
    }
    get searchContent() {
        return this.ph.page.$$('a[href*="elementhand"]');
    }
    async searchText(text){
        const elementHandle = await this.ph.page.$('input[type=search]');
        await elementHandle.type(text, { delay: 100});
        await elementHandle.press('Enter');
    }
}

module.exports = Search;