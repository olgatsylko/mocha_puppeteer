const BaseObject = require("../baseObject");
const ph = require ('../../pageHolder');

class BasePage extends BaseObject{
    constructor(){
        super();
        //this.topBar = ph.page.$('toolbar-component');
    }
}

module.exports = BasePage;