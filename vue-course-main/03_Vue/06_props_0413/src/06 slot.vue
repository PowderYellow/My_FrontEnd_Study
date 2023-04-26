<script setup>
import MyButton from "./components/MyButton.vue";
import A from "./components/A.vue"
import MyWrapper from "./components/MyWrapper.vue";

const name="father "
</script>

<template>
<!--  <h1>App组件</h1>-->

<!--  <MyButton>-->
<!--    <A :name="name"></A>-->
<!--  </MyButton>-->

<!--  <MyButton>-->
<!--    <A> </A>-->
<!--  </MyButton>-->

  <MyWrapper>
    <template v-slot:h1>12323333</template>
    <template #b>12323</template>
  </MyWrapper>


</template>
