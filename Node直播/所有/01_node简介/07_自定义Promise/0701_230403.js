const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}


class MyPromise {

    #result;

    #state = PROMISE_STATE.PENDING;

    constructor(executor) {

        //绑定两个方法的对象:不然方法的this is undefined
        executor(this.#resolve.bind(this), this.#reject.bind(this))
    }

    //#:私有方法
    #resolve(value) {
        // console.log(value+"1")

        // console.log(this)：
        // 有this.#resolve.bind(this)才能绑定，不然是undefined，
        // 因为是 resolve("111")这么调用的

        if (this.#state !== 0) {
            return
        }
        this.#result = value;
        this.#state = 1
    }

    //放到对象自身中，不会指向：箭头函数的功能是什么？
    // #resolve = () => {
    //     // console.log(value+"1")
    //     console.log(this)
    //     // this.#result = value;
    // }

    #reject(reason) {

    }

    then(onFulfilled, onRejected) {
        if (this.#state === 1) {
            onFulfilled(this.#result)
        }

    }
}

const mp = new MyPromise((resolve, reject) => {
        resolve("111")
    }
)
mp.then((result) = {})
// console.log(mp)








