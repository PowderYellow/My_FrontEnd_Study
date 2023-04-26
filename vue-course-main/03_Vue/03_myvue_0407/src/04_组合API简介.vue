<script>
import {reactive} from "vue";

export default {


    const stu = reactive({
      name: "swk",
      age: 18,
      gender: "male"
    })

}
</script>


<template>

  <h1> 演示组合式API</h1>
  <h2>{{ msg }}</h2>
  <h3>{{ count }}</h3>
  <button @click="changeAge">click me</button>
  <h2> {{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h2>
</template>


