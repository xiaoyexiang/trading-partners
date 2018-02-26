<template>
  <transition name="slide">
    <scroll class="detail-wrapper">
      <!--<div style="height: 3000px; width: 100px; background-color: azure"></div>-->
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{item}}</li>
      </ul>
    </scroll>
  </transition>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'

let test = []
for (let i = 0; i < 1000; i++) {
  test.push(i)
}
export default {
  name: 'PartnerDetail',
  data() {
    return {
      currentPartner: false,
      arr: test
    }
  },
  methods: {
    open() {
      this.currentPartner = true
    },
    close() {
      this.currentPartner = false
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .detail-wrapper {
    position: fixed
    top: 0
    bottom: 0
    right: 0
    left: 0
    z-index: 100
    margin: auto
    background-color: $color-background
  }
</style>
