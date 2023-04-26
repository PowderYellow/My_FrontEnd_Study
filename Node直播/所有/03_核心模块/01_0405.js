//1
// console.log(process)

//2
var path = require("path");
// const buffer = require("buffer");
// console.log(path)

//3
// var res = path.resolve();
// console.log(res);

//4
// var res_hello = path.resolve("./hello.js");
// console.log(res_hello)

//5
// console.log(path.resolve(__dirname, "./hello.js"))


//6
// var fs = require("fs");

//
// var buf = fs.readFileSync(path.resolve(__dirname, "./hello.txt"));
// console.log(buf.toString())


//7
// fs.readFile(
//     path.resolve(__dirname, './hello.txt'),
//     (err, buffer) => {
//         if (err) {
//             console.log("err")
//         } else {
//             console.log(buffer.toString())
//         }
//     })
// console.log("12")


//8
var fs = require("fs/promises");
const buffer = require("buffer");
// const { buffer } = require("stream/consumers");

// fs.readFile(path.resolve(__dirname, "./hello.txt"))
//     .then(buffer => {
//         console.log(buffer.toString())
//     }).catch(e => {
//     console.log("出错了")
// })


//9
;(async () => {
    try {
        const buffer = await fs.readFile(path.resolve(__dirname, "./hello.txt"))
        console.log((buffer.toString()))
    } catch (e) {
        console.log("error...")
    }
})()


// ---------------------------------------------------



