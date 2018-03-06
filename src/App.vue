<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import TabBar from 'components/tab-bar/tab-bar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
  #app {
    padding-bottom: 55px;
  }
</style>
