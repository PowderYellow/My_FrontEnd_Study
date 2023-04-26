<script setup lang="ts">

import {reactive , ref} from 'vue';
import Tree from "./tree.vue";

interface Tree{
  name:string,
  checked:boolean,
  children?:Tree[]
}

const data = reactive<Tree[]>([
  {
    name: "no.1",
    children: [
      {
        name: "no.1-1",
        children: [
          {
            name: "no.1-1-1",
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    children: [
      {
        name: "no.2-1",
      },
    ],
  },
  {
    name: "no.3",
  },
]);


</script>

<template>



</template>

<style scoped lang="less">

</style>