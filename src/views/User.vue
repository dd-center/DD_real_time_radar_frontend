<template>
  <div class="container">
    <p>TODO: API 合并完成✅；需要有返回房间列表的接口</p>
    <Status-combination class="level-item has-text-centered"></Status-combination>
    <line-chart/>
    <pie-chart/>
  </div>
</template>

<script>

const StatusCombination = () => import("../components/status_combination")
const LineChart = () => import("../components/Linechart")
const PieChart = () => import("../components/Piechart")

export default {
  components: {
    StatusCombination,
    LineChart,
    PieChart,
  },
}

</script>

<style scoped>

</style>