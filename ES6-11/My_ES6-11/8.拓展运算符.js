
// 将数组和对象转换为逗号分隔的参数变量序列
//-> 很简单的就解构了数组与对象

//逗号分隔的_参数变量序列_
//->解析数组与对象
// let arr = [1, 2, 3, 4, 5]
// console.log(...arr);

// let obj1 = {
//     name1: '刘德华',
//     age1: 18
// }

// let obj2 = {
//     name2: 'ZXY',
//     age2: 20,
//     ...obj1
// }
// console.log(obj2);

//1.合并数组
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

//2.克隆数组
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [...arr1]
console.log(arr2);


//3.同名的属性，书写在后面的属性值将替换

let obj1 = {
    sex: "男"
}

let obj2 = {
    sex: "nan",
    ...obj1,
}

let obj3 = {
    ...obj1,
    sex: "nan",
}

console.log(obj2.sex);
console.log(obj3.sex);


