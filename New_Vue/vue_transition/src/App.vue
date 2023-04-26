<script setup lang="ts">
import 'animate.css';
import {ref} from "vue";

const flag = ref<boolean>(true)

</script>

<template>
  <div class="content">
    <button @click="flag=!flag">switch</button>

    <transition leave-active-class="animate__animated animate__bounceInLeft"
                enter-active-class="animate__animated animate__bounceInRight"
                >
      <div v-if="flag" class="box"></div>
    </transition>

  </div>
</template>

<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background: red;
}

</style>
