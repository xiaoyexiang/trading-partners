<template>
  <div class="page-wrapper">
    <div>
      <div class="search-wrapper">
        <header class="search-bar">
          <div class="input-box">
            <input type="search" placeholder="请输入关键字">
          </div>
          <a class="search-btn" href="javascript:;"><i class="icon iconfont icon-sousuo"></i></a>
        </header>
      </div>
      <div class="result-wrapper">
        <partner-list @select="selectPartner"></partner-list>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import PartnerList from 'base/partner-list/partner-list'
// import PartnerDetail from 'components/partner-detail/partner-detail'

export default {
  name: 'Search',
  data() {
    return {
      keyword: '叶子'
    }
  },
  methods: {
    selectPartner(item) {
      console.log(item)
      this.$router.push({
        path: `/search/${item.id}`
      })
    }
  },
  components: {
    PartnerList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/variable"
.search-bar {
  display: flex;
  align-items: center;
  padding: 5px 0 5px 15px
  margin-bottom: 15px
  background-color: #fff
  .input-box {
    flex: 1;
    input {
      display: block
      height: 35px
      width: 100%
      padding: 0 10px
      background-color: $color-background-d
      border-radius: 3px
      outline: none
      -webkit-appearance: none
      -moz-appearance: none
      appearance: none
      font-size: $font-size-medium-x
      color: $color-text
    }
  }
  .search-btn {
    position: relative
    display: block
    width: 44px
    height: 44px
    margin-left: 10px
    .icon {
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      margin: auto
      display: flex
      align-items: center
      justify-content: center
      color: $color-theme
    }
  }
}
</style>
