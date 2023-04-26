
// 简单来说,就是按照对应位置，进行赋值
// 形式如  声明 { 变量 }=obj  -->这里变量就是所赋的值


// 1.数组结构
// let [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// let [a, b, c] = [1]
// console.log(a);
// console.log(b);没有对应值就是underfined


// 对象结构
// let obj = {
//     name: "LDH",
//     age: 18
// }
// let {name,age,sex}=obj
// console.log(name); LDH
// console.log(sex); undefined

// let { name: newName, age: newAge } = obj
// console.log(newName);
// console.log(newAge);


// 函数参数结构
function fn( { a, b, c, d = 4, e } ) {
    console.log(a, b, c, d, e);
}

fn({ e: 5, a: 1, b: 2, c: 3 });
