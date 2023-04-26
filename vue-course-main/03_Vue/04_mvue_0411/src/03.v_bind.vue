<script setup>

import {ref} from "vue"

const imgPath = ref("/images/messi.png")
const changeImt = () => {
  imgPath.value = "/images/neymar.png"
}

const isDisable = "111"

const attrs = {
  id: "box1",
  class: "hello"
}

const attrName="title"
const attrValue="this is title"

</script>

<template>

  <img  :[attrName]="attrValue" v-bind:src="imgPath" alt="missi">
  <button @click="changeImt">click me</button>
  <div v-bind:about="attrs"></div>

  <input type="text" :disabled="isDisable">

</template>


