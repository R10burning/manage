<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
    :collapse="showAll" background-color="#409EFF" text-color="#D8DFE6"
    active-text-color="#fff"
    >
      <el-submenu :key="index" :index="`'${index}'`" v-for="(item, index) in menuData" v-if="item.parent_id===0 && item.node">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.menu_name}}</span>
        </template>
        <!-- <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">
            <router-link :to="{path:'/test',query:{id:'fsdfsdfsfs'}}" tag="span">wocaoa</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1" @click="test">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isCollapse: false,
      menuData: null
    }
  },
  computed: mapState({
    showAll: store => store.showAll,
    apis: store => store.apis
  }),
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    test () {
      console.log(123)
    },
    async _getData () {
      this.menuData = await this.$store.dispatch('getData', {method: 'GET', url: this.apis.menu})
      console.log(this.menuData)
    }
  },
  mounted () {
    this._getData()
  }
}
</script>

<style lang="less">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item i,.el-submenu__title i,.el-menu-item-group__title{
 color: #D8DFE6;
}
</style>
