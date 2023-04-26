const obj = {
    name: "swk",
    age: 18
}


const handler = {

    // get(...args) {
    //     console.log(args);
    //     return 'hhh'
    // }

    get(target, prop, receiver) {
        return target[prop]
    },

    set(target,prop,value,receiver){
        // console.log(target,prop,value,receiver)

        target[prop]=value

    }

}


const proxy = new Proxy(obj, handler);

proxy.age = 28

console.log(proxy.age)