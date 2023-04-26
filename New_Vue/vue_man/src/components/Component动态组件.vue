<script setup>

import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
import {reactive,shallowRef,markRaw,ref} from "vue";

const data = reactive([
  {
    name: 'A组件',
    com:markRaw(A)
  }, {
    name: 'B组件',
    com: markRaw(B)
  }, {
    name: 'C组件',
    com: markRaw(C)
  }
]);

const comId = shallowRef(A)

const active = ref(1)

const switchcom = (item, index) => {
  comId.value = item.com
  active.value = index
}

</script>

<template>

  <div style="display: flex">
    <div @click="switchcom(item,index)" :class="[active===index?'active':'']" class="tabs" v-for="(item,index) in data">
      <div> {{ item.name }}</div>
    </div>
  </div>

  <component :is="comId"></component>

</template>

<style scoped lang="less">
.tabs {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}

.active {
  background-color: skyblue;
}
</style>
