<template>
    <div class="container">
        <div class="level">
            <danmaku-rating class="level-item has-text-centered"></danmaku-rating>
        </div>
    </div>
</template>

<script>
    const DanmakuRating = () => import("../components/HelloWorld")

    export default {
        name: 'DataView',
        components: {
            DanmakuRating
        }
    }
</script>
