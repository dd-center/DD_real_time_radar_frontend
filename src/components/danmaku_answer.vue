<template>
  <div class="card_danmaku">
    <b-form-group label="Room Variant" label-for="Room id" label-cols-lg="2">
      <b-form-select
        v-model="room_id_value"
        :options="room_option"
        id="Room id"
      >
        <template v-slot:first>
          <option value="">-- hololive --</option>
        </template>
      </b-form-select>
    </b-form-group>

    <b-form-group label="Time Variant" label-for="Time id" label-cols-lg="2">
      <b-form-select
        v-model="time_id_value"
        :options="time_option"
        id="Time id"
      >
        <template v-slot:first>
          <option value="">-- Time --</option>
        </template>
      </b-form-select>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ room_id_value[time_id_value] }}</strong></div>
    <div class="mt-3">Selected: <strong>{{ time_id_value }}</strong></div>
    <b-table sticky-header hover :items="room_id_value.a" :table-variant="room_id_value" class="text-left"></b-table>
  </div>
</template>

<script>
import mixin from '../mixin'

  export default {
    mixins: [mixin],
    data: () => ({
      items: [{ heading1: '加载中', heading2: '加载中', heading3: '加载中' }],
      room_option: [],
      time_option: [],
      room_id_value: 'hololive',
      time_id_value: 'a'
    }),
    created() {
      // this.once = true
      this.url = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=danmaku`;
    },
    watch: {
    data(value) {
      console.log(value.data[this.room_id_value]);
      this.items = value.data[this.room_id_value],
      this.room_option = [
          // { value: null, text: 'Please select an option' },
          { value:
                    {
                      'a': [{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                              { age: 21, first_name: 'Larsen', last_name: 'Shaw' },],
                      'b': [{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                            { age: 38, first_name: 'Jami', last_name: 'Carney' }]
                    }, text: 'This is First option' },
          ],
      this.room_id_value = 'hololive',
      this.time_option = [
          { value: 'a', text: 'Please select an option' },
          { value: 'b', text: 'Selected Option' }
        ],
      this.time_id_value = 'a'
    },
  }
  }
</script>

<style scoped>

</style>