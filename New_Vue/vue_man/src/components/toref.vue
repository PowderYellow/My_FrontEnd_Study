<script setup>
import { reactive, toRaw, toRef } from "vue";

const man = reactive({ name: "小满", age: 23, like: "JK" });

const like = toRef(man, 'like');

const raw=toRaw(man);

const change = () => {
    console.log(raw);
  like.value = "LLT";
  console.log(like);
};
</script>

<template>
  <div>
    {{ man }}
  </div>
  <hr />
  {{ like }}
  <div>
    <button @click="change">change</button>
  </div>
</template>

