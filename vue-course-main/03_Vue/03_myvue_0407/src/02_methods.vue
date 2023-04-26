
<script>

import MyButton from "../components/MyButton.vue";
// import {shallowReactive} from "vue";

export default {

  data() {
    return {
      msg: "good weather 0407"
    }
  },

  methods: {
    sum(a,b){
      console.log(this)
      return a+b;
    },
    test() {
      alert("hhh")
    },
    hello() {
      console.log("hello")
    },
    changeMeg(){
      this.msg="new message"
    }
  }
}
</script>

<template>
  <h1> {{ msg }}</h1>
  <h2>{{ sum(2, 5)}}</h2>
  <button @click="changeMeg"> press me</button>
</template>