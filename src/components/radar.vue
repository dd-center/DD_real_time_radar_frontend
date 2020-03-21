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
    title: '雷达图',
    options: {},
  }),

  created() {
    // this.once = true
    this.url = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=radar`
  },

  watch: {
    data() {
      this.options = {
        tooltip: {
          trigger: 'item'
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
        indicator: [
            { name: '破坏力', max: 1.0},
            { name: '速度', max: 1.0},
            { name: '射程距离', max: 1.0},
            { name: '持续力', max: 1.0},
            { name: '精密动作性', max: 1.0},
            { name: '成长性', max: 1.0}
        ]
    }, series: [{
        name: '同传替身能力值',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [0.4, 0.1, 0.2, 0.9, 1.0, 0.5]
            }
        ]
        }]
      }
    },
  },
}

</script>

<style scoped>

</style>
