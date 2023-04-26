<script setup>
import {ref, reactive} from "vue"
import Tabitem from "../components/Tabitem.vue";
import TabList from "../components/TabList.vue";
import Tab from "../components/Tab.vue";

const current = ref(0)


const players = reactive([
  {
    name: "梅西",
    img: "/images/messi.png",
    rate: 1,
    hot: 433760
  },
  {
    name: "C罗",
    img: "/images/ronaldo.png",
    rate: 2,
    hot: 333760
  },
  {
    name: "内马尔",
    img: "/images/neymar.png",
    rate: 3,
    hot: 233760
  }
])

const teams = reactive([
  {
    name: "法国",
    img: "/images/法国.jpg",
    rate: 1,
    hot: 333760
  },
  {
    name: "巴西",
    img: "/images/巴西.jpg",
    rate: 2,
    hot: 233760
  },
  {
    name: "荷兰",
    img: "/images/荷兰.jpg",
    rate: 3,
    hot: 133760
  }
])


const player_maxHot = players[0].hot;
const team_maxHot = players[0].hot;

</script>

<template>

  <tab >
    <template #0>
    <tab-list :items="players" :max-hot="player_maxHot"></tab-list>
    </template>

    <template #1>
      <tab-list :items="teams" :max-hot="team_maxHot"></tab-list>
    </template>
  </tab>



</template>

<style scoped>

</style>
