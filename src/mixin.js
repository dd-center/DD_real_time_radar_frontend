export default {
  data: () => ({
    data: [],
    stopped: true,
    timeout: null,
    timeout_count: 3000
  }),
  methods: {
    async update() {
      try {
        // console.log("update once");
        const { data } = await this.$axios.post(this.url)
        this.data = data.data
        if (this.stopped || this.once) return
        this.timeout = setTimeout(this.update, this.timeout_count)
      } catch (error) {
        // console.error(error)
        if (this.stopped) return
        this.timeout = setTimeout(this.update, this.timeout_count)
      }
    },
  },
  mounted() {
    this.update()
  },
  beforeDestroy() {
    this.stopped = true
    clearTimeout(this.timeout)
  },
}
