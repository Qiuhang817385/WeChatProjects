<template>
  <div class="core-container">
    <!-- height: 400px; -->
    <div class="scroll-wrapper"
         ref="scroll">
      <div class="scroll-content">
        <!-- 50px -->
        <div class="scroll-item"
             v-for="(item, index) in emojis"
             :key="index"
             @click="clickHandler(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'

export default {
  data () {
    return {
      emojis: [
        '😀 😁 😂 🤣 😃',
        '😄 😅 😆 😉 😊',
        '😫 😴 😌 😛 😜',
        '👆🏻 😒 😓 😔 👇🏻',
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 ☹️ 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '☝️ ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘'
      ]
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true,
        probeType: 3 // listening scroll hook
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.core-container {
  .scroll-wrapper {
    height: 400px;
    overflow: hidden;
    .scroll-item {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      text-align: center;
      &:nth-child(2n) {
        background-color: #f3f5f7;
      }
      &:nth-child(2n + 1) {
        background-color: #42b983;
      }
    }
  }
}
</style>