<template>
    <div class="hello">
        <div type="tag primary">{{ "弹幕总数: " + header_value }}</div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "danmaku_count",
        data() {
            return {
              show: true,
              header_value: -1,
              isStop: false
            }
        },
        created(){
            this.updateData()
         },
        methods: {
            updateData() {
                // initialize data
                const path = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=danmaku_counter`;
                axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                axios.post(path, {})
                .then((response) => {
                console.log("danmaku_counter")
                this.header_value = response.data.data;
                if (this.isStop) return;
                    this.timeout = setTimeout(this.updateData, 1000)
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.log(error);
                    if (this.isStop) return;
                    this.timeout = setTimeout(this.updateData, 1000)
                });
            },
        },
        destroyed() {
            this.isStop = true
        }
    }
</script>