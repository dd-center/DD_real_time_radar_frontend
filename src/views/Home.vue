<template>
    <div class="container">
        <b-row  class="justify-content-md-center">
            <b-col lg="2"><b-button pill variant="danger" v-b-popover.hover.bottom="badge">火龙徽章</b-button></b-col>
            <b-col lg="2"><b-button pill variant="warning" v-b-popover.hover.bottom="Rules">特别说明</b-button></b-col>
            <b-col lg="2"><b-button pill variant="dark" v-b-popover.hover.bottom="contribute">参与人员</b-button></b-col>
            <b-col lg="2"><b-button pill variant="success" v-b-popover.hover.bottom="update_note">更新日志</b-button></b-col>
            <b-col lg="2"><b-button pill variant="info" v-b-popover.hover.bottom="search_man" v-b-modal.find_service>同传搜索</b-button></b-col>
            <b-col lg="2"><b-button pill variant="primary" v-b-popover.hover.bottom="repo">Github</b-button></b-col>
        </b-row>
        <b-modal ref="find_service"
                                 id="find_service"
                                 title="同传man定位"
                                 hide-footer>
            <b-form >
            <b-form-group id="uid"
                          :label="'我被同传网站记录了吗？'"
                          label-for="uid-input">
                <b-form-input id="uid-input"
                              type="text"
                              v-model="UID"
                              required
                              :placeholder="'请于此输入您的uid!'">
                </b-form-input>
              </b-form-group>
            </b-form>
<!--          <b-button-group>-->
<!--                <b-button type="submit" class="custom_modal" @click="onSubmitUid">提交</b-button>-->
<!--              </b-button-group>-->
          <div class="register_pannel">
              <b-button-group>
                <b-button type="submit" class="custom_modal" @click="scroll_to_me">提交</b-button>
              </b-button-group>
              <div v-if="!is_valid_uid" style="color: red">非法输入或uid不存在</div>
            </div>
         </b-modal>
        <div class="level">
<!--            <progress-chart/>-->
            <monitor-chart/>
            <danmaku-rating ref="form"/>
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
        data() {
          return{
            UID: '',
            is_valid_uid: true
          }
        },
        components: {
            // ProgressChart,
            DanmakuRating,
            MonitorChart,
        },
      methods:{
          scroll_to_me(){
            let target_mid = this.UID
            // console.log(target_mid)
            let is_exist = this.$refs.form.find_me(target_mid)
            if (is_exist === true){
              this.$refs.find_service.hide();
              this.is_valid_uid = true
              setTimeout(() => {
              document.querySelector("#Demo_" + target_mid).scrollIntoView({ behavior: "smooth", block: "center"});
              this.UID=''
              }, 500);
            } else {
              this.is_valid_uid = false
              console.log("Not exist!")
            }
          }
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
                '<span  style="color:red">' + '0. 近期排名变动是因为去除了错误收集的重复弹幕，望知悉～' +  '</span>' + '<br>' +
                  '<span  style="color:goldenrod">' + '1. 短时间发送重复的同传弹幕不被计算在内' +  '</span>' + '<br>' +
              '2. 括号不计入同传总字数<br>' + '3. 颜文字不算同传！会被朴素贝叶斯分类器干掉的～<br>' + '4. 单击头像以进入个人页面<br>' + '5. 雷达可以探测正在工作的同传man<br>' + '6. 移动端建议横屏浏览本网站，效果更佳<br>' + '7.数据从19年5月开始计入，19年6/7月有数据缺失，19年8月后基本完整, 21年3月前半月因服务器维护有数据缺失，目前正在实时更新' + '</span>'
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
         update_note(){
          // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '📖 更新日志'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:green">' +
                '<span  style="color:black">' + '<b>'+ '03/12/2021-版本 v1.01' +  '</b>' + '</span>' + '<br>' +
                  '<span  style="color:green">' + '1. 修复了一系列会导致网站崩溃的bug' +  '</span>' + '<br>' +
              '2. 优化内存利用与CPU利用，提高了网站的响应速度<br>' + '3. 于后台缓慢更新同传man的信息<br>' + '4. 前端程序可读性略微上升<br>' +
                  '<span  style="color:black">' + '<b>'+ '03/15/2021-版本 v1.02' +  '</b>' + '</span>' + '<br>' +
                  '<span  style="color:green">' + '1. 同传记录现在可以下载了！' +  '</span>' + '<br>' +
              '2. 继续修复了一个会导致后端崩溃的bug<br>' + '3. 更改主页加载机制，大幅提升网页加载速度<br>' + '</span>'
              }
            }
          },
        search_man(){
          return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return '🔍 同传搜索'
          },
          content: () => {
            // Note this is called only when the popover is opened
            // return 'The date is:<br><em>' + new Date() + '</em>'
              return '<span  style="color:cadetblue">' +
                '输入您的' + '<b>'+ 'uid' + '</b>' +'以查询您是否被本网站记录' + '</span>'
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
              return  '<span  style="color:red">' + '* 本网站的强强服务器由(湊ほむら)全额资助，域名由无敌飞雪提供，在这里特别感谢他们，谢谢！' + '</span><br>' +
                  '<span  style="color:mediumpurple">'
                  + '维护：一代鬃狮<br>'
                  + '网页架构：FZxiao, il Harper<br>'
                  + '数据处理：scPointer<br>'
                  + '前端：孤梦星影，一代鬃狮<br>'
                  + '后端：一代鬃狮, scPointer<br>'
                  + '部署：无敌飞雪，一代鬃狮<br>'
                  + '网页安全：无敌飞雪<br>'
                  + '弹幕监听：Simon, Kinori<br>'
                  + '前端技术顾问：shugen, H4M5TER<br>'
                  + '美术设计：殿子, 一代鬃狮' + '</span>'
              }
            }
          }
        }
    }
</script>
<style lang="scss" scoped>
.register_pannel {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
</style>