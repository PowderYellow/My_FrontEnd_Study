// 1.from()
// //将伪数组和可遍历的对象转换为数组
// //属性名必须是数字0开始不然访问不到
// var obj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
// console.log(Array.from(obj));


// 2.find()
// // 用于找出第一个符合条件的数组成员， 如果没有找到返回undefined
// let arr = [1, 23, 4, 5];
// // find接收一个函数，函数有两个形参，一个接收值，一个接收索引，return中写判断条件
// let a = arr.find((value, index) => value == 4);
// console.log(a);//4


// 3.findIndex()
// // 用于找出第一个符合条件的数组成员的位置， 如果没有找到返回-1
// let arr = [1, 23, 4, 5];
// let a = arr.findIndex((value, index) => value == 4);
// let b = arr.findIndex((value, index) => value == 6)
// console.log(a);//2
// console.log(b);//-1



// 4.includes()
// // 判断某个数组是否包含给定的值，返回布尔值。
// let arr = [1, 23, 4, 5];
// let a = arr.includes(2);
// let b = arr.includes(1);
// console.log(a);//false
// console.log(b);//true



// 5.flat
// 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// var newArray = arr.flat([depth]);
// 指定要提取嵌套数组的结构深度，默认值为 1。

// 怎么理解这个深度？大家可以看我的es5实现es6专栏里面的文章
// 实现flat

// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()); // [1, 2, 3, 4]
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(1)); // [0, 1, 2, [[3,4]]]
// console.log(arr2.flat(2)); // [0, 1, 2, [3, 4]]

// flat() 方法会移除数组中的空项:

// var arr4 = [1, 2, , 4, 5];
// arr4.flat(); // [1, 2, 4, 5]


// 6.flatMap
// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与map连着深度值为0的flat几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
// 1
// 注意mdn文档错误


// 语法
// var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
//     // return element for new_array
// }[, thisArg])
// 参数
// callback
// 可以生成一个新数组中的元素的函数，可以传入三个参数：
// currentValue
// 当前正在数组中处理的元素
// index可选
// 可选的。数组中正在处理的当前元素的索引。
// array可选
// 可选的。被调用的 map 数组
// thisArg可选
// 可选的。执行 callback 函数时 使用的this 值。
// 返回值
// 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1。

// let arr = [1, 2, 3, [4, 5]];
// arr.flatMap((item, index, array, thisArg) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);
//     console.log(thisArg);
// })
