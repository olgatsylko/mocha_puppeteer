const BaseObject = require("../baseObject");
const ph = require ('../../pageHolder');

class BasePage extends BaseObject{
    constructor(){
        super();
    }
   async whatPage(){
       console.log(await this.ph.page.title());
   }
}

module.exports = BasePage;