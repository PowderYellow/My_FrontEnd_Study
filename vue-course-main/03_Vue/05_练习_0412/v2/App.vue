<script setup>
import {ref, reactive} from "vue"
import Tabitem from "../components/Tabitem.vue";

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


const maxHot = players[0].hot;

</script>

<template>
  <div class="tab-wrapper">

    <header class="tab-head">
      <div @click="current = 0" class="tab-button" :class="{ active: current === 0 }">
        热门球员
      </div>

      <div @click="current = 1" class="tab-button" :class="{ active: current === 1 }">
        热门球队
      </div>

    </header>

    <div class="main">
      <div v-show="current===0">
        <div class="tab-list">
          <tabitem v-for="player in players" :item="player" :MaxHot="maxHot"></tabitem>

        </div>
      </div>

      <div v-show="current===1">
        <div class="tab-list">
          <tabitem v-for="team in teams" :item="team" :MaxHot="maxHot"></tabitem>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.tab-wrapper {
  box-sizing: border-box;
  width: 800px;
  padding: 20px;
  background-color: rgb(45, 83, 211);

}

.tab-head {
  display: flex;

  border-radius: 20px;
  overflow: hidden;
}

.tab-button {
  background-color: #fff;
  font-size: 30px;
  padding: 10px 0;
  text-align: center;
  flex: auto;
  cursor: pointer;
  transition: 0.2s;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);

}

.active {
  background-color: rgb(187, 3, 52);
  color: #fff;
}

.tab-list {
  margin: 20px;
}

.tab-item {
  display: flex;
  margin-bottom: 20px;
}

/*容器*/
.photo {
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.photo img {
  /*display: block; Q 下面有个缝：基线不同*/
  vertical-align: top;
  width: 100%;

}

.photo span {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: rgb(245, 102, 1);
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom-right-radius: 20px;
}

.desc {
  font-size: 30px;
  color: #fff;
  /*background-color: #bfa;*/

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  flex: auto; /*自动撑满*/

  margin-left: 30px
}

.hot-bar {
  background-color: rgb(3, 37, 103);
  border-radius: 20px;
  /*padding: 2px 0;*/
  text-indent: 0.5em;

}

.inner {
  border-radius: 20px;
  background-image: linear-gradient(90deg, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
  width: 10%;
  white-space: nowrap;

}

</style>
