<template>
  <div class="wrapper">
    <section class="header-wrapper">
      <img class="header-bg"
           src="http://thirdwx.qlogo.cn/mmopen/wehKMmibRCFPJAZar9ss19FAjh6fy2BQLcxm1ChHtuUgJicfMVP6rdKTZBu2Jvf2ZicOcged9eTom3BZnCX9maF31GKhe2VPkxk/132"
           alt="背景">
      <header class="header">
        <div class="avatar-zone">
          <img
            src="http://thirdwx.qlogo.cn/mmopen/wehKMmibRCFPJAZar9ss19FAjh6fy2BQLcxm1ChHtuUgJicfMVP6rdKTZBu2Jvf2ZicOcged9eTom3BZnCX9maF31GKhe2VPkxk/132"
            alt="avatar" class="avatar">
        </div>
        <h2 class="user-name">叶子</h2>
      </header>
      <footer class="header-bar">
        <ul class="bars">
          <li class="item-bar">
            <i class="icon iconfont icon-liwu"></i><span class="text">签到</span>
          </li>
          <li class="item-bar">
            <i class="icon iconfont icon-xiaoxizhongxin"></i><span class="text">消息</span>
          </li>
        </ul>
      </footer>
    </section>
    <section class="function-mod">
      <ul class="function-list">
        <li class="item">
          <i class="icon iconfont icon-wodejuhuasuan"></i>
          <h5 class="fli-text">个人资料</h5>
        </li>
        <li class="item">
          <i class="icon iconfont icon-jushoucang"></i>
          <h5 class="fli-text">我的收藏</h5>
        </li>
        <li class="item">
          <i class="icon iconfont icon-quanzi"></i>
          <h5 class="fli-text">我的圈子</h5>
        </li>
        <li class="item">
          <i class="icon iconfont icon-weibiaoti5"></i>
          <h5 class="fli-text">敬请期待</h5>
        </li>
      </ul>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .header-wrapper {
    position: relative
    display: block
    height: 175px
    width: 100%
    /*background: #7e8c8d url(./info-bg.jpg) center center no-repeat*/
    /*-webkit-background-size: cover*/
    /*background-size: cover*/
    &::after {
      content: ""
      position: absolute
      left: 0
      top: 0
      bottom: 0
      right: 0
      z-index: 0
      margin: auto
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, .15)
    }
    .header-bg {
      display: block
      position: absolute
      left: 0
      top: 0
      bottom: 0
      right: 0
      z-index: 0
      margin: auto
      width: 100%
      height: 100%
      object-fit cover
      filter: blur(20px)
    }
    .header {
      padding: 15px 20px
      position: relative
      z-index: 1
      .avatar-zone {
        display: block
        width: 76px
        height: 76px
        margin: auto
        .avatar {
          display: block
          width: 70px
          height: 70px
          border: 3px solid #fff
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          overflow: hidden
        }
      }
      .user-name {
        display: block
        margin: 10px auto 0
        max-width: 60%
        font-size: $font-size-medium-x
        text-align: center
        color: #fff
        no-wrap()
      }
    }
    .header-bar {
      position: absolute
      bottom: 0
      left: 0
      right: 0
      z-index: 10
      margin: auto
      .bars {
        display: flex
        align-items: center
        background-color: rgba(255, 255, 255, .4)
        box-shadow: 0 -2px 8px rgba(255, 255, 255, .32)
        .item-bar {
          flex: 1
          display: flex
          align-items: center
          justify-content: center
          height: 40px
          font-size: $font-size-small
          color: #fff
          .icon {
            display: block
            margin-right: 5px
            font-size: $font-size-large
          }
        }
      }
    }
  }
  .function-mod {
    position: relative
    margin: 10px 0
    background-color: #fff
    .function-list {
      display: flex
      flex-wrap: wrap
      &::before {
        content: ""
        position: absolute
        top: 0
        left: 0
        right: 0
        z-index: 1
        height: 1px
        background: #ededed
      }
      &::after {
        content: ""
        position: absolute
        bottom: 0
        left: 0
        right: 0
        z-index: 1
        height: 1px
        background: #ededed
      }
      & > .item {
        position: relative
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        width: 33.33%
        padding: 20px 0
        &:not(:nth-of-type(3n+3))::before {
          content: ""
          position: absolute
          right: 0
          top: 0
          bottom: 0
          z-index: 1
          margin: auto
          width: 1px
          background: #ededed
        }
        &::after {
          content: ""
          position: absolute
          bottom: 0
          left: 0
          right: 0
          z-index: 1
          margin: auto
          height: 1px
          background: #ededed
        }
        .icon {
          display: flex
          align-items: center
          justify-content: center
          width: 30px
          height: 30px
          font-size: $font-size-large-x
        }
        .fli-text {
          display: block
          margin: 5px 10px 0
          font-size: $font-size-medium
          color: $color-text-ll
        }
      }
    }
  }
</style>
