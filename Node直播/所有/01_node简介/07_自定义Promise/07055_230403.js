// 链式调用

const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}


class MyPromise {

    #result;

    #state = PROMISE_STATE.PENDING;

    #callbacks = []

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
        this.#state = PROMISE_STATE.FULFILLED


        queueMicrotask(() => {
            //异步与同步
            this.#callbacks.forEach(cb => {
                cb()
            })
        })

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

        return new MyPromise(
            (resolve, reject) => {
                //解决异步
                if (this.#state === PROMISE_STATE.PENDING) {
                    this.#callbacks.push(() => {
                            //返回值是新的resolve参数
                            resolve(onFulfilled(this.#result)) //记录变量
                        }
                    )
                } else if (this.#state === 1) {
                    queueMicrotask(
                        () => {
                            resolve(onFulfilled(this.#result))
                        })
                }
            })

    }
}

const mp = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve("111")
        }, (1000))
    }
)

mp.then((result) => {
    console.log("读取数据1", result)
    return "猪八戒"
}).then(r => {
    console.log("读取数据2", r)
    return "沙和尚"
}).then(r => {
    console.log("读取数据3", r)
})
// console.log(mp)








