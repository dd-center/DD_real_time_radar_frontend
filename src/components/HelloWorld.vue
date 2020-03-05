<template>
  <div class="hello">
    <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      orgOptions: {},
    }
  },
  mounted() {
    this.orgOptions = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    }
    this.refreshData();
  },
  methods: {
    //添加refreshData方法进行自动设置数据
    refreshData() {
      //横轴数据
      let xData = this.orgOptions.xAxis.data;
        //系列值
      let  sData = this.orgOptions.series[0].data;
      console.log(sData)
      for (let i = 0; i < 1000; i++) {
        //此处使用let是关键，也可以使用闭包。原理不再赘述
        setTimeout(() => {
          // this.option.xAxis.data.push(xData[i]);
          // this.option.series[0].data.push(sData[i]);
          this.orgOptions.xAxis.data.push(xData[i]);
          this.orgOptions.series[0].data.push(sData[i])
        }, 1000 * i); //此处要理解为什么是1000*i
      }
    }
  }
}
</script>