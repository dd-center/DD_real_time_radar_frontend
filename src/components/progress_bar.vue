<template>
  <div class="card">
<!--    <h2 class="title">服务器负载</h2>-->
    <b-container class="padding_for_server_info">
          <b-row>
            <b-col id="overhead1">
                <strong>服务器 1</strong>
                <b-progress v-model="value_1" :value="value_1" :variant="find_suitable_color(value_1)" striped :animated="true">
                </b-progress>
                <strong></strong>
                <div>监听弹幕<br>{{this.danmaku_counter_1}}</div>
            </b-col>
            <b-col id="overhead2">
                <strong>服务器 2</strong>
                <b-progress v-model="value_2" :value=value_2 :variant="find_suitable_color(value_2)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_2}}</div>
            </b-col>
            <b-col id="overhead3">
                <strong>服务器 3</strong>
                <b-progress v-model="value_3" :value=value_3 :variant="find_suitable_color(value_3)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_3}}</div>
            </b-col>
            <b-col id="overhead4">
                <strong>服务器 4</strong>
                <b-progress v-model="value_4" :value=value_4 :variant="find_suitable_color(value_4)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_4}}</div>
            </b-col>
            <b-col id="overhead5">
                <strong>服务器 5</strong>
                <b-progress v-model="value_5" :value=value_5 :variant="find_suitable_color(value_5)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_5}}</div>
            </b-col>
            <b-col id="overhead6">
                <strong>服务器 6</strong>
                <b-progress v-model="value_6" :value=value_6 :variant="find_suitable_color(value_6)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_6}}</div>
            </b-col>
            <b-col id="overhead7">
                <strong>服务器 7</strong>
                <b-progress v-model="value_7" :value=value_7 :variant="find_suitable_color(value_7)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_7}}</div>
            </b-col>
            <b-col id="overhead8">
                <strong>服务器 8</strong>
                <b-progress v-model="value_8" :value=value_8 :variant="find_suitable_color(value_8)" striped :animated="true">
                </b-progress>
                <div>监听弹幕<br>{{this.danmaku_counter_8}}</div>
            </b-col>
          </b-row>
        <b-tooltip target="overhead1" triggers="hover" placement="bottom"><strong> 服务器 1 </strong> <br> 负载：{{description_list[Math.floor(value_1/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_1}}</b-tooltip>
        <b-tooltip target="overhead2" triggers="hover" placement="bottom"><strong> 服务器 2 </strong> <br> 负载：{{description_list[Math.floor(value_2/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_2}}</b-tooltip>
        <b-tooltip target="overhead3" triggers="hover" placement="bottom"><strong> 服务器 3 </strong> <br> 负载：{{description_list[Math.floor(value_3/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_3}}</b-tooltip>
        <b-tooltip target="overhead4" triggers="hover" placement="bottom"><strong> 服务器 4 </strong> <br> 负载：{{description_list[Math.floor(value_4/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_4}}</b-tooltip>
        <b-tooltip target="overhead5" triggers="hover" placement="bottom"><strong> 服务器 5 </strong> <br> 负载：{{description_list[Math.floor(value_5/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_5}}</b-tooltip>
        <b-tooltip target="overhead6" triggers="hover" placement="bottom"><strong> 服务器 6 </strong> <br> 负载：{{description_list[Math.floor(value_6/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_6}}</b-tooltip>
        <b-tooltip target="overhead7" triggers="hover" placement="bottom"><strong> 服务器 7 </strong> <br> 负载：{{description_list[Math.floor(value_7/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_7}}</b-tooltip>
        <b-tooltip target="overhead8" triggers="hover" placement="bottom"><strong> 服务器 8 </strong> <br> 负载：{{description_list[Math.floor(value_8/25)]}} <br> 监听弹幕数：{{this.danmaku_counter_8}}</b-tooltip>
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
      value_5: 0,
      value_6: 0,
      value_7: 0,
      value_8: 0,
      danmaku_counter_1: 0,
      danmaku_counter_2: 0,
      danmaku_counter_3: 0,
      danmaku_counter_4: 0,
      danmaku_counter_5: 0,
      danmaku_counter_6: 0,
      danmaku_counter_7: 0,
      danmaku_counter_8: 0,
      description_list : ["完全胜利", "余裕余裕", "理解理解", "牙白呦", "全部木大"]
    }),
    created() {
      this.stopped = false
      this.url = `https://api.huolonglive.com/processjson?uid=000000&chart_type=server`;
    },
    watch: {
    data(value) {
      this.value_1 = 100 * (value[0]['overhead']/17);
      this.value_2 = 100 * (value[1]['overhead']/17);
      this.value_3 = 100 * (value[2]['overhead']/17);
      this.value_4 = 100 * (value[3]['overhead']/17);
      this.value_5 = 100 * (value[4]['overhead']/17);
      this.value_6 = 100 * (value[5]['overhead']/17);
      this.value_7 = 100 * (value[6]['overhead']/17);
      this.value_8 = 100 * (value[7]['overhead']/17);

      this.danmaku_counter_1 = value[0]['recent danmaku'];
      this.danmaku_counter_2 = value[1]['recent danmaku'];
      this.danmaku_counter_3 = value[2]['recent danmaku'];
      this.danmaku_counter_4 = value[3]['recent danmaku'];
      this.danmaku_counter_5 = value[4]['recent danmaku'];
      this.danmaku_counter_6 = value[5]['recent danmaku'];
      this.danmaku_counter_7 = value[6]['recent danmaku'];
      this.danmaku_counter_8 = value[7]['recent danmaku'];
      },
    },
    methods: {
          find_suitable_color(value) {
            // console.log(value)
            if(value < 25){
                return "success"
            }
            else if (value < 50){
                return "primary"
            }
            else if (value < 75){
                return "warning"
            }
            else if (value < 100){
                return "danger"
            }
            else{
                return "dark"
            }
        }
    }
  }
</script>