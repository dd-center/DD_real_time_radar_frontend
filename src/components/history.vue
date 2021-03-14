<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
import huolonglive_server from './server_location.js'

export default {
  data: () => ({
    title: '同传弹幕查询',
  }),

  created() {
    this.once = true
    this.url = `${huolonglive_server.address}/processjson?uid=${this.$route.params.uid}&chart_type=message`
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
