<template>
    <div class="container">
        <b-row  class="justify-content-md-center">
            <b-col lg="2"><b-button pill variant="warning" v-b-popover.hover.bottomleft="Rules">排行规则</b-button></b-col>
            <b-col lg="2"><b-button pill variant="dark" v-b-popover.hover.bottomright="contribute">参与人员</b-button></b-col>
            <b-col lg="2"><b-button pill variant="primary" v-b-popover.hover.bottom="repo">Github</b-button></b-col>
        </b-row>
        <div class="level">
            <monitor-chart/>
            <danmaku-rating class="level-item has-text-centered"></danmaku-rating>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    const DanmakuRating = () => import("../components/DanmakuRating")
    const MonitorChart = () => import("../components/monitor");

    export default {
        name: 'DataView',
        components: {
            DanmakuRating,
            MonitorChart,
        },
    computed: {
      Rules(){
        // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '☁ 网页说明'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:goldenrod">' +
              '1. 括号不计入同传总字数<br>' + '2. 单击头像以进入个人页面<br>' + '3. 雷达可以探测正在工作的同传man' + '</span>'
                    }
                }
            },
        repo(){
          // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '🎉 项目地址'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:blue">' +
              '<a href="https://github.com/dd-center/DD_real_time_radar_frontend.git">前端repo</a><br>'
                  + '<a href="https://github.com/pren1/DD_real_time_radar.git">后端repo</a>' + '</span>'
              }
            }
          },
         contribute(){
          // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '🌲 贡献'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:mediumpurple">' +
                  '网页架构：FZxiao, il Harper<br>'
                  + '数据处理：scPointer<br>'
                  + '前端：一代鬃狮，孤梦星影<br>'
                  + '后端：一代鬃狮, scPointer<br>'
                  + '部署：一代鬃狮，无敌飞雪<br>'
                  + '网页安全：无敌飞雪<br>'
                  + '弹幕监听：Kinori, Simon<br>'
                  + '前端技术顾问：shugen, H4M5TER<br>'
                  + '美术设计：殿子' + '</span><br>'
                  + '<span  style="color:red">' + '* 特别感谢无敌飞雪提供的域名' + '</span>'
              }
            }
          }
        }
    }
</script>
