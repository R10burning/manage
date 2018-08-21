<template>
  <div id="app">
    <div class="wrap">
      <div class="left">
        <left-menu/>
      </div>
      <div class="right">
        <div>
          <right-menu/>
        </div>
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
import RightMenu from './horizontalMenu'
export default {
  components: {
    leftMenu,
    RightMenu
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
      background-color: #409EFF;
    }
    .right{
      flex: 1;
    }
  }
}
</style>
