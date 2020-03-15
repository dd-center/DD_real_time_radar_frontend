<template>
    <div class="hello">
        <div type="tag info">{{ "danmaku_counts: " + danmaku_counts }}</div>
        <div type="tag info">{{ "rank: " + current_rank }}</div>
        <div type="tag info">{{ "is_working: " + is_working }}</div>
        <div type="tag info"><img :src="face" alt="头像不可用"/></div>
        <div type="tag info">{{ "sign: " + sign }}</div>
    </div>
</template>

<script>

    import mixin from '../mixin'
    export default {
        mixins: [mixin],

        data: () => ({
            title: '',
            options: {},
            danmaku_counts: -1,
            current_rank: -1,
            is_working: "",
            face: "",
            sign: ""
        }),

        created() {
            this.url = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=man_status`;
        },

        watch: {
            data(value) {
                console.log(value)
                this.danmaku_counts = value.danmaku_counts
                this.current_rank = value.current_rank
                this.is_working = value.is_working
                this.face = value.face
                this.sign = value.sign
            },
        },
    }

</script>

<style scoped>

</style>
