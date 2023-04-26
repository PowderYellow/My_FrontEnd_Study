<script setup>

import {computed} from "vue";

const props = defineProps(["hot", "MaxHot"]);

const width = computed(() => {
  console.log(props.hot, props.MaxHot)
  return (props.hot / props.MaxHot) * 100 + "%"
})
</script>

<template>
  <div class="hot-bar">
    <div class="inner">{{ props.hot }}
    </div>
  </div>
</template>


<style scoped>

.hot-bar {
  background-color: rgb(3, 37, 103);
  border-radius: 20px;
  /*padding: 2px 0;*/
  text-indent: 0.5em;
}

.inner {
  width: v-bind(width);
  border-radius: 20px;
  background-image: linear-gradient(90deg, rgb(187, 3, 52) 100%, rgb(66, 2, 12));
  white-space: nowrap;

}
</style>