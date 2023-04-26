<script setup>

// var props = defineProps(["count", "obj", "maxLength"]);

const props = defineProps({
  count: Number,
  obj: Object,
  maxLength: {
    type: String,
    required: true,//是否必须需要这个属性
    default: "haha",
    validator(value) {
      return value !== "xixi"
    }
  }

})

console.log(props)

</script>

<template>

  <div>
    <h1> {{ props.maxLength }}</h1>
    <h2> 我是子组件 MyBox:{{ props.obj.count }}</h2>
    <button @click="props.obj.count++">Mb button</button>
    <hr>
  </div>

</template>

<style scoped>
h2 {
  color: tomato;
}
</style>
