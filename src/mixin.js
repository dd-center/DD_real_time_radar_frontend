export default {
  data: () => ({
    data: [],
    stopped: true,
    timeout: null,
    timeout_count: 60000,
    gold_silver_dragon: [],
    dark_dragon: [],
    pink_dragon: [],
    new_man: [],
    home_list: false,
    gold_sliver_offset: 0,
    dark_offset: 0,
    pink_offset: 0
  }),
  methods: {
    split_different_lists(input_data){
      var i;
      for (i = 0; i < input_data.length; i++) {
        if (input_data[i].value >= 100000){
          this.gold_silver_dragon.push(input_data[i])
        }else if(input_data[i].value >= 10000){
          this.dark_dragon.push(input_data[i])
        }else if(input_data[i].value >= 1000){
          this.pink_dragon.push(input_data[i])
        }else{
          this.new_man.push(input_data[i])
        }
      }
      this.gold_sliver_offset = this.gold_silver_dragon.length
      this.dark_offset = this.gold_sliver_offset + this.dark_dragon.length
      this.pink_offset = this.dark_offset + this.pink_dragon.length
    },
    async update() {
      try {
        // console.log("update once");
        const { data } = await this.$axios.post(this.url)
        this.data = data.data
        if (this.home_list){
          this.split_different_lists(this.data)
        }
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
