<script setup>

import {ref} from "vue"

const msg = ref("hello")


const obj = ref({
  name: "SWK",
  age: 18
})

//obj2.name.value
const obj2 = {
  name: ref("SWK"),
  age: ref(18)
}


const changeMsgHandler = function () {
  msg.value = "hhhhhh"
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2> {{obj.name}}</h2>
<!--  //没有解包-->
  <h2> {{ obj2.name}}</h2>
  <h2> {{ obj2.name.value}}</h2>

  <h2> {{ obj.age+1}}</h2>
  <h2> {{ obj2.age+1}}</h2>

  <button @click="changeMsgHandler">press me</button>
</template>


