<template>
	<div id="rating">
		<meta name="referrer" content="no-referrer">
    <p v-if="!data">正在获取排名数据……</p>
    <div class="item" v-else v-for="(user, index) in data" :key="user.name">
      <router-link class="avatar" :to="'/' + user.uid">
        <img width="128" height="128" :src="user.face" alt="头像"/>
      </router-link>
      <div class="icon">
<!--          <b-container>-->
<!--          <b-row class="row no-gutters">-->
<!--            <b-col class="inner"><img src="/golden.png" id="tooltip-button-variant"></b-col>-->
<!--            <b-col class="inner"><img src="/sliver.png" id="tooltip-button-variant2"></b-col>-->
<!--            <b-col class="inner"><img src="/black_red.png" id="tooltip-button-variant3"></b-col>-->
<!--            <b-col class="inner"><img src="/pink.png" id="tooltip-button-variant4"></b-col>-->
<!--            <b-col class="inner"><img src="/convert.png" id="tooltip-button-variant5"></b-col>-->
<!--          </b-row>-->
<!--        </b-container>-->

          <div v-if="user.value >= 1000000">
              <img src="/golden.png" id="tooltip-button-variant3">
          </div>
          <div v-else-if="user.value >= 100000">
              <img src="/sliver.png">
          </div>
          <div v-else-if="user.value >= 10000">
              <img src="/black_red.png">
          </div>
          <div v-else-if="user.value >= 1000">
              <img src="/pink.png">
          </div>
          <b-tooltip target="tooltip-button-variant" variant="danger" triggers="hover">Danger variant tooltip</b-tooltip>
      </div>
      <div class="detail">
        <p class="title" :style="{ color: colors[index] || null }">
          <span class="rank">No.{{ index + 1 }}</span>&nbsp;
          <span class="name">{{ user.name }}</span>&nbsp;
        </p>
        <p class="value">同传总字数：{{ user.value }}</p>
        <p v-if="user.uid === 4515283" class="desc">
          不灭黑焰第三队第IX任现任队长BLACK SIDE
        </p>
        <p v-else class="desc">{{ user.sign }}</p>
      </div>
    </div>
	</div>
</template>

<script>

import mixin from '../mixin'

const colors = [
  'goldenrod',
  'mediumpurple',
  'blue',
]

export default {
  mixins: [mixin],

  data: () => ({
    colors,
  }),

  created() {
    this.url = `https://api.huolonglive.com/processjson?uid=000000&chart_type=ladder`
  },
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