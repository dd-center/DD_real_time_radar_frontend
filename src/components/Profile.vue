<template>
  <div class="card profile">
    <h2 class="title">TODO: 这里缺名字</h2>
    <div class="content">
      <p type="tag info">排名：{{ data.current_rank }}</p>
      <p type="tag info">总字数：{{ data.danmaku_counts }}</p>
      <p type="tag info">当前状态：{{ data.is_working }}</p>
      <p type="tag info">个人空间：<a target="_blank" :href="space">{{ space }}</a></p>
      <p type="tag info">签名：{{ data.sign }}</p>
      <img width="128" height="128" :src="data.face"/>
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
    this.url = `http://47.240.116.247:5000/processjson?uid=${this.$route.params.uid}&chart_type=man_status`;
  },
}

</script>

<style lang="scss">

.profile {
  .content {
    height: 400px;
    text-align: left;
    position: relative;
    padding: 0 2rem;
  }

  img {
    position: absolute;
    top: 2rem;
    right: 2rem;
    border-radius: 12px;
    box-shadow: 1px 1px 4px #0000003F;
  }

  p:first-child {
    margin-top: 0;
    padding-top: 2rem;
  }
}

</style>
