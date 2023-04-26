<script setup>
import { ref, reactive, toRaw, toRef, watch } from "vue";

let message = ref({
  foo: {
    bar: {
      name: "小满",
    },
  },
});

watch(message, (newval, oldval) => {
    console.log(newval, oldval);
  },
  { deep: true }
);

let message2 = ref("DaMAN");

watch(message2, (newval, oldval) => {
  console.log(newval, oldval);
});

let message3 = reactive({
  foo: {
    bar: {
      name: "小满",
    },
  },
});

watch(
  () => message3.foo.bar.name,
  (newval, oldval) => {
    console.log(newval, oldval);
  }
);
</script>

<template>
  <div>
    case1:<input v-model="message.foo.bar.name" type="text" />
    <hr />
    case2:<input v-model="message2" type="text" />
    <hr />
  </div>

  <hr />
  {{ like }}
  <div>
    <button @click="change">change</button>
  </div>
</template>
