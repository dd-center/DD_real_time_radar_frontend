<template>
	<div id="rating">
		<meta name="referrer" content="no-referrer">
    <p v-if="!data">正在获取排名数据……</p>
    <div class="item" v-else v-for="(user, index) in data" :key="user.name">
      <router-link class="avatar" :to="'user/' + user.uid">
        <img width="128" height="128" :src="user.face" alt="头像"/>
      </router-link>
      <div class="detail">
        <p class="title">
          <span class="rank">No.{{ index + 1 }}</span>&nbsp;
          <span class="name">{{ user.name }}</span>&nbsp;
        </p>
        <p class="value">同传总字数：{{ user.value }}</p>
        <p class="desc">{{ user.sign }}</p>
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
    this.url = `/processjson?uid=000000&chart_type=ladder`
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
    margin-bottom: 2rem;
  }

  .avatar {
    left: 0;
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