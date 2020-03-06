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
        data_val: undefined
    }
    },
      created(){
          const path = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=pie`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          // console.log(response.data);

          self.data_val = response.data.data
            console.log("test")
            console.log(self.data_val)
            this.orgOptions = {
         title: {
    text: '饼图程序调用高亮示例',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  // legend: {
  //   orient: 'vertical',
  //   left: 'left',
  //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  // },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: response.data.data,
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
          // this.updateData(response.data)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
 //        self.data_val = [{'name': '夏色祭Official', 'value': 0.4369617828403328},
 // {'name': '花丸晴琉Official', 'value': 0.1869639207436483},
 // {'name': '角卷绵芽Official', 'value': 0.09536759109606027},
 // {'name': 'hololive', 'value': 0.0817448711699462},
 // {'name': '犬山玉姬Official', 'value': 0.056791263671891704},
 // {'name': '天音彼方Official', 'value': 0.01871092981690996},
 // {'name': '赤井心Official', 'value': 0.013007003771261448},
 // {'name': '修女克蕾雅Official', 'value': 0.012168945671600947},
 // {'name': '癒月巧可Official', 'value': 0.011279577892369396},
 // {'name': '常暗永远Official', 'value': 0.010065248809187853},
 // {'name': '花园Serena', 'value': 0.01004814558266417},
 // {'name': '大神澪Official', 'value': 0.00931270684214577},
 // {'name': '宝钟玛琳Official', 'value': 0.008286513250724749},
 // {'name': '神楽Mea_Official', 'value': 0.007910242267203708},
 // {'name': '亚绮-罗森Official', 'value': 0.006080197029169553},
 // {'name': '奏手一弦Official', 'value': 0.004823109879678801},
 // {'name': '夜空梅露Official', 'value': 0.004002155006541984},
 // {'name': 'PPHOfficial', 'value': 0.0038824324208761984},
 // {'name': '桐生可可Official', 'value': 0.0033693356251656877},
 // {'name': '戌亥床Official', 'value': 0.0030956840007867483},
 // {'name': '宇森ひなこ王国運搬', 'value': 0.003061477547739381},
 // {'name': '戌神沁音Official', 'value': 0.0023687968735301916},
 // {'name': 'holostars', 'value': 0.00236024526026835},
 // {'name': '萝卜子Official', 'value': 0.00236024526026835},
 // {'name': '樱巫女Official', 'value': 0.0011031581107775982},
 // {'name': '润羽露西娅Official', 'value': 0.0008209548731368172},
 // {'name': '白上吹雪Official', 'value': 0.0008038516466131335},
 // {'name': '紫咲诗音Official', 'value': 0.0007354387405183988},
 // {'name': '鹰宫莉音Official', 'value': 0.0006755774476855059},
 // {'name': '白银诺艾尔Official', 'value': 0.0006157161548526129},
 // {'name': '兔田佩克拉Official', 'value': 0.0004788903426631434},
 // {'name': '物述有栖Official', 'value': 0.000333512917211832},
 // {'name': '皆守ひいろOfficial', 'value': 0.00016248065197499507},
 // {'name': '百鬼绫目Official', 'value': 0.00011117097240394401},
 // {'name': '时乃空Official', 'value': 9.406774588026031e-05},
 // {'name': '大空昴Official', 'value': 1.7103226523683693e-05},
 // {'name': '什么嘛哈', 'value': 1.7103226523683693e-05},
 // {'name': '郡道美玲Official', 'value': 8.551613261841847e-06}]
          console.log("original defined")
          console.log(self.data_val)
      },
    mounted() {
      this.refreshData();
    },
    methods: {
       fetch_data() {
      const path = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=pie`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          console.log(response.data.data);
          this.updateData(response.data.data)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    //添加refreshData方法进行自动设置数据
    refreshData() {
        //系列值
      // let sData = this.orgOptions.series[0].data;
      // console.log(sData)
      //   console.log(sData)
      //   console.log(sData)

      for (let i = 0; i < 50; i++) {
        //此处使用let是关键，也可以使用闭包。原理不再赘述
        setTimeout(() => {
            this.fetch_data();
          // this.orgOptions.series[0].data[i%5].value = sData[i%5].value + 200
        }, 1000 * i); //此处要理解为什么是1000*i
      }
    },
        updateData(input_data){
           // iterate over input_data, and update
            this.orgOptions.series[0].data = input_data
            console.log(input_data.data)
            // let sData = this.orgOptions.series[0].data;
            // this.orgOptions.series[0].data[0].value = sData[0].value + 200
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