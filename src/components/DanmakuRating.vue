<template>
    <div>
        <table id="Rating" class="table">
            <tr>
                <th>排名</th>
                <th v-for="h in header" :key="h">{{h}}</th>
            </tr>
            <transition-group tag="tbody" name="component-fade">
                <tr v-for="(i, index) in tableData" :key="i.name" v-show="show" class="td">
                    <td>No.{{index + 1}}</td>
<!--                    <td><a>{{i.name}}</a></td>-->
                    <td><router-link :to="'user/' + i.uid">{{i.name}}</router-link></td>
                    <td>{{i.value}}</td>
                </tr>
            </transition-group>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "DanmakuRating",
        data() {
            return {
              show: true,
              header: ["用户名", "同传条数"],
              tableData: [],
              data_val: undefined,
              isStop: false
            }
        },
        methods: {
            uploadDate() {
                // initialize data
                const path = `http://localhost:5000/processjson?uid=000000&chart_type=ladder`;
                axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                axios.post(path, {})
                .then((response) => {
                console.log(response.data.data)
                this.tableData = response.data.data;
                if (this.isStop) return
                this.timeout = setTimeout(this.uploadDate, 3000)
                })
                .catch((error) => {
                // eslint-disable-next-line
                console.log(error);
                if (this.isStop) return
                this.timeout = setTimeout(this.uploadDate, 3000)
            });
        },
            moniter() {
                this.uploadDate()
            }
        },
        watch: {
        },
        created() {
            this.moniter()
        },
          destroyed() {
            this.isStop = true
        }
    }
</script>

<style scoped>
    #Rating {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .td {
        border-bottom: 1px solid #ebeef5;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .5s ease;
    }

    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active for below version 2.1.8 */
    {
        opacity: 0;
    }
</style>