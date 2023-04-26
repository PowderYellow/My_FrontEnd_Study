
//Q:如果我们需要的参数不确定怎么办
//Sol:剩余参数(...变量名)允许我们将不定量的参数表示

// function fn(first, ...args) {
//     console.log(first);
//     console.log(args);
// }
// fn(1, 2, 3, 4, 5, 6)


//1.箭头函数中没有arguments对象，所以只能用
//剩余参数来存储多于的参数
// const sum = (...args) => {
//     let total = 0;
//     args.forEach(item => total += item);
//     return total;
// }
// console.log(sum(1, 2, 3));

// 2.剩余参数和解构赋值搭配使用
// let arr = [1, 2, 3];
// let [first, ...last] = arr;
// console.log(first);
// console.log(last);