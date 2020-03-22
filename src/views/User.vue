<template>
  <div class="container">
    <p>TODO: API 合并完成✅；需要有返回房间列表的接口</p>
    <Status-combination class="level-item has-text-centered"></Status-combination>
    <line-chart/>
    <pie-chart/>
    <radar-chart/>
  </div>
</template>

<script>

const StatusCombination = () => import("../components/status_combination");
const LineChart = () => import("../components/Linechart");
const PieChart = () => import("../components/Piechart");
const RadarChart = () => import("../components/radar");

export default {
  components: {
    StatusCombination,
    LineChart,
    PieChart,
    RadarChart,
  },
}

</script>

<style scoped>

</style>