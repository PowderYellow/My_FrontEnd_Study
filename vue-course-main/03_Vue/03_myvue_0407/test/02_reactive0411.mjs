// import {reactive} from "vue";
//
// const stu = reactive({name: "SWK"})
//
// console.log(stu)

import {reactive, ref} from "vue";

let count = ref(0); // 包装好原始值，会包装到value中
// count=10;//改_变量_只会影响到变量自己，而无法实现对一个变量的代理
//console.log(count)
//RefImpl {
// __v_isShallow: false,
//     dep: undefined,
//     __v_isRef: true,
//     _rawValue: 0,
//     _value: 0
// }
// console.log(count.value)

const person = ref({name: "ZBJ", age: 18})

// console.log(person[name])//ReferenceError: name is not defined
console.log(person.value.name)
