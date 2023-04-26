<!--<script setup>-->
<!--import {ref} from "vue";-->
<!--</script>-->
<!--<template>-->
<!--  <div class="xm-content">-->
<!--    <div class="xm-content__item" v-for="item in 100">{{ item }}</div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--@include b(content) {-->
<!--  flex: 1;-->
<!--  @include e(item) {-->
<!--    padding: 10px;-->
<!--    margin: 10px;-->
<!--    border: 1px solid #ccc;-->
<!--    border-radius: 20px;-->
<!--  }-->
<!--}-->
<!--</style>-->


<template>
  <header class="header">

  </header>

  <main class="main">
    <!--    <slot name="header"></slot>-->
    <div v-for="item in 100">
      <slot :data="item" name="item"></slot>
    </div>

  </main>

  <footer class="footer">
    <slot name="foot"></slot>
  </footer>
</template>

<script setup>

// const props = defineProps(["data"]);

</script>

<style scoped lang="less">
.header {
  height: 300px;
  background: red;
  color: red;
}

.main {
  height: 300px;
  background: green;
  color: #fff;
}

.footer {
  height: 300px;
  background: blue;
  color: #fff;
}
</style>