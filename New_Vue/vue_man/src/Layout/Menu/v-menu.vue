<script setup>

import {ref} from "vue";


</script>

<template>
  <div class="xm-menu">
    <h1>Menu</h1>
  </div>

</template>


<style scoped lang="scss">

@include b(menu) {
  @include bfc;
  min-width: 200px;
  border-right: 1px solid #ccc;
}

</style>