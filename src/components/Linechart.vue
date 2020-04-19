<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <b-tabs content-class="mt-3">
      <!-- Render Tabs, supply a unique `key` to each tab -->
      <b-tab v-for="i in Object.keys(data)" :key="'dyn-tab-' + i" :title="i" v-on:click="onChange">
      </b-tab>
    </b-tabs>
    <chart :options="options" autoresize></chart>
  </div>
</template>

<script>

import mixin from '../mixin'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// let index = 0

export default {
  mixins: [mixin],

  data: () => ({
    title: '',
    options: {},
    keys: [],
    index: 0,
    value: []
  }),

  created() {
    this.once = true
    this.url = `https://api.huolonglive.com/processjson?uid=${this.$route.params.uid}&chart_type=bar`
  },

  watch: {
    data(value) {
      // console.log(value)
      this.value = value
      // console.log(this.$refs.b1)
      this.keys = Object.keys(this.value);
      this.update_chart()
      // index += 1
    },
  },
  methods: {
      onChange(value) {
        const target_value = value.target.innerText;
        this.index = this.keys.indexOf(target_value);
        // console.log(this.value)
        this.update_chart()
        // console.log(this.keys.indexOf(target_value));
      },

      update_chart() {
        const key = this.keys[this.index % this.keys.length]
        this.title = key + ' 同传弹幕统计'
        this.options = {
          xAxis: {
            type: 'category',
            data: this.value[key].x_axis,
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
          series: this.value[key].data,
        }
      }
    }
}

</script>

<style scoped>

</style>
