<template>
  <div class="monitor_card">
    <h2 class="title">{{ title }}</h2>
    <chart ref="monitor" :options="options" :auto-resize="true"></chart>
  </div>
</template>

<script>

import mixin from '../mixin'
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/pie';
let dataIndex = -1;
let new_dataIndex = -1; // record the new position
let delay_time = 1000; // specific delay
export default {
  mixins: [mixin],

  data: () => ({
    title: '同传 man 雷达',
    options: {},
    stopped: false,
    timeout: null,
  }),

  created() {
    this.url = `https://api.huolonglive.com/processjson?uid=000000&chart_type=monitor`
  },

  watch: {
    data(value) {
      this.options = {
        tooltip: {
          trigger: 'item',
          // formatter: '{b} : {c}',
          formatter(data) {
            if (data.seriesIndex === 0) {

                if (data.dataIndex !== dataIndex){
                    new_dataIndex = data.dataIndex; // record the mouse position
                    delay_time = 2000; // if the mouse put in the pie chart, change delay here
                }
                let rez = '直播间:' + data.name + '<br>' + '同传人数:' + data.value + '人'
                // console.log(data.seriesIndex)
                return rez
              }
            else{
                delay_time = 2000;
                let rez = '同传man:' + data.name + '<br>' + '同传时间:' + data.value + '分钟'
                // console.log(data.seriesIndex)
                return rez
            }
          }
        },
        series: [
        {
            name: '直播间',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            itemStyle : {
                normal : {
                    label : {
                        show : false   //隐藏标示文字
                    },
                    labelLine : {
                        show : false   //隐藏标示线
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: value.room_value
        },
        {
          name: '正在同传: 同传时间',
          type: 'pie',
          radius: ['50%', '70%'],
          data: value.man_value,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },],
      }
    },
  },
  methods: {
    highlight() {
      try {
        const pie = this.$refs.monitor;
        if (typeof this.options.series != "undefined") {
          const dataLen = this.options.series[0].data.length;
          pie.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex
          });
          if (delay_time===1000){
            dataIndex = (dataIndex + 1) % dataLen;
            pie.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex
            });
            // 显示 tooltip
            pie.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex
            });
          }
        }
        if (this.stopped) return;
        this.timeout = setTimeout(this.highlight, delay_time);
        if(delay_time !== 1000){
            dataIndex = new_dataIndex;
            delay_time = 1000;
          }
        }
        catch (error) {
        // console.error(error);
        if (this.stopped) return;
        this.timeout = setTimeout(this.highlight, delay_time);
        if(delay_time !== 1000){
          dataIndex = new_dataIndex;
          delay_time = 1000;
        }
      }
    },
  },
  mounted () {
    this.highlight()
  },
  beforeDestroy() {
    this.stopped = true;
    clearTimeout(this.timeout)
  },
}

</script>

<style scoped>

</style>
