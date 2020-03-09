<template>
    <div class="hello">
        <tag type="danger">{{ header_value }}</tag>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "is_working",
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
                const path = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=isworking`;
                axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                axios.post(path, {})
                .then((response) => {
                console.log("is working")
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