<script setup>
import {reactive} from "vue";

const msg = "i love vue";
const count = 0;

function func() {
  alert("hhhh")
}

const stu = reactive({
  name: "孙悟空"
})


</script>
<template>
  <h1 @click="func"> 组合式API</h1>
  <h2> {{ msg }}--{{ count }}</h2>
  <h2> {{ stu.name}}</h2>
</template>