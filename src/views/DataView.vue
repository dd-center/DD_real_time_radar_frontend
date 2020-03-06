<template>
    <div class="container">
        <div class="level">
<!--            <danmaku-rating class="level-item has-text-centered"></danmaku-rating>-->
<!--            <line-chart class="level-item has-text-centered"></line-chart>-->
            <Pie-chart class="level-item has-text-centered"></Pie-chart>
        </div>
    </div>
</template>

<script>
    // const DanmakuRating = () => import("../components/DanmakuRating")
    // const LineChart = () => import("../components/Linechart")
    const PieChart = () => import("../components/pie")
    export default {
        name: 'DataView',
        components: {
            // DanmakuRating,
            // LineChart,
            PieChart
        }
    }
</script>
