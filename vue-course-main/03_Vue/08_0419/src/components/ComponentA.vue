<script setup>
import { useCountStore } from "../store/countstore";

const countStore = useCountStore();

import {ref} from "vue";


// const count = ref(0);
// const increment = () => {
//   count.value++;
// }

</script>

<template>

  <!--  <h3> ComponentA&#45;&#45;{{ countStore.count }}-->
  <!--  <button @click="countStore.increment">-->
  <!--  click me-->
  <!--  </button>-->
  <!--    </h3>-->


  <h3>
    ComponentAA--{{ countStore.count}}-{{ countStore.double }}
    -{{ countStore.name }}
    <button @click="countStore.increment">
      click me
    </button>

  </h3>
</template>

<style scoped>

</style>