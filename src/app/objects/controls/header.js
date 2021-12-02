const BaseObject = require ('../baseObject');
const ph = require ('../../pageHolder');

class Header extends BaseObject {
    get title () {
        return this.ph.page.$('app-title');
    }
}

module.exports = Header;