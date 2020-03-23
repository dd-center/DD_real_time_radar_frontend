<template>
  <div class="container">
    <Profile/>
    <radar-chart/>
    <line-chart/>
    <pie-chart/>
  </div>
</template>

<script>

const Profile = () => import("../components/Profile");
const LineChart = () => import("../components/Linechart");
const PieChart = () => import("../components/Piechart");
const RadarChart = () => import("../components/radar");

export default {
  components: {
    Profile,
    LineChart,
    PieChart,
    RadarChart,
  },
}

</script>

<style scoped>

</style>