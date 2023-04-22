<!-- 倒计时组件模板 -->
<template>
  <div>{{ countDownText }}</div>
</template>

<script>
export default {
  data() {
    return {
      countDown: 0,
      countDownText: ''
    }
  },
  props: {
    endTime: {
      type: Number,
      required: true
    }
  },
  methods: {
    // 计算并更新倒计时文本
    updateCountDownText() {
      let diff = this.endTime - new Date().getTime() // 时间差，单位：毫秒
      if (diff <= 0) {
        clearInterval(this.intervalId) // 时间到了，清除定时器
        this.countDownText = ''
      } else {
        const days = Math.floor(diff / (24 * 3600 * 1000))
        const hours = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000))
        const minutes = Math.floor((diff % (3600 * 1000)) / (60 * 1000))
        const seconds = Math.floor((diff % (60 * 1000)) / 1000)
        this.countDownText = `${days}天${hours}小时${minutes}分${seconds}秒`
      }
    }
  },
  mounted() {
    // 计算初始的倒计时文本
    this.updateCountDownText()

    // 每秒钟更新一次倒计时文本
    this.intervalId = setInterval(() => {
      this.updateCountDownText()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId) // 清除定时器
  }
}
</script>
