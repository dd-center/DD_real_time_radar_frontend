export default {
  data: () => ({
    data: [],
    stopped: false,
    timeout: null,
  }),
  methods: {
    async update() {
      try {
        const { data } = await this.$axios.post(this.url)
        this.data = data.data
        if (this.stopped || this.once) return
        this.timeout = setTimeout(this.update, 60000)
      } catch (error) {
        // console.error(error)
        if (this.stopped) return
        this.timeout = setTimeout(this.update, 60000)
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
