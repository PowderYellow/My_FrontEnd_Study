<script setup>

import Slotdemo from "./components/Slotdemo.vue";
import A from "./components/A.vue";

const name = "ZBJ"
</script>

<template>
  <h1> App组件</h1>

  <slotdemo>

    <template #s1="slotProps">
      {{ slotProps }}
      <A :name="slotProps.Name"></A>
    </template>

    <template v-slot:s2>
      s2
    </template>

  </slotdemo>
</template>
