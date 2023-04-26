// console.log(Number.prototype);

// console.log(0.1 + 0.2 !== 0.3);

//Number.EPSILON
//Number.EPSILON是JavaScript的最小精度
//可以用来解决前端经典面试题0.1 + 0.2 !== 0.3
// console.log(0.1 + 0.2 === 0.3);//false

// function fn() {
//     if (0.1 + 0.2 - 0.3 < Number.EPSILON) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(fn());//true


//2.二进制0b开头
//八进制0o开头
//16进制0x
// let a = 0b1010;
// // 输出的时候会自动转换为10进制
// console.log(a); // 10
// let b = 0o777;
// console.log(b); // 511
// let c = 0x11;
// console.log(c); // 17


//Number.isFinite
//检测一个数值是否为有限数(包括无限循环小数)

// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(100)); // true
// console.log(Number.isFinite(10 / 3)); // true
// console.log(Number.isFinite(Infinity)); // false



// Number.parseInt和Number.parseFloat
// 字符串转整数和浮点数

// console.log(Number.parseInt('12312haha')); // 12312
// console.log(Number.parseFloat('1231.3d')); // 1231.3


//Number.isInteger
//Number.isInteger判断是否为整数

// console.log(Number.isInteger(12.2)); // false
// console.log(Number.isInteger(1)); //true
