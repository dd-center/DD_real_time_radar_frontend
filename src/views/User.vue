<template>
  <div class="container">
    <Profile/>
    <radar-chart/>
    <danmaku-chart/>
    <line-chart/>
    <pie-chart/>
  </div>
</template>

<script>

const Profile = () => import("../components/Profile");
const LineChart = () => import("../components/Linechart");
const PieChart = () => import("../components/Piechart");
const RadarChart = () => import("../components/radar");
const DanmakuChart = () => import("../components/danmaku_answer")

export default {
  components: {
    Profile,
    LineChart,
    PieChart,
    RadarChart,
    DanmakuChart
  },
}

</script>

<style scoped>

</style>