const BaseObject = require ('../baseObject');
const ph = require ('../../pageHolder');

class RightMenu extends BaseObject {
    get rightMenuItems() {
        return this.ph.page.$$('.right>a');
    }
}

module.exports = RightMenu;