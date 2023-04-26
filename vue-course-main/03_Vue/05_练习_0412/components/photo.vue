<script setup>
import {computed} from "vue";

const props = defineProps([
  "src",
  "alt",
  "rate"
])
const color = computed(() => {
  if (props.rate === 1) {
  return "rgb(254,45,70)"
  } else if (props.rate === 2) {
    return "rgb(254,102,1)"
  } else {
    return "rgb(247,169,1)"
  }
})

</script>

<template>
  <div class="photo">
    <img :src="props.src" :alt="props.alt">
    <span>{{ props.rate }}</span>
  </div>
</template>


<style scoped>
/*容器*/
.photo {
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
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
  background-color: v-bind(color);
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom-right-radius: 20px;
}

</style>