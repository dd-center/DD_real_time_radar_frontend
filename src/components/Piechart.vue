<template>
  <div class="echarts">
      <chart ref="pie" :options="orgOptions" :auto-resize="true"></chart>
<!--      <div>{{ $route.params.uid }}</div>-->
  </div>
</template>
<script>
import 'echarts/lib/component/title'; //引入标题组件
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/pie';
import axios from 'axios';
  export default {
    data () {
    return {
      orgOptions: {},
        data_val: undefined,
        isStop: false
    }
    },
      created(){
          const path = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=pie`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          this.data_val = response.data.data
            // console.log("pie chart running")
            this.orgOptions = {
                 title: {
                    text: '同传man直播间弹幕比例',
                    x: 'center'
                 },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                      name: '访问来源',
                      type: 'pie',
                      radius: '55%',
                      center: ['50%', '60%'],
                      data: response.data.data,
                      itemStyle: {
                        emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      },
    mounted() {
      // this.refreshData();
        this.fetch_data()
    },
    methods: {
       fetch_data() {
      const path = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=pie`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          // console.log(response.data.data);
            console.log("pie chart");
          this.updateData(response.data.data);
          if (this.isStop) return
          setTimeout(this.fetch_data, 1000)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          if (this.isStop) return
          setTimeout(this.fetch_data, 1000)
        });
    },
    //添加refreshData方法进行自动设置数据
    // refreshData() {
    //   for (let i = 0; i < 50; i++) {
    //     //此处使用let是关键，也可以使用闭包。原理不再赘述
    //     setTimeout(() => {
    //         this.fetch_data();
    //         }, 1000 * i); //Do this every 1 seconds
    //     }
    //     },
        updateData(input_data){
           // iterate over input_data, and update
            this.orgOptions.series[0].data = input_data
            // console.log(input_data.data)
        }
    },
      destroyed() {
        this.isStop = true
      }
  };
</script>
<style scoped>
  .echarts{
    width: 400px;
    height: 400px;
    margin: auto;
    text-align: center;
  }
</style>