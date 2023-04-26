<script setup>

const msg = "hello"
const html = `<h2>我是一段html代码</h2>`
</script>

<template>
  <!--  <h1>{{ msg }}</h1>-->
  <!--  <h1>{{ Math.random() }}</h1>-->
  <!--  <h1>{{ new Date() }}</h1>-->
  <!--  <h1>{{ hello }}</h1>-->

  <!--  <h1>{{ alert(123)}}</h1>-->

  <div v-html="html"></div>
</template>


