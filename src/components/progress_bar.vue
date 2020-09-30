<template>
  <div class="card">
    <b-icon-question-circle-fill class="icon_val" v-b-popover.hover.bottomright="info"></b-icon-question-circle-fill>
    <div>
        <h2 class="title">分布式服务器</h2>
    </div>
    <b-container class="padding_for_server_info">
          <b-row>
            <b-col>
                <strong>服务器负载</strong>
            </b-col>

            <b-col id="overhead1">
                <b-progress v-model="value_1" :value="value_1" :variant="find_suitable_color(value_1)" striped :animated="true">
                </b-progress>
            </b-col>
            <b-col id="overhead2">
                <b-progress v-model="value_2" :value=value_2 :variant="find_suitable_color(value_2)" striped :animated="true">
                </b-progress>
            </b-col>
            <b-col id="overhead3">
                <b-progress v-model="value_3" :value=value_3 :variant="find_suitable_color(value_3)" striped :animated="true">
                </b-progress>
            </b-col>
            <b-col id="overhead4">
                <b-progress v-model="value_4" :value=value_4 :variant="find_suitable_color(value_4)" striped :animated="true">
                </b-progress>
            </b-col>
<!--            <b-col id="overhead5">-->
<!--                <b-progress v-model="value_5" :value=value_5 :variant="find_suitable_color(value_5)" striped :animated="true">-->
<!--                </b-progress>-->
<!--            </b-col>-->
<!--            <b-col id="overhead6">-->
<!--                <b-progress v-model="value_6" :value=value_6 :variant="find_suitable_color(value_6)" striped :animated="true">-->
<!--                </b-progress>-->
<!--            </b-col>-->
<!--            <b-col id="overhead7">-->
<!--                <b-progress v-model="value_7" :value=value_7 :variant="find_suitable_color(value_7)" striped :animated="true">-->
<!--                </b-progress>-->
<!--            </b-col>-->
<!--            <b-col id="overhead8">-->
<!--                <b-progress v-model="value_8" :value=value_8 :variant="find_suitable_color(value_8)" striped :animated="true">-->
<!--                </b-progress>-->
<!--            </b-col>-->
          </b-row>
          <b-row>
            <b-col>
                <strong>处理同传弹幕数</strong>
            </b-col>
            <b-col>
                <div>{{this.danmaku_counter_1}}</div>
            </b-col>
            <b-col>
                <div>{{this.danmaku_counter_2}}</div>
            </b-col>
            <b-col>
                <div>{{this.danmaku_counter_3}}</div>
            </b-col>
            <b-col>
                <div>{{this.danmaku_counter_4}}</div>
            </b-col>
<!--            <b-col>-->
<!--                <div>{{this.danmaku_counter_5}}</div>-->
<!--            </b-col>-->
<!--            <b-col>-->
<!--                <div>{{this.danmaku_counter_6}}</div>-->
<!--            </b-col>-->
<!--            <b-col>-->
<!--                <div>{{this.danmaku_counter_7}}</div>-->
<!--            </b-col>-->
<!--            <b-col>-->
<!--                <div>{{this.danmaku_counter_8}}</div>-->
<!--            </b-col>-->
          </b-row>
        <b-tooltip target="overhead1" triggers="hover" placement="bottom">
            <strong> 服务器 1 </strong> <br>
            负载：{{description_list[Math.floor(value_1/25)]}}
            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_1" :key="value"> {{value}} <br> </div>
            <strong> log </strong>：<div v-for="value in this.event_log_1" :key="value"> {{value}} <br> </div>
        </b-tooltip>

        <b-tooltip target="overhead2" triggers="hover" placement="bottom">
            <strong> 服务器 2 </strong> <br>
            负载：{{description_list[Math.floor(value_2/25)]}}
            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_2" :key="value"> {{value}} <br> </div>
            <strong> log </strong>：<div v-for="value in this.event_log_2" :key="value"> {{value}} <br> </div>
        </b-tooltip>

        <b-tooltip target="overhead3" triggers="hover" placement="bottom">
            <strong> 服务器 3 </strong> <br>
            负载：{{description_list[Math.floor(value_3/25)]}}
            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_3" :key="value"> {{value}} <br> </div>
            <strong> log </strong>：<div v-for="value in this.event_log_3" :key="value"> {{value}} <br> </div>
        </b-tooltip>

        <b-tooltip target="overhead4" triggers="hover" placement="bottom">
            <strong> 服务器 4 </strong> <br>
            负载：{{description_list[Math.floor(value_4/25)]}}
            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_4" :key="value"> {{value}} <br> </div>
            <strong> log </strong>：<div v-for="value in this.event_log_4" :key="value"> {{value}} <br> </div>
        </b-tooltip>

<!--        <b-tooltip target="overhead5" triggers="hover" placement="bottom">-->
<!--            <strong> 服务器 5 </strong> <br>-->
<!--            负载：{{description_list[Math.floor(value_5/25)]}}-->
<!--            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_5" :key="value"> {{value}} <br> </div>-->
<!--            <strong> log </strong>：<div v-for="value in this.event_log_5" :key="value"> {{value}} <br> </div>-->
<!--        </b-tooltip>-->

<!--        <b-tooltip target="overhead6" triggers="hover" placement="bottom">-->
<!--            <strong> 服务器 6 </strong> <br>-->
<!--            负载：{{description_list[Math.floor(value_6/25)]}}-->
<!--            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_6" :key="value"> {{value}} <br> </div>-->
<!--            <strong> log </strong>：<div v-for="value in this.event_log_6" :key="value"> {{value}} <br> </div>-->
<!--        </b-tooltip>-->

<!--        <b-tooltip target="overhead7" triggers="hover" placement="bottom">-->
<!--            <strong> 服务器 7 </strong> <br>-->
<!--            负载：{{description_list[Math.floor(value_7/25)]}}-->
<!--            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_7" :key="value"> {{value}} <br> </div>-->
<!--            <strong> log </strong>：<div v-for="value in this.event_log_7" :key="value"> {{value}} <br> </div>-->
<!--        </b-tooltip>-->

<!--        <b-tooltip target="overhead8" triggers="hover" placement="bottom">-->
<!--            <strong> 服务器 8 </strong> <br>-->
<!--            负载：{{description_list[Math.floor(value_8/25)]}}-->
<!--            <br> <strong>正在监听</strong>：<div v-for="value in this.room_id_list_8" :key="value"> {{value}} <br> </div>-->
<!--            <strong> log </strong>：<div v-for="value in this.event_log_8" :key="value"> {{value}} <br> </div>-->
<!--        </b-tooltip>-->
    </b-container>
  </div>
</template>

<script>
  import mixin from '../mixin'
  import { BIconQuestionCircleFill } from 'bootstrap-vue'
  export default {
    mixins: [mixin],
    components: {
    BIconQuestionCircleFill
    },
    computed: {
        info(){
          // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '这是什么？'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span>'+'1.网站当前使用多个服务器同时采集数据，从这里可以看到各个服务器的实时负载以及采集到的弹幕总数。<br>'+'2.目前支持256个直播间同时开播。'+'</span>'
              }
            }
          }
    },
    data: () => ({
      value_1: 0,
      value_2: 0,
      value_3: 0,
      value_4: 0,
      // value_5: 0,
      // value_6: 0,
      // value_7: 0,
      // value_8: 0,
      danmaku_counter_1: 0,
      danmaku_counter_2: 0,
      danmaku_counter_3: 0,
      danmaku_counter_4: 0,
      // danmaku_counter_5: 0,
      // danmaku_counter_6: 0,
      // danmaku_counter_7: 0,
      // danmaku_counter_8: 0,
      description_list : ["完全胜利", "余裕余裕", "理解理解", "牙白呦", "全部木大"],

      room_id_list_1: [],
      room_id_list_2: [],
      room_id_list_3: [],
      room_id_list_4: [],
      // room_id_list_5: [],
      // room_id_list_6: [],
      // room_id_list_7: [],
      // room_id_list_8: [],

      event_log_1: [],
      event_log_2: [],
      event_log_3: [],
      event_log_4: [],
      // event_log_5: [],
      // event_log_6: [],
      // event_log_7: [],
      // event_log_8: [],
    }),
    created() {
      this.stopped = false
      this.url = `https://api.huolonglive.com/processjson?uid=000000&chart_type=server`;
    },
    watch: {
    data(value) {
      // console.log(value)
      this.value_1 = 100 * (value[0]['overhead']/64);
      this.value_2 = 100 * (value[1]['overhead']/64);
      this.value_3 = 100 * (value[2]['overhead']/64);
      this.value_4 = 100 * (value[3]['overhead']/64);
      // this.value_5 = 100 * (value[4]['overhead']/64);
      // this.value_6 = 100 * (value[5]['overhead']/64);
      // this.value_7 = 100 * (value[6]['overhead']/64);
      // this.value_8 = 100 * (value[7]['overhead']/64);

      this.danmaku_counter_1 = value[0]['recent danmaku'];
      this.danmaku_counter_2 = value[1]['recent danmaku'];
      this.danmaku_counter_3 = value[2]['recent danmaku'];
      this.danmaku_counter_4 = value[3]['recent danmaku'];
      // this.danmaku_counter_5 = value[4]['recent danmaku'];
      // this.danmaku_counter_6 = value[5]['recent danmaku'];
      // this.danmaku_counter_7 = value[6]['recent danmaku'];
      // this.danmaku_counter_8 = value[7]['recent danmaku'];

      this.room_id_list_1 = value[0]['room_list'];
      this.room_id_list_2 = value[1]['room_list'];
      this.room_id_list_3 = value[2]['room_list'];
      this.room_id_list_4 = value[3]['room_list'];
      // this.room_id_list_5 = value[4]['room_list'];
      // this.room_id_list_6 = value[5]['room_list'];
      // this.room_id_list_7 = value[6]['room_list'];
      // this.room_id_list_8 = value[7]['room_list'];

      this.event_log_1 = value[0]['current_event'].slice(Math.max(value[0]['current_event'].length - 5, 0));
      this.event_log_2 = value[1]['current_event'].slice(Math.max(value[1]['current_event'].length - 5, 0));
      this.event_log_3 = value[2]['current_event'].slice(Math.max(value[2]['current_event'].length - 5, 0));
      this.event_log_4 = value[3]['current_event'].slice(Math.max(value[3]['current_event'].length - 5, 0));
      // this.event_log_5 = value[4]['current_event'];
      // this.event_log_6 = value[5]['current_event'];
      // this.event_log_7 = value[6]['current_event'];
      // this.event_log_8 = value[7]['current_event'];
      },
    },
    methods: {
          // concat_string_format(value){
          //     let res = "";
          //     for (var i = 0; i < value.length; i++) {
          //           res += value[i] + '<br>';
          //     }
          //     return res
          // },
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