<script>

import MyButton from "../components/MyButton.vue";
// import {shallowReactive} from "vue";

export default {

  data() {
    return {
      msg: "good weather 0407",
      stu: {
        name: "swk",
        age: 18,
        gender: "male",
        friend: {
          name: "f123"
        },
      },
      hello: null

    }

    // return shallowReactive(
    //     {
    //       msg: "大闸蟹今天没玩游戏",
    //       stu: {
    //         name: "swk",
    //         age: 18,
    //         gender: "male",
    //         friend: {
    //           name: "f123"
    //         }
    //       }
    //     }
    // )

  },

  components: {
    MyButton
  }
}
</script>
<template>
  <h1> {{ msg }}</h1>
  <h2> {{ stu.name }}--{{ stu.age }}--{{ stu.gender }}--{{ stu.friend.name }} </h2>

  <h2> {{ hello }}</h2>

  <hr/>
  <MyButton></MyButton>
  <MyButton></MyButton>
</template>