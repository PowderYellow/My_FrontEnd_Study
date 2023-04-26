let a = 10
let b = 20

// console.log("i am m1")

// console.log(exports === module.exports)


// exports.a = "SWK"
// exports.b = "ZBJ"
// exports.c = function () {
//     console.log("hh")
// }


//该对象
module.exports = {
    a: "hh",
    b: [1, 3, 5, 7],
    c: () => {
        console.log(111)
    }
}

//这么写是重新赋值
// exports = {
//     a: "hh",
//     b: [1, 3, 5, 7],
//     c: () => {
//         console.log(111)
//     }
// }


// var path = require('path');
// console.log(path)

// var path = require("path");
// console.log(path)

