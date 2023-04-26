

// 2.let
//    ->只停留在当前的作用域中

// 1:块级作用域

// if(true){
//     let a=10;
// }
// console.log(a);//undefined


// for (let index = 0; index < 5; index++) {
// }
// console.log(index);//undefined

// for (var index = 0; index < 5; index++) {
// }
// console.log(index);//5

// 2.没有变量提升

// console.log(a);//undefined
// let a = 1;

// 3.具有暂时性死区
// -> 固定(存储)了当前的作用域状态

// var num = 10;
// if (true) {
//     console.log(num);//num is not defined
//     //let会把变量固定在块级作用域中，而不去上一级作用域是否有这个变量
//     let num = 1;
// }

// var arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = function () {
//         console.log(i);
//     }
// }

// /* 每次循环都会产生一个块级作用域，每个块级作用域都对
// 应一个值，函数对应那个作用域的值。 */
// arr[0]();//0
// arr[1]();//1


// 4.不能重复声明
// let a = 1;
// let a = 2;


//------------------------------------------------------

// const
// ->内存地址不能变的值

// 1.具有块级作用域
// if (true) {
//     const a = 10;
// }
// console.log(a);//undefined


// 2.声明常量必须赋值
// const a;//undefined

// 3.不能重复声明
// const a=1;
// const a=2;