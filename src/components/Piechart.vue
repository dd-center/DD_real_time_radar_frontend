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
          formatter: '{a} <br/>{b} : {c} ({d}%)',
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
        if (this.stopped) return;
        this.timeout = setTimeout(this.highlight, 1000)
        }
        catch (error) {
        // console.error(error);
        if (this.stopped) return;
        this.timeout = setTimeout(this.highlight, 1000)
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
