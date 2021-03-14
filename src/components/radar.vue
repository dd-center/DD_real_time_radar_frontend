<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <chart ref="radar" theme="light" :options="options" autoresize></chart>
    <div class="footer">
      <p v-for="(hint, index) in hints" :key="index">{{ hint }}</p>
    </div>
  </div>
</template>

<script>

import mixin from '../mixin'
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/radar';
import huolonglive_server from "@/components/server_location";
// write story comments~
const story = [
        // 弹幕数： 破坏力
        {"EX": "??????", "A":"你在同传榜排行前列", "B":"你在同传榜排行靠前", "C": "你在同传榜排行中上", "D": "你在同传榜排行中游", "E": "你在同传榜排行偏后"},
        // 最长高强度同传时间：持续力
        {},
        // 平均弹幕长度：字长
        {},
        // DD范围指数： 射程
        {},
        // 反摸鱼指数： 肝
        {},
        // 平均每分钟字数：攻速
        {}
];

export default {
  mixins: [mixin],

  data: () => ({
    title: '同传替身能力值',
    options: {},
  }),

  created() {
    // this.once = true
    this.url = `${huolonglive_server.address}/processjson?uid=${this.$route.params.uid}&chart_type=radar`
  },

  computed: {
    hints () {
      const ability_value = [];
      if (this.data.indicator){
        this.data.indicator.forEach((data_value) => {
        let target_value = data_value.name.charAt(data_value.name.length-1);
        if (target_value === 'X'){
          ability_value.push('EX')
        }
        else{
          ability_value.push(target_value)
        }
        });
        return [
        '破坏力 ' + ability_value[0] + ': ' +story[0][ability_value[0]],
        '持续力 ' + ability_value[1] + ': ' + '最长高强度连续同传了 ' + this.data.others.primary_value[1] + ' 小时，这发生在 ' + this.data.others.longest_date + ' 的 ' + this.data.others.longest_room,
        '字长 ' + ability_value[2] +': ' + '同传弹幕的平均长度是 ' + this.data.others.primary_value[2],
        '射程 ' + ability_value[3] +': ' + '你的DD指数是 ' + this.data.others.primary_value[3] + ' 它基本相当于你贡献了不少同传的房间数',
        '肝 ' + ability_value[4] +': ' + '你的反摸鱼指数 ' + this.data.others.primary_value[4] + ' 与摸鱼的天数负相关',
        '攻速 ' + ability_value[5] +': ' + '你在高强度同传时平均每分钟敲出 '+ this.data.others.primary_value[5] +' 个字',
        ]
      }
      return [
        '破坏力 ?' + ': ?',
        '持续力 ?' + ': ' + '最长高强度连续同传了 ?' + ' 小时，这发生在 ?' + ' 的 ?',
        '字长 ?' + ': ' + '同传弹幕的平均长度是 ?',
        '射程 ?' + ': ' + '你的DD指数是 ?' + ' 它基本相当于你贡献了不少同传的房间数',
        '肝 ?' + ': ' + '你的反摸鱼指数 ?' + ' 与摸鱼的天数负相关',
        '攻速 ?' + ': ' + '你在高强度同传时平均每分钟敲出 ?'+ ' 个字',
      ]
    },
  },

  watch: {
    data(value) {
      this.options = {
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
