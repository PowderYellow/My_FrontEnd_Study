<script setup>
import MyBox from './components/Mybox.vue'
import {ref} from "vue";


const count = ref(10)
const obj = ref({
  count: 10
})


</script>

<template>

  <h1> 我是父组件 MyBox</h1>
  <!--  <MyBox :a="111" b="10"></MyBox>-->
  <MyBox :count="count" :obj="obj" max-length="123434"></MyBox>
  <button @click="obj.count++">click me</button>

</template>

<style scoped>

</style>
