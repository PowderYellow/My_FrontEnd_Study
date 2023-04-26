<script setup>
import C from "./components/C.vue"

function showMsg() {
  alert("hello")
}
</script>

<template>

  <h1>属性的透传</h1>

  <C class="box2" style="color: red;border: solid red 10px;" @click="showMsg"></C>
  <!-- <h2>我是组件C</h2> -->
</template>


<style >

.box2 {
  border: solid red 10px;
  font-size: 12px;
  font-weight: bold;
}

.box3 {
  font-size: 130px;
  background-color: #bbddaa;
}
</style>

