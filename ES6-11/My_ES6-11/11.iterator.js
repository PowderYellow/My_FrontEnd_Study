// for of 可以遍历使用迭代器
//->Array Arguments
//Set Map String
//TypeArray NodeList

//1.使用原生迭代器
// const arr = ['o', 'r', 'e', 'a'];
// for(let i of arr){
//     console.log(i); //o r e a
// }
// for (let i in arr) {
//     console.log(i); //0 1 2 3
// }

// let iterator = arr[Symbol.iterator]();
// console.log(iterator);//// Object [Array Iterator] {}
// console.log(iterator.next());// { value: 'o', done: false }
// console.log(iterator.next().value);'r'


//2.自定义迭代器iterator
let arr = ["zhangsan", "lisi", "wangwu", "zhaoliu"];
arr[Symbol.iterator] = function () {
    let index = 0;
    let lock = false;
    return {
        next: () => {
            if (index < this.length && !lock) {
                index++;
                return {
                    value: `自定义${this[index - 1]}`, done: lock
                };
            }
            else {
                lock = true;
                return {
                    value: undefined,
                    done: lock
                }

            }
        }
    }
}
for(let i of arr){
    console.log(i);
}

const iterator=arr[Symbol.iterator]();
console.log(iterator.next());