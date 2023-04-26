<template>
  <div class="tab-list">
    <tabitem v-for="item in props.items" :item="item" :MaxHot="props.maxHot"></tabitem>
  </div>
</template>

<script setup>
import tabitem  from "./Tabitem.vue";

var props = defineProps(["items", "maxHot"]);


</script>

<style scoped>

.tab-list {
  margin: 20px;
}

</style>