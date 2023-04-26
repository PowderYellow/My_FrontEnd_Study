<script setup>
import { ref } from "vue";
import A from "./components/AppButton.vue";
const flag = ref(true);
</script>
<template>
    <h1>
  <div class="xm-test">
    xm-test
    <div class="xm-test__inner">xm-test__inner</div>
    <div class="xm-test--success">xm-test--success</div>
  </div>
  </h1>
</template>

<style lang="scss">

@include b(test) {
  color: red;

  @include e(inner) {
    color: blue;
  }

  @include m(success){
    color: green;
  }

}
</style>
