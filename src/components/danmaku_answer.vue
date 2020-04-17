<template>
  <div class="card_danmaku">
    <b-form-group label="Room Variant" label-for="Room id" label-cols-lg="2">
      <b-form-select
        v-model="room_id_value"
        :options="room_option"
        id="Room id"
      >
        <template v-slot:first>
          <option value="">-- 请选择直播间 --</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-table sticky-header hover :items="items[room_id_value]" class="text-left"></b-table>
  </div>
</template>

<script>
import mixin from '../mixin'

  export default {
    mixins: [mixin],
    data: () => ({
      items: [{ heading1: '加载中', heading2: '加载中', heading3: '加载中' }],
      room_option: [],
      room_id_value: 'hololive'
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
      this.room_id_value = 'hololive'
    },
  }
  }
</script>

<style scoped>

</style>