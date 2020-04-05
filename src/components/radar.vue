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
        // 弹幕数： 破坏力
        {"???": "??????", "A":"你在同传榜排行前列", "B":"你在同传榜排行靠前", "C": "你在同传榜排行中上", "D": "你在同传榜排行中游", "E": "你在同传榜排行偏后"},
        // 最长高强度同传时间：持续力
        {},
        // 平均弹幕长度：字长
        {"???": "??????", "A":"你的同传强度极其规律", "B":"你的同传强度非常规律", "C": "你的同传强度相当规律", "D": "你的同传强度变化不小", "E": "你的同传强度变化很大"},
        // DD范围指数： 射程
        {"???": "??????", "A":"你就是同传DD之王", "B":"你去过很多直播间同传", "C": "你在各个直播间都同传过", "D": "你很少去其他直播间同传", "E": "你就是同传单推之王"},
        // 反摸鱼指数： 肝
        {"???": "??????", "A":"你就是人形同传打字机", "B":"你的手打速度飞快", "C": "你的同传弹幕长度适中", "D": "你的同传语言短小精悍", "E": "你的同传语言简练"},
        // 平均每分钟字数：攻速
        {"???": "??????", "A":"你作为同传man的未来一片光辉", "B":"你作为同传man的未来值得期待", "C": "你的面板发展潜力丰富", "D": "你已经是一个超级成熟都同传man了", "E": "你已经是一个无比成熟都同传man了"}
];

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
          formatter() {
            const ability_value = [];
            value.indicator.forEach((data_value) => {
                ability_value.push(data_value.name.charAt(data_value.name.length-1))
            });
            // console.log(ability_value);
            return '能力说明' + '<br>'
                    + '破坏力' + ability_value[0] + ': ' +story[0][ability_value[0]] +'<br>'
                    + '持续力' + ability_value[1] + ': ' + '最长高强度连续同传了 ' + value.others.primary_value[1] + ' 小时，这发生在 ' + value.others.longest_date + ' 的 ' + value.others.longest_room +'<br>'
                    + '字长' + ability_value[2] +': ' + '同传弹幕的平均长度是 ' + value.others.primary_value[2] +'<br>'
                    + '射程 ' + ability_value[3] +': ' + '你的DD指数是 ' + value.others.primary_value[3] + ' 它基本相当于你贡献了不少同传的房间数'+ '<br>'
                    + '肝 ' + ability_value[4] +': ' + '你的反摸鱼指数 ' + value.others.primary_value[4] + ' 与摸鱼的天数负相关' +'<br>'
                    + '攻速 ' + ability_value[5] +': ' + '你在高强度同传时平均每分钟敲出 '+ value.others.primary_value[5] +' 个字'+'<br>'
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
