<template>
	<div id="rating">
		<meta name="referrer" content="no-referrer">
    <b-tabs content-class="mt-3" v-model="current_tab" fill>
      <b-tab title="金银火龙">
        <template #title><strong style="color: goldenrod">金</strong><strong style="color: darkgray">银</strong><strong style="color: red">火龙</strong></template>
      <p v-if="!gold_silver_dragon">正在获取排名数据……</p>
      <div class="item" v-else v-for="(user, index) in gold_silver_dragon.slice(0, gold_sliver_list_length)" :key="user.name">
        <router-link class="avatar" :to="'/' + user.uid">
          <img width="128" height="128" :src="user.face" alt="头像" :id="'Demo_' + user.uid"/>
        </router-link>
        <div class="icon">
            <b-container>
            <b-row class="row no-gutters">
              <b-col class="inner">
                  <p v-if="[23072573, 15786749, 2025122, 1435101, 2907459, 3992958, 9572567, 1294271, 13967, 1398630, 12892870, 27212086, 12283738, 2327813, 24936979, 42522, 28232182, 37718180].includes(user.uid)">
                      <img width="32" height="32" src="/sponsor2.png">
                  </p>
              </b-col>

              <b-col class="inner">
                  <div v-if="user.value >= 1000000">
                    <img width="32" height="32" src="/jin.ico">
                    </div>
                    <div v-else-if="user.value >= 100000">
                        <img width="32" height="32" src="/yin.ico">
                    </div>
                    <div v-else-if="user.value >= 10000">
                        <img width="32" height="32" src="/black_red.png">
                    </div>
                    <div v-else-if="user.value >= 1000">
                        <img width="32" height="32" src="/pink.png">
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="detail">
          <p class="title" :style="{ color: colors[index] || null }">
            <span class="rank">No.{{ index + 1 }}</span>&nbsp;
            <span v-if="user.name === '一代鬃狮'" class="name">
              同传man信息获取出错！
            </span>&nbsp;
            <span v-else class="name">
              {{ user.name }}
            </span>&nbsp;
          </p>
          <p class="value">同传总字数：{{ user.value }}</p>
          <p v-if="user.uid === 1395983" class="desc">
            一代鬃狮：数据获取错误，你仅仅只得到了一只狮子。
          </p>
          <p v-if="user.uid === 16878539" class="desc">
            巨乳的大姐姐来狩猎你 💗 了 💗 哦 💗 ～ (towa单推，基本只干自己喜欢的事。（烤肉，同传之类的）
          </p>
          <p v-if="user.name === '一代鬃狮'" class="desc">
            from 一代鬃狮：数据获取错误，你仅仅只得到了一只狮子
          </p>
          <p v-else class="desc">{{ user.sign }}</p>
        </div>
      </div>
      </b-tab>
      <b-tab title="黑火龙">
        <template #title><strong style="color: black">黑火龙</strong></template>
        <p v-if="!dark_dragon">正在获取排名数据……</p>
        <div class="item" v-else v-for="(user, index) in dark_dragon.slice(0, dark_list_length)" :key="user.name">
          <router-link class="avatar" :to="'/' + user.uid">
            <img width="128" height="128" :src="user.face" alt="头像" :id="'Demo_' + user.uid"/>
          </router-link>
          <div class="icon">
              <b-container>
              <b-row class="row no-gutters">
                <b-col class="inner">
                    <p v-if="[23072573, 15786749, 2025122, 1435101, 2907459, 3992958, 9572567, 1294271, 13967, 1398630, 12892870, 27212086, 12283738, 2327813, 24936979, 42522, 28232182, 37718180].includes(user.uid)">
                        <img width="32" height="32" src="/sponsor2.png">
                    </p>
                </b-col>

                <b-col class="inner">
                    <div v-if="user.value >= 1000000">
                      <img width="32" height="32" src="/jin.ico">
                      </div>
                      <div v-else-if="user.value >= 100000">
                          <img width="32" height="32" src="/yin.ico">
                      </div>
                      <div v-else-if="user.value >= 10000">
                          <img width="32" height="32" src="/black_red.png">
                      </div>
                      <div v-else-if="user.value >= 1000">
                          <img width="32" height="32" src="/pink.png">
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div class="detail">
            <p class="title" :style="{ color: colors[index] || null }">
              <span class="rank">No.{{ index + 1 + gold_sliver_offset }}</span>&nbsp;
              <span v-if="user.name === '一代鬃狮'" class="name">
                同传man信息获取出错！
              </span>&nbsp;
              <span v-else class="name">
                {{ user.name }}
              </span>&nbsp;
            </p>
            <p class="value">同传总字数：{{ user.value }}</p>
            <p v-if="user.uid === 1395983" class="desc">
              一代鬃狮：数据获取错误，你仅仅只得到了一只狮子。
            </p>
            <p v-if="user.uid === 16878539" class="desc">
              巨乳的大姐姐来狩猎你 💗 了 💗 哦 💗 ～ (towa单推，基本只干自己喜欢的事。（烤肉，同传之类的）
            </p>
            <p v-if="user.name === '一代鬃狮'" class="desc">
              from 一代鬃狮：数据获取错误，你仅仅只得到了一只狮子
            </p>
            <p v-else class="desc">{{ user.sign }}</p>
          </div>
        </div>
      </b-tab>
      <b-tab title="樱火龙">
        <template #title><strong style="color: deeppink">樱火龙</strong></template>
        <p v-if="!pink_dragon">正在获取排名数据……</p>
        <div class="item" v-else v-for="(user, index) in pink_dragon.slice(0, pink_list_length)" :key="user.name">
          <router-link class="avatar" :to="'/' + user.uid">
            <img width="128" height="128" :src="user.face" alt="头像" :id="'Demo_' + user.uid"/>
          </router-link>
          <div class="icon">
              <b-container>
              <b-row class="row no-gutters">
                <b-col class="inner">
                    <p v-if="[23072573, 15786749, 2025122, 1435101, 2907459, 3992958, 9572567, 1294271, 13967, 1398630, 12892870, 27212086, 12283738, 2327813, 24936979, 42522, 28232182, 37718180].includes(user.uid)">
                        <img width="32" height="32" src="/sponsor2.png">
                    </p>
                </b-col>

                <b-col class="inner">
                    <div v-if="user.value >= 1000000">
                      <img width="32" height="32" src="/jin.ico">
                      </div>
                      <div v-else-if="user.value >= 100000">
                          <img width="32" height="32" src="/yin.ico">
                      </div>
                      <div v-else-if="user.value >= 10000">
                          <img width="32" height="32" src="/black_red.png">
                      </div>
                      <div v-else-if="user.value >= 1000">
                          <img width="32" height="32" src="/pink.png">
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div class="detail">
            <p class="title" :style="{ color: colors[index] || null }">
              <span class="rank">No.{{ index + 1 + dark_offset }}</span>&nbsp;
              <span v-if="user.name === '一代鬃狮'" class="name">
                同传man信息获取出错！
              </span>&nbsp;
              <span v-else class="name">
                {{ user.name }}
              </span>&nbsp;
            </p>
            <p class="value">同传总字数：{{ user.value }}</p>
            <p v-if="user.uid === 1395983" class="desc">
              一代鬃狮：数据获取错误，你仅仅只得到了一只狮子。
            </p>
            <p v-if="user.uid === 16878539" class="desc">
              巨乳的大姐姐来狩猎你 💗 了 💗 哦 💗 ～ (towa单推，基本只干自己喜欢的事。（烤肉，同传之类的）
            </p>
            <p v-if="user.name === '一代鬃狮'" class="desc">
              from 一代鬃狮：数据获取错误，你仅仅只得到了一只狮子
            </p>
            <p v-else class="desc">{{ user.sign }}</p>
          </div>
        </div>
      </b-tab>
      <b-tab title="新生雏龙">
        <template #title><strong style="color: blue">新生</strong><strong style="color: darkcyan">雏龙</strong></template>
        <p v-if="!new_man">正在获取排名数据……</p>
        <div class="item" v-else v-for="(user, index) in new_man.slice(0, new_man_list_length)" :key="user.name">
          <router-link class="avatar" :to="'/' + user.uid">
            <img width="128" height="128" :src="user.face" alt="头像" :id="'Demo_' + user.uid"/>
          </router-link>
          <div class="icon">
              <b-container>
              <b-row class="row no-gutters">
                <b-col class="inner">
                    <p v-if="[23072573, 15786749, 2025122, 1435101, 2907459, 3992958, 9572567, 1294271, 13967, 1398630, 12892870, 27212086, 12283738, 2327813, 24936979, 42522, 28232182, 37718180].includes(user.uid)">
                        <img width="32" height="32" src="/sponsor2.png">
                    </p>
                </b-col>

                <b-col class="inner">
                    <div v-if="user.value >= 1000000">
                      <img width="32" height="32" src="/jin.ico">
                      </div>
                      <div v-else-if="user.value >= 100000">
                          <img width="32" height="32" src="/yin.ico">
                      </div>
                      <div v-else-if="user.value >= 10000">
                          <img width="32" height="32" src="/black_red.png">
                      </div>
                      <div v-else-if="user.value >= 1000">
                          <img width="32" height="32" src="/pink.png">
                      </div>
                    <div v-else>
                          <img width="32" height="32" src="/convert.png">
                      </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div class="detail">
            <p class="title" :style="{ color: colors[index] || null }">
              <span class="rank">No.{{ index + 1 + pink_offset }}</span>&nbsp;
              <span v-if="user.name === '一代鬃狮'" class="name">
                同传man信息获取出错！
              </span>&nbsp;
              <span v-else class="name">
                {{ user.name }}
              </span>&nbsp;
            </p>
            <p class="value">同传总字数：{{ user.value }}</p>
            <p v-if="user.uid === 1395983" class="desc">
              一代鬃狮：数据获取错误，你仅仅只得到了一只狮子。
            </p>
            <p v-if="user.uid === 16878539" class="desc">
              巨乳的大姐姐来狩猎你 💗 了 💗 哦 💗 ～ (towa单推，基本只干自己喜欢的事。（烤肉，同传之类的）
            </p>
            <p v-if="user.name === '一代鬃狮'" class="desc">
              from 一代鬃狮：数据获取错误，你仅仅只得到了一只狮子
            </p>
            <p v-else class="desc">{{ user.sign }}</p>
          </div>
        </div>
      </b-tab>
    </b-tabs>
	</div>
</template>

<script>

import mixin from '../mixin'
import huolonglive_server from './server_location.js'

const colors = [
  'goldenrod',
  'mediumpurple',
  'blue',
]

export default {
  mixins: [mixin],

  data: () => ({
    colors,
    // list_length: 10,
    current_tab: 0,
    gold_sliver_list_length: 10,
    dark_list_length: 10,
    pink_list_length: 10,
    new_man_list_length: 10
  }),

  created() {
    this.url = `${huolonglive_server.address}/processjson?uid=000000&chart_type=ladder`
    this.home_list=true
  },
  methods: {
    // ...
    scroll() {
      let isLoading = false
      window.onscroll = () => {
        // 距离底部200px时加载一次
        let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
        if (bottomOfWindow && isLoading === false) {
          isLoading = true
          if (this.current_tab === 0){
            this.gold_sliver_list_length += 10
          }else if(this.current_tab === 1){
            this.dark_list_length += 10
          }else if(this.current_tab === 2){
            this.pink_list_length += 10
          }else{
            this.new_man_list_length += 10
          }
          // console.log(this.current_tab)
          // this.list_length += 10
          setTimeout(() => {
              isLoading = false
          }, 500);
          // console.log("hello~")
        }
      }
    },
    find_me: function(target_mid) {
      // console.log("Hello!")
      // iterate data, and update list_length
      var i;
      for (i = 0; i < this.gold_silver_dragon.length; i++) {
        if (this.gold_silver_dragon[i].uid.toString() === target_mid){
          this.gold_sliver_list_length = i+25
          this.current_tab = 0
          return true
        }
      }

      for (i = 0; i < this.dark_dragon.length; i++) {
        if (this.dark_dragon[i].uid.toString() === target_mid){
          this.dark_list_length = i+25
          this.current_tab = 1
          return true
        }
      }

      for (i = 0; i < this.pink_dragon.length; i++) {
        if (this.pink_dragon[i].uid.toString() === target_mid){
          this.pink_list_length = i+25
          this.current_tab = 2
          return true
        }
      }

      for (i = 0; i < this.new_man.length; i++) {
        if (this.new_man[i].uid.toString() === target_mid){
          this.new_man_list_length = i+25
          this.current_tab = 3
          return true
        }
      }
      return false
    }
  },
  mounted() {
    this.scroll()
  }
}

</script>

<style lang="scss">

#rating {
  max-width: 960px;
  margin: 0 auto;

  .item {
    position: relative;
    padding: 1rem;
    border-radius: 10px;
    transition: 0.3s ease;
    box-shadow: 1px 1px 4px #0000;

    &:hover {
      box-shadow: 1px 1px 4px #0000005F;
    }
  }

  .avatar {
    left: 1rem;
    height: 128px;
    position: absolute;

    img {
      position: absolute;
      border-radius: 12px;
      box-shadow: 1px 1px 4px #0000005F;
      transition: 0.3s ease;

      &:hover {
        box-shadow: 1px 1px 8px #0000005F;
      }
    }
  }

  .icon {
    right: 1px;
    position: absolute;

    .inner {
        margin: 2px; // Or whatever you want your spacing to be
    }
  }

  .detail {
    text-align: left;
    min-height: 128px;
    padding-left: 9rem;

    @media (min-width: 720px) {
      padding-left: 11rem;
    }

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }

    p {
      margin: 0.5rem 0;
      line-height: 1.6;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>