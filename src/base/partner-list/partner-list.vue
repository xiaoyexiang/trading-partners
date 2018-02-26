<template>
  <ul class="list-wrapper">
    <li class="item" v-for="(item, index) in data" :key="index">
      <a class="partner-wrapper" href="javascript:;" @click.prevent.stop="selectItem(item)">
        <div class="avatar-zone">
          <img class="avatar" :src="item.portrait" alt="">
        </div>
        <div class="right-main">
          <div class="top">
            <h2>{{item.name}}</h2>
            <span class="title">{{item.title}}</span>
          </div>
          <div class="bottom">{{item.intro}}</div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
let test = [
  {
    id: 1,
    name: '叶子1',
    portrait: 'http://thirdwx.qlogo.cn/mmopen/wehKMmibRCFPJAZar9ss19FAjh6fy2BQLcxm1ChHtuUgJicfMVP6rdKTZBu2Jvf2ZicOcged9eTom3BZnCX9maF31GKhe2VPkxk/132',
    title: '叶子飞翔创始人',
    intro: 'This rule should also check type of literal values and determine if types match.\nWhen variable is passed as default we should omit checking'
  },
  {
    id: 2,
    name: '叶子2',
    portrait: 'http://thirdwx.qlogo.cn/mmopen/wehKMmibRCFPJAZar9ss19FAjh6fy2BQLcxm1ChHtuUgJicfMVP6rdKTZBu2Jvf2ZicOcged9eTom3BZnCX9maF31GKhe2VPkxk/132',
    title: '叶子飞翔创始人',
    intro: 'This rule should also check type of literal values and determine if types match.\nWhen variable is passed as default we should omit checking'
  }
]
export default {
  name: 'partnerList',
  props: {
    data: {
      type: Array,
      default() {
        // return []
        return test
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .list-wrapper {
    background-color: #fff
    .item {
    }
  }
  .partner-wrapper {
    position: relative
    display: flex
    padding: 15px
    &::after {
      content: ''
      position: absolute
      left: 15px
      bottom: 0
      right: 0
      z-index: 1
      margin: auto
      height: 1px
      background-color: $color-background-d
    }
    .avatar-zone {
      margin-right: 15px
      width: 64px
      flex: 0 0 64px
      .avatar {
        width: 64px
        height: 64px
      }
    }
    .right-main {
      flex: 1
      overflow: hidden
      .top {
        margin-bottom: 10px
        h2 {
          margin-right: 8px
          display: inline-block
          max-width: 50%
          font-size: $font-size-large
          font-weight: 500
          color: $color-text
          no-wrap()
        }
        .title {
          display: inline-block
          max-width: 50%
          no-wrap()
          font-size: $font-size-small
        }
      }
      .bottom {
        font-size: $font-size-medium
        line-height: 1.3
        multi-line(2)
      }
    }
  }
</style>
