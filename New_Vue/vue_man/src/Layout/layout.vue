<script setup lang="ts">
import VContent from "./Content/v-content.vue";
import VHeader from "./Header/v-Header.vue";
import VMenu from "./Menu/v-menu.vue";

</script>

<template>

  <div class="xm-box">
    <div>
      <v-menu></v-menu>
    </div>

    <div class="xm-box__right">

      <v-header>
      </v-header>

      <vContent>

        <template #foot>
          <div>
            footer
          </div>
        </template>

        <template #item="data">
          <div>
            {{data}}
          </div>
        </template>
      </vContent>

    </div>

  </div>

</template>

<style scoped lang="scss">

@include b(box) {
  @include bfc;
  display: flex;

  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 120vh;
  }

}

</style>
