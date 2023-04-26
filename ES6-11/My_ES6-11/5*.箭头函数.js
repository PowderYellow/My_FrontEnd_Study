

// 1.使用
// const sum1 = (num1, num2) => num1 + num2;
// console.log(sum1(1,2));
// 等价于
// function sum2(num1, num2) {
//     return num1 + num2;
// }


// 2.注意事项

// 1.返回一个对象怎么书写:用 () 包裹这个对象
// const fn = () => ({ a: 1 })
// console.log(fn());


// 2.箭头函数不绑定this
//如果在箭头函数中使用this,
//该this就是箭头函数定义位置中的this,且不能修改

// const fn = () => { console.log(this) };
// fn()
// var obj = { name: '刘德华' }
// fn.call(obj);

// function fn2() {
//     console.log(this);
// }
// fn2();


// 3.箭头函数不能使用new实例化对象
// const fn = () => { };
// console.log(fn.prototype);//undefined
// const obj2 = new fn();//TypeError: fn is not a constructor

// const A = function () { };
// console.log(A.prototype);
// const obj1 = new A();



//4.箭头函数不能使用arguments对象
// let fn = (...args) => {
//     console.log(args);
// }
// fn(1,2,3,4)


//5.call/apply/bind方法无法改变箭头函数this的指向,
//但可以暂时改变this的指向

// const obj = {
//     a: "obj"
// }
// window.a = "window";
// const fn = () => { console.log(this.a); }
// fn.call(obj)
// fn.apply(obj);
// fn.bind(obj)();

//6.箭头函数没有原型对象
const fn = () => { }
console.log(fn.prototype);//undefined