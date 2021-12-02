const BaseObject = require ('../baseObject');
const ph = require ('../../pageHolder');

class Search extends BaseObject {
    constructor(){
        super();
        this.searchContainer = ph.page.$('search-button');
        this.searchContent = ph.page.$$('a[href*="elementhand"]');
        //this.input = ph.page.$('input[type=search]');
    }

    async searchText(text){
        const elementHandle = await this.ph.page.$('input[type=search]');
        await elementHandle.type(text, { delay: 100});
        await elementHandle.press('Enter');
    }
}

module.exports = Search;