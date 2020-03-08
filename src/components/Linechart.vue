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
var global_index = 0
export default {
  name: 'Linechart',
  data () {
    return {
      orgOptions: {},
      data_val: undefined,
      isStop: false
    }
  },
  created(){
      this.update_data()
      },
  mounted() {
  },
  methods: {
    update_data(){
      const path = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=bar`;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(path, {})
        .then((response) => {
          this.data_val = response.data.data
          console.log("start")
          const keys = Object.keys(this.data_val);
              let index_val = keys[global_index%keys.length]

              this.orgOptions = {
                title: {
                    text: index_val + " 同传弹幕统计",
                    x: 'center'
                 },
                  xAxis: {
                      type: 'category',
                      data: this.data_val[index_val].x_axis
                  },
                  yAxis: {
                      type: 'value'
                  },
                  tooltip: {
                    trigger: 'axis',
                    formatter: function(data){
                                // console.log(data);
                                var colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
                                let rez = '<p>' + data[0].axisValue + '</p>';
                                data.forEach(function(data_value) {
                                    if(!data_value.value == ""){
                                      // console.log(data_value);
                                      var xx = '<p>'   + colorSpan(data_value.color) + ' ' + data_value.seriesName + ': ' + data_value.value + '</p>'
                                      rez += xx;
                                    }
                                });
                                return rez
                            }
                  },
                series: this.data_val[index_val].data
              }
              global_index += 1
              console.log(global_index);
              if (this.isStop) return
              this.timeout = setTimeout(this.update_data, 1000)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          if (this.isStop) return
          this.timeout = setTimeout(this.update_data, 1000)
        });
    }
  },
      destroyed() {
        this.isStop = true
      }
}
</script>