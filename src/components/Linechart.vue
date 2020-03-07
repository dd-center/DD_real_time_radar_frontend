<template>
  <div class="hello">
    <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
      <div>{{ $route.params.uid }}</div>
  </div>
</template>

<script>
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title'; //引入标题组件
import axios from 'axios';
export default {
  name: 'Linechart',
  data () {
    return {
      orgOptions: {},
      data_val: undefined
    }
  },
  created(){
      const path = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=bar`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          self.data_val = response.data.data
          console.log(self.data_val)
          console.log("start")
          const keys = Object.keys(self.data_val);
          for (let i = 0; i < keys.length; i++) {
            console.log(self.data_val[keys[i]].x_axis)
          }
          // const x_axis_val = response.data.data.x_axis
          console.log(keys)
          for (let i = 0; i < 50; i++) {
            //此处使用let是关键，也可以使用闭包。原理不再赘述
            setTimeout(() => {
              let index_val = keys[i%keys.length]
              console.log(index_val)
              this.orgOptions = {
                title: {
                    text: index_val + " 同传弹幕统计",
                    x: 'center'
                 },
                  xAxis: {
                      type: 'category',
                      data: self.data_val[index_val].x_axis
                  },
                  yAxis: {
                      type: 'value'
                  },
                  tooltip: {
                    trigger: 'axis',
                    formatter: function(data){
                                console.log(data);
                                var colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
                                let rez = '<p>' + data[0].axisValue + '</p>';
                                data.forEach(function(data_value) {
                                    if(!data_value.value == ""){
                                      console.log(data_value);
                                      var xx = '<p>'   + colorSpan(data_value.color) + ' ' + data_value.seriesName + ': ' + data_value.value + '</p>'
                                      rez += xx;
                                    }
                                });
                                return rez
                            }
                  },
            series: self.data_val[index_val].data
          }
            }, 3000 * i); //此处要理解为什么是1000*i
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      },
  mounted() {
  },
  methods: {
  }
}
</script>