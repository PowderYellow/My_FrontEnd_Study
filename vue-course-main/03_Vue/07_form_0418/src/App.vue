<script setup>
import StudentList from "./components/StudentList.vue";
import {ref, provide} from "vue";
import StudentForm from "./components/StudentForm.vue";


provide("name", "zbj")

const STU_ARR = ref([
  {
    id: 1,
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山"
  },
  {
    id: 2,
    name: "猪八戒",
    age: 28,
    gender: "男",
    address: "高老庄"
  },
  {
    id: 3,
    name: "沙和尚",
    age: 38,
    gender: "男",
    address: "流沙河"
  },
  {
    id: 4,
    name: "唐僧",
    age: 16,
    gender: "男",
    address: "女儿国"
  }
])


const delStudentByIndex = (index) => {
  STU_ARR.value.splice(index, 1)
}

const addNewStudent = (stu) => {
  const lastid = STU_ARR.value.at(-1)?.id;
  stu.id = !isNaN(lastid) ? lastid + 1 : 1;
  STU_ARR.value.push(stu)
}

provide("student", {
  students: STU_ARR,
  delStudentByIndex,
  addNewStudent
})

</script>
<template>
  <!--  <StudentList :students="STU_ARR"-->
  <!--               @delStu="delStudentByIndex">-->
  <!--  </StudentList>-->
  <!--  <hr/>-->
  <!--  <StudentForm @addStudent="addNewStudent"></StudentForm>-->

  <StudentList>
  </StudentList>
  <hr/>
  <StudentForm></StudentForm>
</template>

<style scoped>

</style>
