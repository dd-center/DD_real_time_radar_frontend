<template>
  <div class="container">
    <line-chart/>
    <Pie-chart class="level-item has-text-centered"></Pie-chart>
    <Rank-value class="level-item has-text-centered"></Rank-value>
    <Danmaku-value class="level-item has-text-centered"></Danmaku-value>
    <Working-value class="level-item has-text-centered"></Working-value>
  </div>
</template>

<script>

const LineChart = () => import("../components/Linechart")
const PieChart = () => import("../components/Piechart")
const RankValue = () => import("../components/rank")
const DanmakuValue = () => import("../components/total_danmaku")
const WorkingValue = () => import("../components/is_working")

export default {
  components: {
    LineChart,
    PieChart,
    RankValue,
    DanmakuValue,
    WorkingValue,
  },
}

</script>

<style scoped>

</style>