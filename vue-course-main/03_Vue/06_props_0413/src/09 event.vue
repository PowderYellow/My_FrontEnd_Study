
<script setup>

function clickHandler(text) {

  alert(text)
}
</script>

<template>
  <h1>hello vue</h1>
  <div @click.self="clickHandler('box1')" class="box1">1
    <div @click="clickHandler('box2')" class="box2">2
      <div @click="clickHandler('box3')" class="box3">3
      </div>
    </div>
  </div>
</template>


<style scoped>

.box1 {
  width: 300px;
  height: 300px;
  background-color: yellowgreen;
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: yellow;
}

.box3 {
  width: 100px;
  height: 100px;
  background-color: #bfa;
}
</style>
