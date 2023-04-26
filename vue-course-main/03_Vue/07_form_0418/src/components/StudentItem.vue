<script setup>


import {inject} from "vue";

// const {
//   students,
//   delStudentByIndex,
//   addNewStudent
// } = inject("students");
//
const { students, delStudentByIndex } = inject("student")


const delStuHandler = (index) => {
  if (confirm("do u want to delete")) {
    delStudentByIndex(index)
  }
}

</script>

<template>
  <tbody>
  <tr v-for="(stu,index) in students">
    <td>{{ stu.id }}</td>
    <td>{{ stu.name }}</td>
    <td>{{ stu.age }}</td>
    <td>{{ stu.gender }}</td>
    <td>{{ stu.address }}</td>
    <td>
      <!--        <a href="#" @click.prevent="$event => $emit('delStu',index)">删除</a>-->
      <!--        <a href="#" @click.prevent="$event => emits('delStu',index)">删除</a>-->
      <a href="#"
         @click.prevent="delStuHandler(index)"
      >删除</a>


    </td>
  </tr>
  </tbody>
</template>

<style scoped>
th, td {
  border: 1px solid black;
  font-size: 24px;
}
</style>