

// Promise.resolve() 创建一个立即完成的Promise

// Promise.resolve("10").then(r => console.log(r))

// new Promise((resolve, reject) => {
//     resolve("10")
// })

// Promise.reject("错误")

// function sum(a, b) {
//     setTimeout(() => {
//         console.log(a);
//         return new Promise((resolve, reject) => {
//             resolve(a + b)
//         })
//     }, 1000)
// }

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}


// Promise.all([
//     sum(123, 456),
//     sum(5, 6),
//     Promise.reject("hh"),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })

// Promise.allSettled([
//     sum(123, 456),
//     sum(5, 6),
//     Promise.reject("hh"),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })



// Promise.race([
//     Promise.reject(1111),
//     sum(123, 456),
//     sum(5, 6),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// }).catch(r => {
//     console.log("错误")
// })


// Promise.any([
//     sum(1, 2),
//     Promise.reject(1111),
//     Promise.reject(2222),
//     Promise.reject(3333),
// ]).then(r => {
//     console.log(r)
// }).catch(r => {
//     console.log("错误", r)
// })


setTimeout(() => {
    console.log(1111)
})

Promise.resolve()
    .then(() => {
        console.log(2222)
    })
