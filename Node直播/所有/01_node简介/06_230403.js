// Promise.resolve(123);

// setTimeout(() => {
//     console.log(1)
// }, 0)

// Promise.resolve(2).then(
//     (e) => {
//         console.log(e)
//         return 4;
//     }).then(
//         (e) => {
//             console.log(e)
//         }
//     )

// console.log(3)


// queueMicrotask(() => {
//     console.log(1)
// })

// console.log(2)


// setTimeout(() => {
//     console.log(1)
// })

// queueMicrotask(() => {
//     console.log(2)
// })

// Promise.resolve().then(() => {
//     console.log(3)
// })


// ------------------------


// Promise.resolve().then(() => {
//     setTimeout(()=>{
//         console.log(1)
//     })
// })

// queueMicrotask(() => {
//     console.log(2)
// })


// ------------------------
// Promise.resolve().then(() => {
//     Promise.resolve().then(() => {
//         console.log(1)
//     })
// })

// queueMicrotask(() => {
//     console.log(2)
// })


// ------------------------
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);


// 1735246:先放进去再执行