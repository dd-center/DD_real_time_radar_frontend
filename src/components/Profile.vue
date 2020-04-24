<template>
  <div class="card profile">
    <h2 class="title">{{ data.nick_name }}</h2>
    <div class="icon">
          <div v-if="data.danmaku_counts >= 1000000">
              <img src="/golden.png">
          </div>
          <div v-else-if="data.danmaku_counts >= 100000">
              <img src="/sliver.png">
          </div>
          <div v-else-if="data.danmaku_counts >= 10000">
              <img src="/black_red.png">
          </div>
          <div v-else-if="data.danmaku_counts >= 1000">
              <img src="/pink.png">
          </div>
      </div>
    <div class="content">
      <p type="tag info">排名：{{ data.current_rank }}</p>
      <p type="tag info">总字数：{{ data.danmaku_counts }}</p>
      <p type="tag info">当前状态：{{ data.is_working }}</p>
      <p type="tag info">个人空间：<a target="_blank" :href="space">{{ space }}</a></p>
      <p type="tag info">签名：{{ data.sign }}</p>
      <img class="avatar" width="96" height="96" :src="data.face"/>
    </div>
  </div>
</template>

<script>

import mixin from '../mixin'

export default {
  mixins: [mixin],

  computed: {
    space() {
      return `https://space.bilibili.com/${this.$route.params.uid}`
    },
  },

  created() {
    this.url = `https://api.huolonglive.com/processjson?uid=${this.$route.params.uid}&chart_type=man_status`;
  },
}

</script>

<style lang="scss">

.profile {
  .icon {
    right: 27px;
    padding-top: 11px;
    position: absolute;
  }

  .content {
    text-align: left;
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  img.avatar {
    position: absolute;
    top: 2rem;
    right: 2rem;
    border-radius: 12px;
    box-shadow: 1px 1px 4px #0000003F;
  }
}

</style>
