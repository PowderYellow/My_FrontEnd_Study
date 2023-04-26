
// 1.初始化
// const a = new Set();
// Set函数可以接受一个数组或多个数组作为参数, 来初始化。
// const b = new Set([1, 2, 2, 3]);
// console.log(b);//{1,2,3}


// 2.特性
// 支持for of
// 支持扩展运算符


// 3.属性和方法
// size属性是集合的大小
// Set原型身上的方法：
// add(value)添加值 返回Set本身
// delete (value)删除值 返回布尔值
// has() 判断是否有值，返回布尔值
// clear() 清空Set, 没有返回值
// forEach(value => console.log(value);) 遍历Set



// 4.数组去重
// let arr = [1, 1, 2, 4, 3, 5, 6, 4];
// console.log('数组去重', [...new Set(arr)]);



// 5.数组取交集
// let arr = [1, 1, 2, 4, 3, 5, 6, 4];
// let arr1 = [1, 7, 3, 3, 4];
// // 先给arr去重，较少过滤的次数
// let intersection = [...new Set(arr)].filter(function (item) {
//     // 再用arr1生成一个Set，判断是否有过滤后的arr中的值，有就是交集的部分
//     return new Set(arr1).has(item);
// })
// console.log('交集', intersection);



// 6.数组取并集
// let arr = [1, 1, 2, 4, 3, 5, 6, 4];
// let arr1 = [1, 7, 3, 3, 4];
// let union = [...new Set(arr, arr1)];
// console.log('并集', union);



// 7.数组取差集
// let arr = [1, 1, 2, 4, 3, 5, 6, 4];
// let arr1 = [1, 7, 3, 3, 4];
// let subtraction = [...new Set(arr)].filter(function (item) {
//     return !new Set(arr1).has(item);
// })
// console.log('arr差集arr1(也就是arr中有的arr1中没有)', subtraction);
