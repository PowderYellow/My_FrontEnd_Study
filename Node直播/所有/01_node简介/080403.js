// async function fn2() {
//     return 10
// }

// fn2().then(r => {
//     console.log(r);
// })

// function sum(a, b) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 2000)
//     })
// }


// async function fn3() {
// sum(123, 456)
//     .then(r => {sum(r, 8)})
//     .then(r => sum(r, 9))
//     .then(r => console.log(r))

//     let result = await sum(123, 456)
//     console.log(result);
// }
//
// fn3();
// console.log("全局")

// async function fn4() {
//     console.log(1)
//     console.log(2)
//     console.log(3)
// }
//
// fn4()
//
// console.log(4)

async function fn4() {
    console.log(1)
    await console.log(2)
    console.log(3)
}

fn4()

console.log(4)