<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <chart ref="pie" :options="options" :auto-resize="true"></chart>
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
    title: '直播间弹幕比例',
    options: {},
    stopped: false,
    timeout: null,
  }),

  created() {
    this.once = true
    this.url = `https://api.huolonglive.com/processjson?uid=${this.$route.params.uid}&chart_type=pie`
  },
  watch: {
    data(value) {
      this.options = {
        tooltip: {
          trigger: 'item',
          formatter(data) {
            if (data.dataIndex !== dataIndex){
              new_dataIndex = data.dataIndex; // record the mouse position
              delay_time = 2000; // if the mouse put in the pie chart, change delay here
            }
            let rez = '直播间:' + data.name + '<br>' + '同传弹幕数:' + data.value + '<br>' + '占比:' + data.percent + '%'
            return rez

          }
        },
        series: [{
          name: '直播间：弹幕数（弹幕占比）',
          type: 'pie',
          radius: '55%',
          data: value.pie_data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        }],
      }
    },
  },
  methods: {
    highlight() {
      try {
        const pie = this.$refs.pie;
        if (typeof this.options.series != "undefined") {
          const dataLen = this.options.series[0].data.length;
          pie.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex
          });
          if (delay_time===1000){ // If the delay is sometime else, do not highlight current dataIndex
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
          if(delay_time !== 1000){ // Only when the delay time is not 1000, renew the dataIndex, begin at the new data Index
            dataIndex = new_dataIndex;
            delay_time = 1000; // recover the delay_time
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
