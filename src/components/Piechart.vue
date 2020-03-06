<template>
  <div class="echarts">
      <chart ref="pie" :options="orgOptions" :auto-resize="true"></chart>
      <div>{{ $route.params.uid }}</div>
  </div>
</template>
<script>
import 'echarts/lib/component/title'; //引入标题组件
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/pie';
import axios from 'axios';
  export default {
    data () {
    return {
      orgOptions: {},
    }
    },
    mounted() {
      this.orgOptions = {
         title: {
    text: '饼图程序调用高亮示例',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
      }
      this.refreshData();
    },
    methods: {
       fetch_data() {
      const path = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=pie`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    //添加refreshData方法进行自动设置数据
    refreshData() {
        //系列值
      let sData = this.orgOptions.series[0].data;
      console.log(sData)
        console.log(sData)
        console.log(sData)

      for (let i = 0; i < 50; i++) {
        //此处使用let是关键，也可以使用闭包。原理不再赘述
        setTimeout(() => {
            this.fetch_data();
          this.orgOptions.series[0].data[i%5].value = sData[i%5].value + 200
        }, 1000 * i); //此处要理解为什么是1000*i
      }
    }

    }
  };
</script>
<style scoped>
  .echarts{
    width: 400px;
    height: 400px;
    margin: auto;
    text-align: center;
  }
</style>