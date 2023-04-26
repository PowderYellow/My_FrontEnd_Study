<script setup>

import Photo from "./photo.vue";
import Hotbar from "./hotbar.vue";

const props = defineProps(["item","MaxHot"])

//console.log(props.item.name)//从父组件收到数据

// const item = reactive({
//       img: "/images/messi.png",
//       name: "梅西",
//       rate: 1
// //     hot: 433760
//     }
// )

</script>
<template>

  <div class="tab-item">
    <photo :src="props.item.img" :alt="props.item.name" :rate="props.item.rate"></photo>

    <div class="desc">

      <span class="name">{{ props.item.name }} </span>

      <Hotbar :hot="props.item.hot" :MaxHot="props.MaxHot"></Hotbar>

    </div>
  </div>
</template>


<style scoped>

.tab-item {
  display: flex;
  margin-bottom: 20px;
}

.desc {
  font-size: 30px;
  color: #fff;
  /*background-color: #bfa;*/

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  flex: auto; /*自动撑满*/

  margin-left: 30px
}


</style>