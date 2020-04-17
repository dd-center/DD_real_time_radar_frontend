<template>
  <div class="card_danmaku">

    <b-form-group label="直播间：" label-for="Room id" label-cols-lg="2">
      <b-form-select
        v-model="room_id_value"
        :options="room_option"
        id="Room id"
        @change="change_room"
      >
        <template v-slot:first>
          <option value="">-- 请选择直播间 --</option>
        </template>
      </b-form-select>
    </b-form-group>

    <b-form-group label="时间：" label-for="Time id" label-cols-lg="2">
      <b-form-select
        v-model="time_id_value"
        :options="items[room_id_value]['time_select']"
        id="Time id"
      >
        <template v-slot:first>
          <option value="">-- 请选择时间段 --</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-table sticky-header hover :items="items[room_id_value][time_id_value]" class="text-left" style="width: 54rem"></b-table>
  </div>
</template>

<script>
import mixin from '../mixin'

  export default {
    mixins: [mixin],
    data: () => ({
      items: [],
      room_option: [],
      room_id_value: 'hololive',
      // time_option: [],
      time_id_value: '早期数据'
    }),
    created() {
      // this.once = true
      this.url = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=danmaku`;
    },
    watch: {
    data(value) {
      console.log(value.data[this.room_id_value]);
      this.items = value.data,
      this.room_option = value.roomid_list,
      this.room_id_value = this.room_option[0],
      this.time_id_value = this.items[this.room_id_value]['time_select'][0]
    },
  },
  methods: {
          change_room(value) {
            console.log(value);
            this.time_id_value = this.items[value]['time_select'][0]
        }
   }
  }
</script>

<style scoped>

</style>