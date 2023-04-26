

<script>

import MyButton from "../components/MyButton.vue";
// import {shallowReactive} from "vue";

export default {

  data() {
    return {
      msg: "123",
      stu: {
        name: "孙悟空",
        age: 18,
        gender: "male"
      },
      firstName: "悟空",
      lastName: "孙",
      arr: ["one", "two", "three"]
    }

  },
  methods: {
    updateAge() {
      this.stu.age === 18 ?
          this.stu.age = 17
          : this.stu.age = 18;
    },
    getInfo() {
      console.log("getinfo")
      return this.stu.age >= 18 ?
          "grown" :
          "teens";
    }
  },

  computed: {
    info() {
      console.log("info")
      return this.stu.age >= 18 ? "grown" : "teens";
    },

    // name(){
    //   return this.lastName+this.firstName;
    // }

    name: {
      get() {
        return this.lastName + this.firstName
      },
      set(value) {
        // console.log(value)
        this.lastName = value[0];
        this.firstName = value.slice(1);
      }

    }
  }
}
</script>


<template>
  <p> {{ msg }}</p>
  <h1> {{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
  <h2>评语: {{ info }}</h2>
  <h2> methods:{{ getInfo() }}</h2>
  <button @click="updateAge"> 减龄</button>
  <!--  <h3> {{ info }}</h3>-->
  <h3> {{ name }}</h3>
  <hr>

  <h2> {{arr[0]}}--{{ arr[1]}}--{{arr[2]}}</h2>
</template>
