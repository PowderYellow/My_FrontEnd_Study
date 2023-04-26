<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
const str = ref("xiaoman");
const div = ref();

console.log("setup");
// console.log("div:", div);

const change = () => {
  console.log("changing.....");
  str.value = "new str";
};
onBeforeMount(() => {
  console.log("创建之前", div.value);
});

onMounted(() => {
  console.log("创建完成", div.value?.innerText);
});

onBeforeUpdate(() => {
  console.log("更新组件之前", div.value?.innerText);
});

onUpdated(() => {
  console.log("更新组件完成", div.value);
});

onBeforeUnmount(() => {
  console.log("销毁之前");
});

onUnmounted(() => {
  console.log("销毁完成");
});

onRenderTracked((e) => {
  console.log("onRenderTracked",e);
});

onRenderTriggered((e) => {
  console.log("onRenderTriggered",e);
});
</script>
<template>
  <div ref="div">{{ str }}</div>
  <h1>i am A</h1>
  <button @click="change">change</button>
</template>
