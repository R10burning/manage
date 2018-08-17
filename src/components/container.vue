<template>
  <div id="app">
    <div class="wrap">
      <div class="left">
        <left-menu/>
      </div>
      <div class="right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import '../static/css/reset.css'
import leftMenu from './leftMenu'
export default {
  components: {
    leftMenu
  }
}
</script>
<style lang="less" scoped>
#app{
  height: 100%;
  .wrap{
    min-height: 100%;
    display: flex;
    .left{
      max-width: 200px;
    }
    .right{
      flex: 1;
    }
  }
}
</style>
