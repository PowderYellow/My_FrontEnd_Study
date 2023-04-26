
// 使用别处声明的函数可以简写

let name = "zhangsan"
let clog = () => {
    console.log("shushu");
}

let obj = {
    name,
    clog,
    add(num1, num2) {
        return num1 + num2;
    }
}
// 等价于
let obj2 = {
    name: name,
    clog: clog,
    add: function (num1, num2) {
        return num1 + num2;
    }
}


obj.clog(); // shuchu
console.log(obj.name, obj.add(1, 2)); // zhangsan 3

obj2.clog(); // shuchu
console.log(obj2.name, obj2.add(1, 2)); // zhangsan 3