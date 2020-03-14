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
      } catch (error) {
        console.error(error)
      } finally {
        if (this.stopped) return
        this.timeout = setTimeout(this.update, 3000)
      }
    },
  },
  mounted() {
    this.update()
  },
  destroyed() {
    this.stopped = true
    clearTimeout(this.timeout)
  },
}
