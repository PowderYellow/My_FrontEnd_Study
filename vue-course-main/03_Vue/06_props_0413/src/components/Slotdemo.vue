<script setup>

const Name = "XBK"
const Age = 18
const Gender = "male"

</script>

<template>

  <div>
    slotDemo组件
    <h1>
      <slot
          name="s1"
          :Gender="Gender"
          :Age="Age"
          :Name="Name"
      >
      </slot>
    </h1>

    <div>
      <slot name="s2"></slot>
    </div>

  </div>
</template>

<style scoped>

</style>