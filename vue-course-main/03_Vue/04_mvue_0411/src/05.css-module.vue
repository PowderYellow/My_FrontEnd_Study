<script setup>


import my_box from "./components/MyBox.vue"
</script>

<template>
    <div class="app">
        <h1> 今天天气真不错</h1>
        <div :class="$style.box1"> box1 in App</div>
        <my_box></my_box>
    </div>
</template>

<style module>
.box1{
    background-color: #bda;
}

</style>



