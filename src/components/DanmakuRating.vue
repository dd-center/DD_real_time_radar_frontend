<template>
	<div class="danmaku-rating">
    <p>TODO: 如果增加了其他字段可能会修改样式，不用表格。</p>
		<table class="table">
      <thead>
        <tr>
          <th>排名</th>
          <th>用户名</th>
          <th>同传条数</th>
        </tr>
      </thead>
			<tbody>
				<tr v-for="(i, index) in data" :key="i.name" v-show="show">
					<td>No.{{index + 1}}</td>
					<td><router-link :to="'user/' + i.uid">{{i.name}}</router-link></td>
					<td>{{i.value}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>

import mixin from '../mixin'

export default {
  mixins: [mixin],

  data: () => ({
    show: true,
  }),

  created() {
    this.url = `http://47.240.116.247:5000/processjson?uid=000000&chart_type=ladder`
  },
}

</script>

<style lang="scss" scoped>

table {
  margin: 2rem auto;
  max-width: 960px;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.6em 1em;
}

tr {
  border: 1px solid #dfe2e5;

  tbody &:nth-child(odd) {
    background-color: #f6f8fa;
  }
}

</style>