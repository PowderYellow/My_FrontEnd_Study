<script setup>
import {ref} from "vue";
import {countStore} from "../store/count.js"
import {useStudentStore} from "../store/studentStore"
import {storeToRefs} from "pinia";

const stuStore = useStudentStore();
// const {name, age} = stuStore
//传响应式数据
const {name, age, title, skills} = storeToRefs(stuStore)

const clickHandler = () => {
  stuStore.$patch({
    name: "SXSSSSS",
    age: 20,
    skills: ["救命毫毛"]
  })

  //更新数据
  //  stuStore.$patch((state) => {
  //      state.skills.push("救命毫毛")
  //  })

  // stuStore.$state = {name: "SXS"}
}

//订阅数据
// stuStore.$subscribe((mutation, state) => {
//   // if (state.token) {
//   //
//   // } else {
//   //
//   // }
//   console.log(mutation.type)
//   console.log("changing,", state.name)
//
// }, {
//   detached: true
// })


// stuStore.$subscribe((mutation, state) => {
//
//   console.log("mutation.payload:", mutation.payload)
//
// })


stuStore.$onAction(({name, store, args, after, onError}) => {
  console.log("name:", name)
  console.log("store:", store)
  console.log("args:", args)
  console.log("after:", after)
  console.log("onError:", onError)


  after(() => {
    console.log("using after")
  })

  onError((err) => {
    console.log(name + "执行失败！", err)
  })

})

</script>

<template>
  <h4> ComponentC-
    -{{ name }}
    --{{ age }}
    --{{ title }}
    --{{ stuStore.double }}
    <hr/>
    <button @click="stuStore.growUp">growUp</button>
    <hr/>

    <!--    <button @click="$event => stuStore.name='New_Name'">修改Name-->
    <!--    </button>-->

    <!--    <button @click="$event=>stuStore.$reset()">修改Name-->
    <!--    </button>-->

    <button @click="clickHandler">修改Name-->
    </button>


  </h4>
</template>

<style scoped>

</style>