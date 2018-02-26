<template>
  <transition name="slide">
    <scroll class="detail-wrapper">
      <div>
        <header class="partner-info">
          <a href="javascript:;" class="back-btn" @click.prevent.stop="back"><i class="icon iconfont icon-xiangzuojiantou"></i></a>
          <div class="avatar-zone">
            <img :src="partnerInfo.portrait" alt="" class="avatar">
          </div>
          <h2 class="name">{{partnerInfo.name}}</h2>
          <p class="title">{{partnerInfo.title}}</p>
        </header>
        <section class="section-wrapper">
          <div class="wrap-header">
            <div class="header-zone">
              <div class="icon-box">
                <i class="icon iconfont icon-wodekefu"></i>
              </div>
              <h2 class="title">联系方式</h2>
            </div>
            <a href="javascript:;" class="right-btn">获取完整联系方式</a>
          </div>
          <div class="contact-list-zone">
            <ul class="contact-list">
              <li class="item">
                <h5 class="contact-key">个人微信号</h5>
                <p class="contact-value">x627862532</p>
              </li>
              <li class="item">
                <h5 class="contact-key">个人微信号</h5>
                <p class="contact-value">x627862532</p>
              </li>
              <li class="item">
                <h5 class="contact-key">个人微信号</h5>
                <p class="contact-value">x627862532</p>
              </li>
            </ul>
          </div>
        </section>
        <section class="section-wrapper">
          <div class="wrap-header">
            <div class="header-zone">
              <div class="icon-box">
                <i class="icon iconfont icon-wodekefu"></i>
              </div>
              <h2 class="title">联系方式</h2>
            </div>
            <a href="javascript:;" class="right-btn">获取完整联系方式</a>
          </div>
          <div class="contact-list-zone">
            <ul class="contact-list">
              <li class="item">
                <h5 class="contact-key">个人微信号</h5>
                <p class="contact-value">x627862532</p>
              </li>
              <li class="item">
                <h5 class="contact-key">个人微信号</h5>
                <p class="contact-value">x627862532</p>
              </li>
              <li class="item">
                <h5 class="contact-key">个人微信号</h5>
                <p class="contact-value">x627862532</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </scroll>
  </transition>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'

let test = {
  id: 1,
  name: '叶子1',
  portrait: 'http://thirdwx.qlogo.cn/mmopen/wehKMmibRCFPJAZar9ss19FAjh6fy2BQLcxm1ChHtuUgJicfMVP6rdKTZBu2Jvf2ZicOcged9eTom3BZnCX9maF31GKhe2VPkxk/132',
  title: '叶子飞翔创始人',
  intro: 'This rule should also check type of literal values and determine if types match.\nWhen variable is passed as default we should omit checking'
}
export default {
  name: 'PartnerDetail',
  data() {
    return {
      currentPartner: false,
      partnerInfo: test
    }
  },
  methods: {
    open() {
      this.currentPartner = true
    },
    close() {
      this.currentPartner = false
    },
    back() {
      this.$router.back();
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
  .partner-info {
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 30px
    background: #fff url(57b28a388991b_610.jpg) center center no-repeat
    -webkit-background-size: cover
    background-size: cover
    .avatar-zone {
      height: 62px
      flex: 0 0 62px
      .avatar {
        width: 60px
        height: 60px
        border: 1px solid #f2f2f2
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
      }
    }
    .name {
      margin-top: 15px
      font-size: $font-size-large
      font-weight: 600
      line-height: 1.5
      color: #fff
      no-wrap()
    }
    .title {
      margin-top: 11px
      font-size: $font-size-small
      line-height: 1.5
      color: #fff
      no-wrap()
    }
    .back-btn {
      position: absolute
      left: 0
      top: 0
      z-index: 10
      width: 44px
      height: 44px
      display: inline-flex
      align-items: center
      justify-content: center
      color: #000
      font-weight: 500
    }
  }
  .wrap-header {
    position: relative
    margin: 0 15px
    padding: 10px 0
    .right-btn {
      position: absolute
      right: 0
      top: 0
      bottom: 0
      z-index: 1
      margin: auto
      background-color: $color-theme
      display: inline-flex
      align-items: center
      justify-content: center
      padding: 0 10px
      height: 35px
      -webkit-border-radius: 5px
      -moz-border-radius: 5px
      border-radius: 5px
      font-size: $font-size-medium
      color: #fff
    }
    .header-zone {
      display: flex
      align-items: center
      height: 40px
      .title {
        font-size: $font-size-large
        color: $color-text
        line-height: 40px
      }
      .icon-box {
        margin-right: 8px
        width: 25px
        height: 25px
        display: inline-flex
        align-items: center
        justify-content: center
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        background-color: $color-theme
        .icon {
          color: #fff
        }
      }
    }
  }
  .section-wrapper {
    margin-bottom: 15px
    background-color: #fff
  }
  .contact-list {
    .item {
      margin-left: 10px
      display: flex
      align-items: center
      border-top: 1px solid $color-background
      height: 44px
      .contact-key {
        width: 30%
        font-size: $font-size-medium
        color: $color-text
      }
      .contact-value {
        flex: 1;
        font-size: $font-size-medium-x
        color: #999
      }
    }
  }
</style>
