// 声明类与创建对象

// // 1.创建类
// class Name {
//     //属性、方法
// }

// // 2.实例化对象
// const obj = new Name();

//3.构造函数/有默认值的添加属性
// class Calculator {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     ConstantValue = 123;
//     change(x) {
//         this.ConstantValue = x
//     }
// }
// const cal =new Calculator(1,2);
// console.log(cal.ConstantValue);
// cal.change(1111)
// console.log(cal.ConstantValue);


//4.继承
//4.1.关于super
// 因为super调用了父类的构造函数,
// 调用super后才能才能正常执行父类的方法

// class Father {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     sum() {
//         console.log(this.x + this.y + 1);
//     }
// }

// class Son extends Father {
//     constructor(x, y, z) {
//         super(x, y)
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
//     sub() {
//         console.log( this.x - this.y);
//     }
// }
// var son = new Son(1, 2,3)
// son.sum();
// son.sub()

// 5.getter和setter
// ->都会自动读取的
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     // 给name属性绑定一个get,当请求这个属性时，会自动调用函数
//     get name() {
//         // 注意不要在get方法里面有读取name的操作，否则会循环调用，造成调用栈溢出
//         return `name+1111`
//     }

//     // 给name属性绑定一个set,当设置这个属性时，会自动调用函数
//     set name(newName) {
//         // 注意不要在set方法里面有设置name的操作，否则会循环调用，造成调用栈溢出
//         //:有啥用
//         // console.log(1);
//         // this.name=newName;

//         return "1" + newName;
//     }
// }

// const p = new Person("zhangsan");
// console.log(p.name);
// p.name='lisi'


// 6.静态成员: 直接添加在Person类身上的，就是静态成员
 class Person {
    constructor(a) {
        this.a = a;
    }
}
Person.a = 2
Person.b=3
const person = new Person(1);
console.log(person.a);
console.log(Person.a);
// Object.keys(Class)只能遍历到静态成员。
console.log(Object.keys(Person));  // ['a','b']


//7.私有属性

// class Girl {

//     name;
//     // 私有属性
//     #height;
//     #weight;

//     constructor(name, height, weight) {
//         this.name = name;
//         this.#height = height;
//         this.#weight = weight;
//     }

//     boyfirend() {
//         return `${this.name} ${this.#height} ${this.#weight}`;
//     }

// }

// const g = new Girl('xiaohong', 160, 100);
// console.log(g.name);
// //console.log(g.#height); //无法访问到
// console.log(g.boyfirend());



//8.多态
// class Father {
//     // 跳高
//     jump() { }
// }

// class Son1 extends Father {
//     jump() {
//         console.log("跳2米高");
//     }
// }

// class Son2 extends Father {
//     jump() {
//         console.log("跳1米高");
//     }
// }

// const zhangsan = new Son1();
// const lisi = new Son2();
// zhangsan.jump();
// lisi.jump();


