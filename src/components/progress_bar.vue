<template>
  <div class="card">
<!--    <h2 class="title">服务器负载</h2>-->
    <b-container class="padding_for_server_info">
          <b-row>
            <b-col id="overhead1">
                <b-progress v-model="value_1" :value=value_1 :variant="find_suitable_color(value_1)" striped :animated="true">
                    <b-progress-bar :value="value_1">
                        <strong> {{this.danmaku_counter_1}} </strong>
                    </b-progress-bar>
                </b-progress>
            </b-col>
            <b-col id="overhead2">
                <b-progress v-model="value_2" :value=value_2 :variant="find_suitable_color(value_2)" striped :animated="true">
                    <b-progress-bar :value="value_2">
                        <strong> {{this.danmaku_counter_2}} </strong>
                    </b-progress-bar>
                </b-progress>
            </b-col>
            <b-col id="overhead3">
                <b-progress v-model="value_3" :value=value_3 :variant="find_suitable_color(value_3)" striped :animated="true">
                    <b-progress-bar :value="value_3">
                        <strong> {{this.danmaku_counter_3}} </strong>
                    </b-progress-bar>
                </b-progress>
            </b-col>
            <b-col id="overhead4">
                <b-progress v-model="value_4" :value=value_4 :variant="find_suitable_color(value_4)" striped :animated="true">
                    <b-progress-bar :value="value_4">
                        <strong> {{this.danmaku_counter_4}} </strong>
                    </b-progress-bar>
                </b-progress>
            </b-col>
          </b-row>
        <b-tooltip target="overhead1" triggers="hover" placement="bottom"><strong> 服务器 1 </strong> <br> 负载：{{description_list[Math.floor(value_1/25)]}} <br> 监听同传弹幕数：{{this.danmaku_counter_1}}</b-tooltip>
        <b-tooltip target="overhead2" triggers="hover" placement="bottom"><strong> 服务器 2 </strong> <br> 负载：{{description_list[Math.floor(value_2/25)]}} <br> 监听同传弹幕数：{{this.danmaku_counter_2}}</b-tooltip>
        <b-tooltip target="overhead3" triggers="hover" placement="bottom"><strong> 服务器 3 </strong> <br> 负载：{{description_list[Math.floor(value_3/25)]}} <br> 监听同传弹幕数：{{this.danmaku_counter_3}}</b-tooltip>
        <b-tooltip target="overhead4" triggers="hover" placement="bottom"><strong> 服务器 4 </strong> <br> 负载：{{description_list[Math.floor(value_4/25)]}} <br> 监听同传弹幕数：{{this.danmaku_counter_4}}</b-tooltip>
    </b-container>
  </div>
</template>

<script>
  import mixin from '../mixin'
  export default {
    mixins: [mixin],
    data: () => ({
      value_1: 0,
      value_2: 0,
      value_3: 0,
      value_4: 0,
      danmaku_counter_1: 0,
      danmaku_counter_2: 0,
      danmaku_counter_3: 0,
      danmaku_counter_4: 0,
      description_list : ["完全胜利", "余裕", "理解理解", "牙白"]
    }),
    created() {
      this.url = `https://api.huolonglive.com/processjson?uid=000000&chart_type=server`;
    },
    watch: {
    data(value) {
      this.value_1 = 100 * (value[0]['overhead']/17);
      this.value_2 = 100 * (value[1]['overhead']/17);
      this.value_3 = 100 * (value[2]['overhead']/17);
      this.value_4 = 100 * (value[3]['overhead']/17);

      this.danmaku_counter_1 = value[0]['recent danmaku'];
      this.danmaku_counter_2 = value[1]['recent danmaku'];
      this.danmaku_counter_3 = value[2]['recent danmaku'];
      this.danmaku_counter_4 = value[3]['recent danmaku'];
      console.log(value);
      },
    },
    methods: {
          find_suitable_color(value) {
            if(value < 25){
                return "success"
            }
            else if (value < 50){
                return "primary"
            }
            else if (value < 75){
                return "warning"
            }
            else{
                return "danger"
            }
        }
    }
  }
</script>