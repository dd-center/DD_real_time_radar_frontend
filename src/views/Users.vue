<template>
    <div class="container">
        <div class="level">
            <line-chart class="level-item has-text-centered"></line-chart>
            <Pie-chart class="level-item has-text-centered"></Pie-chart>
        </div>
         <div>{{ $route.params.uid }}</div>
    </div>
</template>

<script>
    const LineChart = () => import("../components/Linechart")
    const PieChart = () => import("../components/Piechart")
    export default {
        name: "Users",
        components:{
             LineChart,
            PieChart
        }
    }
</script>

<style scoped>

</style>