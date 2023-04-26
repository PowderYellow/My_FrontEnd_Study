<script setup>
import ComponentC from "./ComponentC.vue";
import {ref} from "vue";

const isshow = ref(true);

</script>

<template>
  <h3>B组件</h3>
  <ul>
    <li v-if="isshow">
      <ComponentC></ComponentC>
    </li>
  </ul>
</template>

<style scoped>

</style>