<template>
    <div class="container">
        <b-row  class="justify-content-md-center">
            <b-col lg="2"><b-button pill variant="danger" v-b-popover.hover.bottomleft="badge">火龙徽章</b-button></b-col>
            <b-col lg="2"><b-button pill variant="warning" v-b-popover.hover.bottom="Rules">特别说明</b-button></b-col>
            <b-col lg="2"><b-button pill variant="dark" v-b-popover.hover.bottom="contribute">参与人员</b-button></b-col>
            <b-col lg="2"><b-button pill variant="primary" v-b-popover.hover.bottomright="repo">Github</b-button></b-col>
        </b-row>
        <div class="level">
            <progress-chart/>
            <monitor-chart/>
            <danmaku-rating/>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    // const ProgressChart = () => import("../components/progress_bar");
    const DanmakuRating = () => import("../components/DanmakuRating")
    const MonitorChart = () => import("../components/monitor");
    export default {
        name: 'DataView',
        components: {
            // ProgressChart,
            DanmakuRating,
            MonitorChart,
        },
    computed: {
      badge(){
          // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '🔥 火龙徽章'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:orangered">' +
              '<table border="0" align="left">' +
'<tr">' +
'<td>徽章</td>' +
'<td>名称</td>' +
'<td>条件</td>' +

'</tr>' +
'<tr>' +
'<td><img width="32" height="32" src="/pink.png"></td>' +
'<td>樱火龙</td>' +
'<td>同传总字数 1000+</td>' +
'</tr>' +
      '</tr>' +
'<tr>' +
'<td><img width="32" height="32" src="/black_red.png"></td>' +
'<td>黑火龙</td>' +
'<td>同传总字数 10000+</td>' +
      '</tr>' +
'<tr>' +
'<td><img width="32" height="32" src="/yin.ico"></td>' +
'<td>银火龙</td>' +
'<td>同传总字数 100000+</td>' +
                      '</tr>' +
'<tr>' +
'<td><img width="32" height="32" src="/jin.ico"></td>' +
'<td>金火龙</td>' +
'<td>同传总字数 1000000+</td>' +
'</tr>' +
'<tr>' +
'<td><img width="32" height="32" src="/sponsor2.png"></td>' +
'<td>赞 助</td>' +
'<td>赞助了本网站的服务器 </td>' +
'</table>' + '</span>'
                    }
                }
      },
        Rules(){
        // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '⚠️ 特别说明'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:goldenrod">' +
              '<span  style="color:red">' + '0. 由于经费紧张，目前采用了相对廉价的服务器，访问可能会等待更长时间，请耐心等候～' +  '</span>' + '<br>' +
                  '<span  style="color:mediumpurple">' + '1. 任何问题请前往github的issue页面反映' +  '</span>' + '<br>' +
              '2. 括号不计入同传总字数<br>' + '3. 单击头像以进入个人页面<br>' + '4. 雷达可以探测正在工作的同传man<br>' + '5.数据从19年5月开始计入，6/7月有数据缺失，8月后基本完整, 正在实时更新' + '</span>'
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
                  + '前端：孤梦星影，一代鬃狮<br>'
                  + '后端：一代鬃狮, scPointer<br>'
                  + '部署：一代鬃狮，无敌飞雪<br>'
                  + '网页安全：无敌飞雪<br>'
                  + '弹幕监听：Simon, Kinori<br>'
                  + '前端技术顾问：shugen, H4M5TER<br>'
                  + '美术设计：殿子, 一代鬃狮' + '</span><br>'
                  + '<span  style="color:red">' + '* 特别感谢无敌飞雪提供的域名' + '</span>'
              }
            }
          }
        }
    }
</script>
