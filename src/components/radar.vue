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

// write story comments~
const story = [
        // 破坏力
        {"A":"你在同传榜排行前列", "B":"你在同传榜排行靠前", "C": "你在同传榜排行中上", "D": "你在同传榜排行中游", "E": "你在同传榜排行偏后"},
        // 持续力
        {"A":"你从很早就开始同传了", "B":"你已经同传了很久", "C": "你已经同传有一段时间了", "D": "同传已经成为了你的习惯", "E": "你刚刚开始同传事业"},
        // 精密动作性
        {"A":"你的同传强度极其规律", "B":"你的同传强度非常规律", "C": "你的同传强度相当规律", "D": "你的同传强度变化不小", "E": "你的同传强度变化很大"},
        // 射程距离
        {"A":"你就是同传DD之王", "B":"你去过很多直播间同传", "C": "你在各个直播间都同传过", "D": "你很少去其他直播间同传", "E": "你就是同传单推之王"},
        // 速度
        {"A":"你就是人形同传打字机", "B":"你的手打速度飞快", "C": "你的同传弹幕长度适中", "D": "你的同传语言短小精悍", "E": "你的同传语言简练"},
        // 成长性
        {"A":"你作为同传man的未来一片光辉", "B":"你作为同传man的未来值得期待", "C": "你的面板发展潜力丰富", "D": "你已经是一个超级成熟都同传man了", "E": "你已经是一个无比成熟都同传man了"}
];

export default {
  mixins: [mixin],

  data: () => ({
    title: '同传替身能力值',
    options: {},
  }),

  created() {
    // this.once = true
    this.url = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=radar`
  },

  watch: {
    data(value) {
      this.options = {
        tooltip: {
          trigger: 'item',
          formatter() {
            const ability_value = [];
            value.indicator.forEach((data_value) => {
                ability_value.push(data_value.name.charAt(data_value.name.length-1))
            });
            // console.log(ability_value);
            return '能力说明' + '<br>'
                    + '破坏力 ' + ability_value[0] + ': ' +story[0][ability_value[0]] +'<br>'
                    + '持续力 ' + ability_value[1] + ': ' +story[1][ability_value[1]] +'<br>'
                    + '精密动作性 ' + ability_value[2] +': ' +story[2][ability_value[2]] +'<br>'
                    + '射程距离 ' + ability_value[3] +': ' +story[3][ability_value[3]] +'<br>'
                    + '速度 ' + ability_value[4] +': ' +story[4][ability_value[4]] +'<br>'
                    + '成长性 ' + ability_value[5] +': ' +story[5][ability_value[5]] +'<br>'
            // return value.indicator
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
