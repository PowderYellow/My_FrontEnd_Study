
<script setup>
import {ref} from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";

const count = ref(0)
const isShow = ref(true)
</script>

<template>
  <component is="h1"> i am component</component>
  <!--  <component :is="A"></component>-->
  <!--  <component :is="B"></component>-->
  <component :is="isShow?A :B"></component>
  <button @click="isShow=!isShow">change</button>
</template>
