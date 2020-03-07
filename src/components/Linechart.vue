<template>
  <div class="hello">
    <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
      <div>{{ $route.params.uid }}</div>
  </div>
</template>

<script>
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/bar';
let data_val = [
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, '', 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            data: [220, 191, '', 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            data: [150, 232, 201, 330, 410]
        },
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            data: [320, 332, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1320, 1320]
        }
    ]
export default {
  name: 'Linechart',
  data () {
    return {
      orgOptions: {},
    }
  },
  mounted() {
    for (let i = 0; i < 50; i++) {
        //此处使用let是关键，也可以使用闭包。原理不再赘述
        setTimeout(() => {
          let index_val = i%5
          this.orgOptions = {
        xAxis: {
            type: 'category',
            data: data_val[index_val].data
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
          trigger: 'axis',
        },
        series: [{
            'name': data_val[index_val].name,
            'data': data_val[index_val].data,
            'type': 'bar',
            'stack': '总量'
        },
        {
            'name': data_val[index_val+1].name,
            'data': data_val[index_val+1].data,
            'type': 'bar',
            'stack': '总量'
        }]
      }
        }, 1000 * i); //此处要理解为什么是1000*i
      }

    // this.refreshData();
  },
  methods: {
    //添加refreshData方法进行自动设置数据
    refreshData() {
      //横轴数据
      // let xData = this.orgOptions.xAxis.data;
        //系列值
      let  sData = this.orgOptions.series[0].data;
      console.log(sData)

    }
  }
}
</script>