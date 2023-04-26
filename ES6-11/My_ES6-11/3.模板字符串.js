

// ``类似于保留的一种新数据类型(语法糖),可以用${}来解析

//创建模板字符串
// let str =`as`
// console.log(str);

// 解析变量的映射
// let name =`LDH`
// let text =`${name} handsome`
// console.log(text);


let obj = {
    name: '刘德华',
    age: 18,
    sex: '男'
}

// 可以保留空格
// let str =
//     `<div>
//     <span>${obj.name}</span>
// 	<span>${obj.age}</span>
// 	<span>${obj.sex}</span>
// </div>`
// console.log(str);


// 一种在函数中的用法
// let fn = (num1, num2) => num1 + num2
// let str = `result is ${fn(1, 2)}`
// console.log(str);
