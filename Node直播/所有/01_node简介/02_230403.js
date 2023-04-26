

// 进程 to 线程

// 同步
// 异步

// 解决同步问题(有前后顺序)
// - Java: 多线程

// - Node.js
// - 异步(干不了不干了)解决同步问题

// 什么是异步?
//  一段代码不会影响其他的代码




// console.log("1")
// console.log("2")
// console.log("3")


// function sum(a, b, cb) {
//     const begin = Date.now()

//     // 模拟同步
//     // while (Date.now() - begin < 10000) {
//     // }
//     // return a + b


//     // 模拟异步
//     setTimeout(() => {
//         return a + b
//     }, 5000)

//     // 用回调函数返回结果
//     setTimeout(() => {
//         cb(a + b)
//     }, 5000)

// }

// console.log("111111")

// const result = sum(123, 456, (result) => {
//     console.log(result)
// })

// console.log("8888"+result)

// console.log("22222")


// function sum(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b)
//     }, 5000)
// }

// console.log("第一行打印")
// sum(123, 456, result => {
//     console.log(result)
// })
// console.log("第二行打印")


// function sum(a, b) {
//     setTimeout(() => {
//         return a + b
//     }, 5000)
// }

// console.log("第一行打印")

// let result = sum(123, 456)

// console.log(result)
// console.log("第二行打印")


const pro = new Promise((resolve, reject) => {
    resolve("1")
});

const pro2 = pro.then(result => {
    console.log(result);
    return "2";
})

const pro3 = pro2.then(result => {
    console.log(result);
    return "3";
})

