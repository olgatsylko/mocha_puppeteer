const BaseObject = require("../baseObject");
const Search = require ('../controls/search');
const ph = require ('../../pageHolder');

class BasePage extends BaseObject{
    constructor(){
        super();
    }
    get search() {
        return this.createGetter(Search);
    }
}

module.exports = BasePage;