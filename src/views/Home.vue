<template>
    <div class="container">
        <div class="level">
            <monitor-chart/>
            <danmaku-rating class="level-item has-text-centered"></danmaku-rating>
        </div>
    </div>
</template>

<script>
    const DanmakuRating = () => import("../components/DanmakuRating")
    const MonitorChart = () => import("../components/monitor");

    export default {
        name: 'DataView',
        components: {
            DanmakuRating,
            MonitorChart,
        }
    }
</script>
