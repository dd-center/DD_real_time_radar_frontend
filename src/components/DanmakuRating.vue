<template>
	<div class="danmaku-rating">
		<table class="table">
			<tr>
				<th>排名</th>
				<th>用户名</th>
				<th>同传条数</th>
			</tr>
			<transition-group tag="tbody" name="component-fade">
				<tr v-for="(i, index) in tableData" :key="i.name" v-show="show" class="td">
					<td>No.{{index + 1}}</td>
					<td><router-link :to="'user/' + i.uid">{{i.name}}</router-link></td>
					<td>{{i.value}}</td>
				</tr>
			</transition-group>
		</table>
	</div>
</template>

<script>

export default {
  data: () => ({
    show: true,
    tableData: [],
    data_val: undefined,
    isStop: false,
    timeout: null,
  }),
  methods: {
    async monitor() {
      try {
        const { data } = await this.$axios.post(`http://47.240.116.247:5000/processjson?uid=000000&chart_type=ladder`)
        this.tableData = data.data
      } catch (error) {
        console.log(error)
      } finally {
        if (this.isStop) return
        this.timeout = setTimeout(this.uploadDate, 3000)
      }
    },
  },
  created() {
    this.monitor()
  },
  destroyed() {
    this.isStop = true
  },
}

</script>

<style scoped>

.danmaku-rating {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.td {
  border-bottom: 1px solid #ebeef5;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

</style>