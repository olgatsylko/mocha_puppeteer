const Header = require('./objects/controls/header');
const LeftMenu = require ('./objects/controls/leftMenu');
const Search = require ('./objects/controls/search');
const chai = require ('chai');
const BaseObject = require('./objects/baseObject');
const PageFactory = require ('./objects/pages/pageFactory');

class Ui extends BaseObject{
    get expect() {
        return chai.expect;;
    }
    get header() {
        return this.createGetter(Header);
    }
    get menu() {
        return this.createGetter(LeftMenu);
    }
    get factory() {
        return this.createGetter(PageFactory);
    }
    get search() {
        return this.createGetter(Search);
    }
    
    





    // get header() {
    //     if (this.#currentObject.constructor === Header) {
    //         return this.#currentObject;
    //     }
    //     this.#currentObject = new Header();
    //     return this.#currentObject;
    // }

}

module.exports = new Ui ();