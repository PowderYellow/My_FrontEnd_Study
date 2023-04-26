// const promise = new Promise((resolve, reject) => {
//     resolve("周一到周五");
// })

// promise.then((result) => {
//     console.log(result);
// }, reason => {
//     console.log("err", reason);
// })


// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b)
//         })
//     })
// }

// sum(123, 456).then(res => {
//     console.log(res);
// })

// const promise = new Promise((resolve, reject) => {
//     reject("周一到周五19点，不见不散")
// })
// const p2 = promise.then(res => {
//     console.log(res);
//     return "p2";
// })

// p2.then(res => {
//     console.log(res);
// })

// promise
//     .then(r => "hh")
//     .catch(r => {
//         console.log("ca", r);
//         return "123";
//     }
//     )
//     .catch(r => console.log("2", r));


const promise = new Promise((resolve, reject) => {
    resolve("周一到周五19点，不见不散")
})

promise
    .then(r => "hh")
    .catch(r => console.log(r))
    .then(r => console.log("2", r))


// const promise = new Promise((resolve, reject) => {
//     reject("周一到周五19点，不见不散")
// })

// promise
//     .then(r => console.log("第一个then", r))
//     .catch(r => {
//         throw new Error("报个错玩")
//         console.log("出错了")
//         return "嘻嘻"
//     })
//     .then(r => console.log("第二个then", r))
//     .catch(r => {
//         console.log(r)
//     })