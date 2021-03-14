<template>
  <div class="card">
          <div class="outside_title">
           <h3 class="title">同传弹幕数据查询</h3>

            <div v-if="!hover">
              <b-icon-cloud-download class="download_button h3 mb-2" @click="download"
           @mouseover="mouseOver" @mouseleave="mouseLeave"></b-icon-cloud-download>
            </div>
            <div v-else>
              <b-icon-cloud-download-fill class="download_button h3 mb-2" @click="download"
           @mouseover="mouseOver" @mouseleave="mouseLeave"></b-icon-cloud-download-fill>
            </div>
         </div>
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
import huolonglive_server from './server_location.js'
import {BIcon, BIconCloudDownload, BIconCloudDownloadFill} from 'bootstrap-vue'

  export default {
    mixins: [mixin],
    components: {
      // eslint-disable-next-line
      BIcon,
      // eslint-disable-next-line
      BIconCloudDownload, // <- The icon needs to be registered with your page/app
      // eslint-disable-next-line
      BIconCloudDownloadFill
    },
    data: () => ({
      isBusy: true,
      items: {'-- 加载中，请稍后 --':{"time_select": ["-- 加载中，请稍后 --"]}},
      room_option: ['-- 加载中，请稍后 --'],
      room_id_value: '-- 加载中，请稍后 --',
      time_id_value: '-- 加载中，请稍后 --',
      hover: false
    }),
    created() {
      this.once = true;
      this.url = `${huolonglive_server.address}/processjson?uid=${this.$route.params.uid}&chart_type=danmaku`;
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
            // console.log("changed: ")
            // console.log(value)
            // console.log(this.time_id_value)
        },
        download(){
          if (this.room_id_value !== '-- 选择直播间以检视同传弹幕 --' && this.time_id_value !== '-- 选择时间以检视同传弹幕 --'){
              var data = [{"同传弹幕":"同传弹幕","时间":"时间"}].concat(this.items[this.room_id_value][this.time_id_value])
              // use
              var csv = data.map(function(d){
                      return JSON.stringify(Object.values(d));
                  })
                  .join('\n')
                  .replace(/(^\[)|(\]$)/mg, '');
              // console.log(csv)
              this.downloadFile('同传记录_' + this.room_id_value + '_' + this.time_id_value + '.csv', 'data:text/csv;charset=UTF-8,' + encodeURIComponent(csv));
              // console.log(this.items[this.room_id_value][this.time_id_value])
          }
        },
       downloadFile(fileName, urlData) {
          var aLink = document.createElement('a');
          aLink.download = fileName;
          aLink.href = urlData;
          var event = new MouseEvent('click');
          aLink.dispatchEvent(event);
      },
    mouseOver(){
      this.hover=true
    },
    mouseLeave(){
      this.hover=false
    }
   }
  }
</script>

<style lang="scss" scoped>
.outside_title{
  display:flex;
  justify-content:center;
  border-bottom: 1px solid #ebeef5;
}
.title{
   flex:1;
   display: flex;
   justify-content: center;
   //transform: translateX(10px);/*D element Width[if needed]*/
}
.download_button{
  margin-right: 1rem;
  margin-top: 1rem;
}
</style>