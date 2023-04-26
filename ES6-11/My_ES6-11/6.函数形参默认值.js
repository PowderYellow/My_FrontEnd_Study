
//可以给形参设置初始值

function add(a, b, c = 3) {
    return a + b + c;
}

console.log(add(1, 2));// 6