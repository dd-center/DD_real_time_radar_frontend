<template>
  <div class="card">
         <h2 class="title">同传弹幕数据查询</h2>
         <b-container class="padding_part">
          <b-row>
            <b-col>
              <b-form-group label-for="Room id">
                <b-form-select
                  v-model="room_id_value"
                  :options="room_option"
                  id="Room id"
                  @change="change_room"
                >
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label-for="Time id">
                <b-form-select
                  v-model="time_id_value"
                  :options="items[room_id_value]['time_select']"
                  id="Time id"
                >
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>

    <b-table sticky-header hover :items="items[room_id_value][time_id_value]" class="text-left" style="width: 48rem" :busy="isBusy">
        <template v-slot:table-busy>
        <div class="text-center text-dark my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong> 加载中...</strong>
        </div>
      </template>
    </b-table>

  </div>
</template>

<script>
import mixin from '../mixin'

  export default {
    mixins: [mixin],
    data: () => ({
      isBusy: true,
      items: {'-- 加载中，请稍后 --':{"time_select": ["-- 加载中，请稍后 --"]}},
      room_option: ['-- 加载中，请稍后 --'],
      room_id_value: '-- 加载中，请稍后 --',
      time_id_value: '-- 加载中，请稍后 --'
    }),
    created() {
      this.once = true;
      this.url = `https://api.huolonglive.com/processjson?uid=${this.$route.params.uid}&chart_type=danmaku`;
    },
    watch: {
    data(value) {
      // console.log(value)
      this.isBusy = false
      this.items = value.data;
      this.items["-- 选择直播间以检视同传弹幕 --"] = {
            "time_select": ["-- 选择时间以检视同传弹幕 --"]
        };
      this.room_option = value.roomid_list;
      this.room_option.push("-- 选择直播间以检视同传弹幕 --");
      this.room_id_value = this.room_option[this.room_option.length-1];
      this.time_id_value = this.items[this.room_id_value]['time_select'][0]
    },
  },
  methods: {
          change_room(value) {
            'refresh the time value at here'
            this.time_id_value = this.items[value]['time_select'][0]
        }
   }
  }
</script>

<style scoped>

</style>