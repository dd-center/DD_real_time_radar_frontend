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
    export default {
        name: "DanmakuRating",
        data() {
            return {
                show: true,
                header: ["用户名", "同传条数"],
                tableData: [],
                rawData: [
                    {
                        "name": "空气龙",
                        "value": 2022,
                        "uid": 303030
                    },
                    {
                        "name": "2龙",
                        "value": 2024,
                        "uid": 23333
                    }
                ]
            }
        },
        methods: {
            calRating() {
                return this.rawData.slice().sort(function (a, b) {
                    return (b.value - a.value)
                })
            },
            updateData: async function () {
                this.calAnimation();
                this.tableData = this.calRating();
                await new Promise(resolve => setTimeout(resolve, 100));
                this.calAnimation();
            },
            calAnimation() {
                this.show = !this.show;
            }
        },
        watch: {
            rawData: {
                handler: function () {
                    this.updateData()
                },
                deep: true
            }
        },
        created() {
            this.updateData()
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