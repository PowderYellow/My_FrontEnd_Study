<script setup>
import {reactive, ref} from "vue";

const msg = "i love vue";

// const count = 0;

function func() {
  alert("hhhh")
}

const stu = reactive({
  name: "孙悟空"
})

let count = $ref(0)


function fn() {
  alert(count)
  count++;
}


</script>

<template>
  <h1 @click="func"> 组合式API</h1>
  <h2 @click="fn"> {{ msg }}--{{ count }}</h2>
  <h2> {{ stu.name }}</h2>
</template>