<script setup lang="ts">
import {axios} from "@/server/axios";
interface Data {
  data: {
    name: string,
    age: number,
    url: string,
    desc: string
  }
}

const data = await axios.get<Data>('./');

console.log(data)

</script>

<template>

<!--  <div class="sync">-->
<!--    <div class="sync-content">-->
<!--      <div><img :src="Data" alt=""></div>-->
<!--      <div class="sync-pop">-->
<!--        <div>{{ data.name }}</div>-->
<!--        <div>&nbsp;{{ data.age }}</div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <hr>-->
<!--    <div>{{ data.desc }}</div>-->
<!--  </div>-->

</template>

<style scoped>

</style>