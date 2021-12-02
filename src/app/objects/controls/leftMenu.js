const BaseObject = require ('../baseObject');
const ph = require ('../../pageHolder');

class LeftMenu extends BaseObject {
    menuItems = [];

    constructor(){
        super();
        this.container = ph.page.$('sidebar-component');
        this.menuItems = ph.page.$$('sidebar-item>a');
    }

}

module.exports = LeftMenu;