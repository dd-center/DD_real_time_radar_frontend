<template>
  <div class="container">
    <p>TODO: API 合并完成✅；需要有返回房间列表的接口</p>
    <line-chart/>
    <pie-chart/>
<!--    <Rank-value class="level-item has-text-centered"></Rank-value>-->
<!--    <Danmaku-value class="level-item has-text-centered"></Danmaku-value>-->
<!--    <Working-value class="level-item has-text-centered"></Working-value>-->
    <Status-combination class="level-item has-text-centered"></Status-combination>
  </div>
</template>

<script>

const LineChart = () => import("../components/Linechart")
const PieChart = () => import("../components/Piechart")
// const RankValue = () => import("../components/rank")
// const DanmakuValue = () => import("../components/total_danmaku")
// const WorkingValue = () => import("../components/is_working")
const StatusCombination = () => import("../components/status_combination")

export default {
  components: {
    LineChart,
    PieChart,
    // RankValue,
    // DanmakuValue,
    // WorkingValue,
    StatusCombination,
  },
}

</script>

<style scoped>

</style>