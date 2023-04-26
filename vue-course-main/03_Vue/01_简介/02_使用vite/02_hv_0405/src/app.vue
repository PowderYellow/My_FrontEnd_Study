<template>
  <h1> {{ msg }}</h1>
  <MyButton></MyButton>

</template>

<script>
import MyButton from "./components/MyButton.vue";

export default {
  data() {
    return {
      msg: "i love vue 1436!"
    }
  },

  components: {
    MyButton
  }
}
</script>

<style scoped>

</style>