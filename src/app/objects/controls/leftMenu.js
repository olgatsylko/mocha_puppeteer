const BaseObject = require ('../baseObject');
const ph = require ('../../pageHolder');

class LeftMenu extends BaseObject {
    get menuItems() {
        return this.ph.page.$$('sidebar-item>a');
    }
}

module.exports = LeftMenu;