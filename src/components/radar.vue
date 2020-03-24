<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <chart ref="radar" :options="options" :auto-resize="true"></chart>
  </div>
</template>

<script>

import mixin from '../mixin'
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/radar';

export default {
  mixins: [mixin],

  data: () => ({
    title: '同传替身能力值',
    options: {},
  }),

  created() {
    // this.once = true
    this.url = `https://api.huolonglive.com/processjson?uid=${this.$route.params.uid}&chart_type=radar`
  },

  watch: {
    data(value) {
      this.options = {
        tooltip: {
          trigger: 'item',
          formatter(data) {
            console.log(data)
          }
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: value.indicator,
        },
        series: [{
          name: '同传替身能力值',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: value.data,
        }],
      }
    },
  },
}

</script>

<style scoped>

</style>
