<script setup>
import { ref, reactive } from "vue"
import TabItem from "./components/TabItem.vue"

// 创建一个变量来记录选项卡的状态
const current = ref(0) // 0 表示球员， 1 表示球队

const player = reactive({
    name: "梅西",
    img: "/images/messi.png",
    rate: 1,
    hot: 433760
})

const team = reactive({
    name: "法国队",
    img: "/images/法国.jpg",
    rate: 1,
    hot: 333760
})

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


// 获取最大热度
const playerMaxHot = players[0].hot
const teamMaxHot = teams[0].hot
</script>

<template>
    <!-- 选项卡的外部容器 -->
    <div class="tab-wrapper">
        <!-- 选项卡的头部 -->
        <header class="tab-head">
            <!-- 定义两个按钮 -->
            <div
                @click="current = 0"
                class="tab-button"
                :class="{ active: current === 0 }"
            >
                热门球员
            </div>
            <div
                @click="current = 1"
                class="tab-button"
                :class="{ active: current === 1 }"
            >
                热门球队
            </div>
        </header>
        <!-- 选项卡的主体 -->
        <div class="main">
            <!-- 
                current === 0 显示球员
                current === 1 显示球队
                    v-show 指令，用来设置一个内容是否显示
                        v-show是通过display来设置一个元素是否显示的
            -->
            <div v-show="current === 0">
                <!-- 球员 -->
                <div class="tab-list">
                    <!-- <TabItem :item="players[0]" :max-hot="maxHot"></TabItem>
                    <TabItem :item="players[1]" :max-hot="maxHot"></TabItem>
                    <TabItem :item="players[2]" :max-hot="maxHot"></TabItem> -->

                    <TabItem
                        v-for="player in players"
                        :item="player"
                        :max-hot="playerMaxHot"
                    ></TabItem>
                </div>
            </div>
            <div v-show="current === 1">
                <!-- 球队 -->
                <div class="tab-list">
                    <TabItem
                        v-for="team in teams"
                        :item="team"
                        :max-hot="teamMaxHot"
                    ></TabItem>
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
    border-radius: 10px;
    overflow: hidden;
}

.tab-button {
    background-color: #fff;
    font-size: 30px;
    padding: 10px 0;
    text-align: center;
    flex: auto;
    cursor: pointer;
    transition: 0.5s;
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
</style>
