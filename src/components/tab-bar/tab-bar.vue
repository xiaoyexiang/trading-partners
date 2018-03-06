<template>
  <nav class="footer-navbar">
    <ul class="tab">
      <router-link tag="li" class="tab-item" to="/search">
        <i class="icon iconfont icon-shouye"></i>
        <span class="text">首页</span>
      </router-link>
      <router-link tag="li" class="tab-item" to="/mine">
        <i class="icon iconfont icon-wodejuhuasuan"></i>
        <span class="text">我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .footer-navbar {
    display: block
    position: fixed
    bottom: 0
    left: 0
    right: 0
    z-index: 10
    margin: auto
    .tab {
      display: flex
      background-color: #fff
      .tab-item {
        flex: 1
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        height: 48px
        color: $color-text
        .icon {
          display: inline-flex
          align-items: center
          justify-content: center
          width: 24px
          height: 24px
          margin-bottom: 2px
          font-size: 20px
        }
        .text {
          height: 14px
          font-size: 12px
          line-height: 14px
        }
        &.active,
        &.router-link-active {
          color: $color-theme
        }
      }
    }
  }
</style>
