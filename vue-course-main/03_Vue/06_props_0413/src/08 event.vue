<script setup>

import {ref} from "vue";

let count = ref(0);

// function clickHanddler(e) {
//   console.log(e)
// }
//
// function clickHanddler2(...args) {
//   console.log(args)
// }

function boxHandler(e, t) {
  e.stopPropagation();
  console.log(t)
}

</script>

<template>
  <!--  <h1>{{ count }}</h1>-->
  <!--  <button @click="count++">click me</button>-->
  <!--  <hr>-->
  <!--  <button @click="clickHanddler">click me 方法</button>-->
  <!--  <hr>-->
  <!--  <button @click="clickHanddler2($event)">click me 内联</button>-->


  <div class="box1" @click.stop="boxHandler($event, 'box1')">
    box1
    <div class="box2" @click.stop="boxHandler($event, 'box2')">
      box2
      <div class="box3" @click.stop="boxHandler($event, 'box3')">box3</div>
    </div>
  </div>

</template>


<style scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: orange;
}

.box3 {
  width: 50px;
  height: 50px;
  background-color: tomato;
}
</style>
