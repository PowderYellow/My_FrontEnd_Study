//超大整数的运算处理

//BigInt的作用
//大整数，主要用来超大整数的运算处理

//1.声明方式
// 表示方式
// let a = 521n;
// console.log(a, typeof a); // 521n 'bigint'


//2.整数转大整数
// 将其它整数转换为大整数,只能转换整数，不能转换浮点数
// let b = 200;
// console.log(BigInt(b)); // 200n


//3.大整数运算
//-> 大数值运算

// 3.1.js中最大的整数
// let max = Number.MAX_SAFE_INTEGER;
// console.log(max);
// console.log(max + 1);
// // 当加2时，值不再变化
// console.log(max + 2);

// // 大整数只能和大整数进行运算，不能和其它类型的数值运算
// console.log(BigInt(max) + BigInt(2));
