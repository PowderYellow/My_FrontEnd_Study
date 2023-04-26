<script setup>

import {ref} from "vue";

let te = ref("默认值")
let bool = ref(false);
const hobbies = ref([])
const gender = ref("女")
const friend = ref("")

function submitHandler() {
  console.log(te.value)
}

</script>

<template>
  <form @submit.prevent="submitHandler">

    <div>
      <input type="text"
             v-model="te"/>
    </div>
    <!--等价于-->
    <div>
      <input type="checkbox"
             v-model="bool"
             true-value="是"
             false-value="否"
      />
    </div>

    <div>爱好：
      <input v-model="hobbies" type="checkbox" name="hobby" value="篮球"/>篮球
      <input v-model="hobbies" type="checkbox" name="hobby" value="羽毛球"/>羽毛球
      <input v-model="hobbies" type="checkbox" name="hobby" value="乒乓球"/>乒乓球
    </div>

    <div>
      性别：
      <input v-model="gender" type="radio" name="gender" value="男"/>男
      <input v-model="gender" type="radio" name="gender" value="女"/>女
    </div>

    <div>
      <select  v-model="friend">
        <option disabled value="">请选择你的好朋友...</option>
        <option>SWK</option>
        <option>ZBJ</option>
        <option>SHS</option>
      </select>
    </div>
    <button>提交</button>
  </form>
</template>

<style scoped>

</style>
