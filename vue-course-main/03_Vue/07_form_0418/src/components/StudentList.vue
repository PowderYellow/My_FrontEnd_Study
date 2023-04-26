<script setup>
import StudentItem from "./StudentItem.vue";
import {inject} from "vue";
// const props = defineProps(["students"]);
// const emits = defineEmits(["delStu"]);


</script>

<template>
  <table>
    <caption>
      学生列表
    </caption>
    <thead>
    <tr>
      <th>学号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
      <th>住宅</th>
      <th>删除</th>
    </tr>
    </thead>

    <!--    <StudentItem :students="props.students"-->
    <!--                 @delStu="$event=>emits('delStu',$event)">-->
    <!--    </StudentItem>-->

    <!--    <StudentItem :students="$attrs.students"-->
    <!--                 @delStu="$event=>$attrs.onDelStu">-->
    <!--    </StudentItem>-->

    <StudentItem>
    </StudentItem>

  </table>
</template>

<style scoped>

table {
  width: 50%;
  border-collapse: collapse;
  text-align: center;

}

caption {
  font-size: 30px;
  font-weight: bold;
}

th, td {
  border: 1px solid black;
  font-size: 24px;
}

</style>