
class BaseObject {
    #ph = require ('../pageHolder');
    #cache = {};

    get ph() {
        return this.#ph;
    }
    createGetter(Constructor){
        let key = Constructor.toString();
        if (this.#cache[key]){
            return this.#cache[key];
        }
        let obj = new Constructor();
        this.#cache[key] = obj;
        return obj;
    }

    // createGetter(Constructor) {
    //     let obj = this.#pool.find((obj) =>{
    //         return obj.constructor === Constructor
    //     })
    //     if (obj) {
    //         return obj;
    //     }
    //     obj = new Constructor();
    //     this.#pool.push(obj);
    //     return obj;
    // }

    async getText(element){
        return (await ((await this[element]).evaluate(node => node.innerText))).trim();
    }

    async getText2(element){
        return (await this.#ph.page.evaluate(element => element.textContent, element)).trim();
    }

    // async clickBy(elements, textOrPosition){
    //     let arr = await this[elements];
    //     let el = await arr.find(async function (elem) {
    //         return (await this.getText(elem)) === textOrPosition;
    //     })
    //     await el.click();         
    // }

    async clickBy(elements, position){
        if (typeof position === 'number') {
            let arr = await this[elements];
            await arr[position].click();
        } 
    }
}

module.exports = BaseObject;