<script setup>
import {ref} from "vue";
import TabList from "./TabList.vue";

const current = ref(0)

</script>

<template>

  <div class="tab-wrapper">

    <header class="tab-head">
      <div @click="current = 0" class="tab-button" :class="{ active: current === 0 }">
        热门球员
      </div>

      <div @click="current = 1" class="tab-button" :class="{ active: current === 1 }">
        热门球队
      </div>
    </header>

    <div class="main">
      <div v-show="current===0">
        <slot name="0"></slot>
      </div>

      <div v-show="current===1">
        <slot name="1"></slot>
      </div>
    </div>

  </div>

</template>


<style scoped>

.tab-wrapper {
  box-sizing: border-box;
  width: 800px;
  padding: 20px;
  background-color: rgb(45, 83, 211);

}

.tab-head {
  display: flex;

  border-radius: 20px;
  overflow: hidden;
}

.tab-button {
  background-color: #fff;
  font-size: 30px;
  padding: 10px 0;
  text-align: center;
  flex: auto;
  cursor: pointer;
  transition: 0.2s;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);

}

.active {
  background-color: rgb(187, 3, 52);
  color: #fff;
}




.photo img {
  /*display: block; Q 下面有个缝：基线不同*/
  vertical-align: top;
  width: 100%;

}

.photo span {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: rgb(245, 102, 1);
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom-right-radius: 20px;
}

</style>