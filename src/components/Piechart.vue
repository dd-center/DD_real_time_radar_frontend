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

export default {
  mixins: [mixin],

  data: () => ({
    title: '直播间弹幕比例',
    options: {},
  }),

  created(){
    this.url = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=pie`
  },

  watch: {
    data(value) {
      this.options = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: value,
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
}

</script>

<style scoped>

</style>
