<template>
	<div id="rating">
		<meta name="referrer" content="no-referrer">
    <p v-if="!data">正在获取排名数据……</p>
    <div class="item" v-else v-for="(user, index) in data" :key="user.name">
      <router-link class="avatar" :to="'user/' + user.uid">
        <img width="128" height="128" :src="user.face" alt="头像"/>
      </router-link>
      <div class="detail">
          <div v-if="index + 1 === 1">
              <p class="title" style="color:goldenrod">
                  <span class="rank">No.{{ index + 1 }}</span>&nbsp;
                  <span class="name">{{ user.name }}</span>&nbsp;
              </p>
          </div>
          <div v-else-if="index + 1 === 2">
              <p class="title" style="color:mediumpurple">
                  <span class="rank">No.{{ index + 1 }}</span>&nbsp;
                  <span class="name">{{ user.name }}</span>&nbsp;
              </p>
          </div>
          <div v-else-if="index + 1 === 3">
              <p class="title" style="color:blue">
                  <span class="rank">No.{{ index + 1 }}</span>&nbsp;
                  <span class="name">{{ user.name }}</span>&nbsp;
              </p>
          </div>
          <div v-else>
              <p class="title" style="color:black">
                  <span class="rank">No.{{ index + 1 }}</span>&nbsp;
                  <span class="name">{{ user.name }}</span>&nbsp;
              </p>
          </div>
        <p class="value">同传总字数：{{ user.value }}</p>
        <div v-if="user.uid === 4515283">
              <p class="desc">不灭黑焰第三队第IX任现任队长BLACK SIDE</p>
        </div>
        <div v-else>
              <p class="desc">{{ user.sign }}</p>
        </div>
      </div>
    </div>
	</div>
</template>
<script>

import mixin from '../mixin'

export default {
  mixins: [mixin],

  data: () => ({
  }),

  created() {
    this.url = `http://47.240.116.247:5000/processjson?uid=000000&chart_type=ladder`
  },
}

</script>

<style lang="scss">

#rating {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;

  .item {
    position: relative;
    margin-bottom: 1rem;
    border: 1px solid #ebeef5;
    padding: 15px;
    border-radius: 10px;
  }

  .avatar {
    left: 8px;
    height: 128px;
    position: absolute;

    img {
      border-radius: 12px;
      box-shadow: 1px 1px 4px #0000003F;
      transition: 0.3s ease;

      &:hover {
        box-shadow: 1px 1px 8px #0000003F;
      }
    }
  }

  .detail {
    text-align: left;
    min-height: 128px;
    padding-left: 192px;

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }

    p {
      margin: 0.5rem 0;
      line-height: 1.6;
    }
  }
}

</style>