<template>
  <div>
    <el-menu default-active="3" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
    :collapse="showAll" background-color="#409EFF" text-color="#D8DFE6" :unique-opened="true" :router="true"
    active-text-color="#fff"
    >
      <!-- <el-submenu :key="index" :index="`'${index}'`" v-for="(item, index) in menuData" v-if="item.parent_id===0 && item.node">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.menu_name}}</span>
        </template>
        <el-menu-item-group v-for="(son, index_1) in item.node" v-if="!son.node && item.node" :key='index_1+"-1"' >
          <span slot="title">{{`分组${index_1+1}`}}</span>
          <el-menu-item :index="`'${index_1}'-1`">
            <router-link :to="{path:'/test',query:{id:'fsdfsdfsfs'}}" tag="span">{{son.menu_name}}</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1" @click="test">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item :index="`'${index}'`" v-for="(son, index) in menuData" :key="index" v-if="!son.node && son.parent_id === 0">
        <i class="el-icon-menu"></i>
        <span slot="title">{{son.menu_name}}</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>-->
      <template v-for="(value) in menuData">
            <el-submenu :index="`${value.id}`" v-if="value.node" :key="value.id">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{value.menu_name}}</span>
                </template>
                <leftMenu :menuData="value.node"></leftMenu>
            </el-submenu>
            <el-menu-item :index="`${value.id}`" v-else :key="value.id">
                <i class="el-icon-document"></i>
                <span slot="title">{{value.menu_name}}</span>
            </el-menu-item>
        </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    menuData: {
      type: Array,
      required: true
    }
  },
  name: 'leftMenu',
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState(['showAll'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    console.log(this.menuData)
  }
}
</script>

<style lang="less">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-submenu.is-opened li{
 background-color:rgba(0, 0, 0, .2) !important;
  &{
    div{
 background-color:rgba(0, 0, 0, .2) !important;
    }
  }
}
.el-menu-item i,.el-submenu__title i{
 color: #D8DFE6;
}
</style>
