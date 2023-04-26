// const promise2 = new Promise((resolve, reject) => {
//     resolve("哈哈")
// })

// promise2.then(result => {
//     console.log(result)
// }, reason => {
//     console.log("出错了")
// })

// console.log("111")


const promise=new Promise((resolve,reject)=>{
    reject("err");
})

promise.catch(err=>{
    console.log(err)
})