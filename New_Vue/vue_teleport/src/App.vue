<script setup lang="ts">
import MyModel from "@/conponents/MyModel.vue";
import {ref} from 'vue'

const open = ref(false)

</script>

<template>
  <transition name="out">
  <div  :class="[open === true ? 'active' : '']" >
    <h3>Tooltips with Vue 3 Teleport</h3>
    <button @click="open=!open">click me</button>
    <div>
      <MyModel></MyModel>
    </div>
  </div>
  </transition>
</template>

<style scoped>

.active {
  position: relative;
  top: 10px;
  left: 10px;
  transform-origin: top left;
  transform: translateX(30px);
  transition: 2s ease;
}

</style>
