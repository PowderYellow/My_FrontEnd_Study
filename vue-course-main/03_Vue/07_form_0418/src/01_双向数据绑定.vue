<script setup>

import {ref} from "vue";

let te = ref("默认值")

function submitHandler() {
  console.log(te.value)
}
</script>

<template>
  <form @submit.prevent="submitHandler">

    <div>
      <input type="text"
             @input="( e )=>(te=e.target.value)"
             :value="te"/>
    </div>

    <div>
      <input type="text"
             @input="( e )=>(te=e.target.value)"
             :value="te"/>
    </div>
    <button>提交</button>
  </form>

</template>

<style scoped>

</style>
