<script setup xmlns="">
import {ref} from "vue";

const arr = ref(["孙悟空", "猪八戒", "沙和尚", "唐僧"])


const arr2 = ref([
  {
    id: 1,
    name: "孙悟空",
    age: 18
  },
  {
    id: 2,
    name: "猪八戒",
    age: 28
  },
  {
    id: 3,
    name: "沙和尚",
    age: 38
  }
])

</script>

<template>
  <button @click="arr2.unshift({ id: 4, name: '唐僧', age: 16 })">
    点我一下2
  </button>
<!--  <ul>-->
<!--    <li v-for="(name,index) in  arr">{{ name }}-{{ index }}</li>-->
<!--  </ul>-->

<!--  <div v-for="obj in arr2"> {{obj.name}}</div>-->

<!--  <template v-for="{name,age} in arr2"> {{name}} &#45;&#45; {{age}}</template>-->

  <ul>
    <li v-for="({ id, name, age }, index) in arr2"  :key="id">
      {{ name }} -- {{ age }}
      <input type="text" />
    </li>
  </ul>
</template>
