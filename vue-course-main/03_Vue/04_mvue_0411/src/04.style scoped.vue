<script setup>


import my_box from "./components/MyBox.vue"
</script>

<template>
    <div class="app">
        <h1> 今天天气真不错</h1>
        <div class="box1"> box1 in App</div>
        <my_box></my_box>
    </div>
</template>

<style scoped>

:global(div){
    border: 2px red solid;
    padding: 10px;
}
.app :deep(h2) {
color: yellow;

}

h1 {
    background-color: aquamarine;
}

.box1 {
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
}
</style>

<!-- <style>

div{
    border: 1px red solid;
}</style> -->

