<script setup>
import {ref} from 'vue'

const open = ref(false)
</script>

<template>

  <button @click="open = true">Open Modal</button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped>

.active {
  background-color: blue;
  position: relative;
  transform-origin: top left;
  transform: translateY(30px);
  transition: 2s ease;
}

.modal {
  border: 2px solid red;
  padding: 10px;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
