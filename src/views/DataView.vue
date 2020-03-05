<template>
    <div class="container">
        <div class="level">
            <danmaku-rating class="level-item has-text-centered"></danmaku-rating>
            <line-chart class="level-item has-text-centered"></line-chart>
        </div>
    </div>
</template>

<script>
    const DanmakuRating = () => import("../components/DanmakuRating")
    const LineChart = () => import("../components/HelloWorld")
    export default {
        name: 'DataView',
        components: {
            DanmakuRating,
            LineChart
        }
    }
</script>
