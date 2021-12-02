
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

    async clickBy(elements, textOrPosition){
        console.log("111111");
        if (typeof textOrPosition === 'number') {
            let arr = await this[elements];
            arr[textOrPosition].click();
        // } else {
        //     console.log("22222");
        //     await this[elements].filter(async function (elem) {
        //         return (await elem.getText()).trim() === textOrPosition;
        //     }).click();
            
        }
    }
}

module.exports = BaseObject;