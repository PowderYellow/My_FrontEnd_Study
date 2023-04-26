<script setup>

import {ref} from "vue";


const count = ref(0)
const isShow = ref(true)

</script>

<template>

  <!--  <h1> app组件</h1>-->

  <!--  <div v-if="isShow">-->
  <!--    <h2> 你猜我会变吗</h2>-->
  <!--  </div>-->
  <!--  -->
  <!--  <div v-else>-->
  <!--    <h2> i am in else</h2>-->
  <!--  </div>-->

  <button @click="isShow = !isShow">切换</button>

  <template v-if="isShow">
    <h2> i am h2</h2>
    <h3>i am h3</h3>'
  </template>

</template>

<style scoped>

</style>
