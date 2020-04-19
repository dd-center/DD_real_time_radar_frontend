<template>
  <div class="card">
<!--    <h2 class="title">服务器负载</h2>-->
    <b-container class="padding_for_server_info">
          <b-row>
            <b-col>
                <b-progress v-model="value_1" :label=123 :value=value_1 :variant="find_suitable_color(value_1)" striped :animated="true"></b-progress>
            </b-col>
            <b-col>
                <b-progress v-model="value_1" :value=value_1 :variant="find_suitable_color(value_1)" striped :animated="true"></b-progress>
            </b-col>
            <b-col>
                <b-progress v-model="value_1" :value=value_1 :variant="find_suitable_color(value_1)" striped :animated="true"></b-progress>
            </b-col>
            <b-col>
                <b-progress v-model="value_1" :value=value_1 :variant="find_suitable_color(value_1)" striped :animated="true"></b-progress>
            </b-col>
          </b-row>
    </b-container>
  </div>
</template>

<script>
  import mixin from '../mixin'
  export default {
    mixins: [mixin],
    data: () => ({
      value_1: 40
    }),
    created() {
      this.url = `http://localhost:5000/processjson?uid=${this.$route.params.uid}&chart_type=server`;
    },
    watch: {
    data(value) {
      this.value_1 = 100 * (value[0]['overhead']/17);
      console.log(this.value_1);
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