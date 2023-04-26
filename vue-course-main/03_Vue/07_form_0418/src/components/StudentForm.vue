<script setup>
import {inject, ref} from "vue";

const newStu = ref({});

// var emits = defineEmits(["addStudent"]);
const {addNewStudent} = inject("student");

const submitHandler = () => {
  //console.log(newStu.value)

  // emits("addStudent", Object.assign({}, newStu.value))
  //  emits("addStudent", {...newStu.value})

  addNewStudent({...newStu.value})

  newStu.value.name = ""
  newStu.value.age = 1
  newStu.value.gender = "男"
  newStu.value.address = ""
}

</script>

<template>
  <form @submit.prevent="submitHandler">
    <div>
      姓名 <input type="text" v-model="newStu.name">
    </div>

    <div>
      年龄 <input type="text" v-model="newStu.age">
    </div>

    <div>
      性别
      <input type="radio" name="gender" value="男" v-model="newStu.gender">男
      <input type="radio" name="gender" value="女" v-model="newStu.gender">女
    </div>

    <div>
      住址 <input v-model="newStu.address" type="text">
    </div>

    <div>
      <button>添加</button>
    </div>

  </form>
</template>

<style scoped>

</style>