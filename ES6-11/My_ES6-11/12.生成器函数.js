
//声明
//->yield不执行,保留当前运行状态
//-> 截断-> 执行异步

// function* fn() {
//     // yield类似于断点
//     console.log(111);
//     yield '第一段'
//     console.log(222);
//     yield '第二段'
//     console.log(333);
//     yield '第三段'
//     console.log(444);
// }

// let iterator = fn()
// let iterator2 = fn()
// //console.log(iterator2 === iterator);
// console.log(iterator.next()); //{ value: '第一段', done: false }
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next()); //{ value: undefined, done: true }



//2.可以传参
// function* fn(arg) {
//     console.log(arg); // AAA
//     let one = yield ;
//     console.log(one); // BBB
//     let two = yield ;
//     console.log(two); // CCC
//     let three = yield ;
//     console.log(three); // DDD
// }

// 执行获取迭代器对象
// let iter = fn("AAA");
// iter.next();
//// 从第二次开始next的参数会成为yield的返回值

// iter.next("BBB");
// iter.next("CCC");
// iter.next('DDD');


//3.异步传参
// function getname() {
//     setTimeout(() => {
//         let name = 'zhangsan';
//         iterator.next(name); //函数代替人工
//     }, 1000)
// }

// function getdata() {
//     setTimeout(() => {
//         let data = 'data';
//         iterator.next(data);
//     }, 2000)
// }

// function gettime() {
//     setTimeout(() => {
//         let time = 'time';
//         iterator.next(time);
//     }, 3000)
// }

// function* fn() {
//     getname();
//     // 可以使用一个变量去接收yield的返回值，yield返回上一次调用iterator.next()的参数
//     let one = yield;
//     console.log(one);
//     getdata();
//     let two = yield;
//     console.log(two);
//     gettime();
//     let three = yield;
//     console.log(three);
// }

// let iterator = fn();
// iterator.next();

// 异步任务，回调地狱
// setTimeout(() => {
// 	console.log(111);
// 	setTimeout(() => {
// 		console.log(222);
// 		setTimeout(() => {
// 			console.log(333);
// 		},3000)
// 	},2000)
// },1000)


//写异步代码
function fn1() {
    setTimeout(() => {
        console.log(111);
        iterator.next();
    }, 1000)
}

function fn2() {
    setTimeout(() => {
        console.log(222);
        iterator.next();
    }, 1000)
}

function fn3() {
    setTimeout(() => {
        console.log(333);
        iterator.next();
    }, 1000)
}

function* fn() {
    fn1();
    yield;
    fn2();
    yield;
    fn3();
    yield;
}

let iterator = fn();
iterator.next();
