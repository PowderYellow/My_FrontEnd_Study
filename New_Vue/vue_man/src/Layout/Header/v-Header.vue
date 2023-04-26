<script setup>
import {ref} from "vue";
</script>

<template>
  <div class="xm-header">
    <h1>header</h1>


  </div>

</template>

<style scoped lang="scss">
@include b(header) {

  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>
