// 1.创建symbol

// 1.1.Symbol();
let s = Symbol();
console.log(s, typeof s);

let s1 = Symbol("zhangsan")
let s2 = Symbol("zhangsan")
console.log(s1 === s2); //false

//1.2.symbol.for创建