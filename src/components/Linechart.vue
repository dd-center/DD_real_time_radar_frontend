<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <chart ref="chart1" :options="options" :auto-resize="true"></chart>
    <b-tabs content-class="mt-3">
      <b-tab title="First" v-on:click="onChange"><p>I'm the first tab</p></b-tab>
      <b-tab title="Second" v-on:click="onChange"><p>I'm the second tab</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>

import mixin from '../mixin'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let index = 0

export default {
  mixins: [mixin],

  data: () => ({
    title: '',
    options: {},
  }),

  created() {
    this.once = true
    this.url = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=bar`
  },

  watch: {
    data(value) {
      // console.log(value)
      console.log(this.$refs.b1)
      const keys = Object.keys(value)
      const key = keys[index % keys.length]
      this.title = key + ' 同传弹幕统计'

      this.options = {
        xAxis: {
          type: 'category',
          data: value[key].x_axis,
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'axis',
          formatter(data) {
            var colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
            let rez = '<p>' + data[0].axisValue + '</p>';
            data.forEach((data_value) => {
              if (!data_value.value == "") {
                rez += '<p>'   + colorSpan(data_value.color) + ' ' + data_value.seriesName + ': ' + data_value.value + '</p>'
              }
            });
            return rez
          }
        },
        series: value[key].data,
      }
      index += 1
    },
  },
  methods: {
      onChange(value) {
         console.log(value.target.innerText);
      }
    }
}

</script>

<style scoped>

</style>
