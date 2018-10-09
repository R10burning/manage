<!--  -->
<template>
  <div>
    <!-- <left-menu :menuData="menuData" v-if="menuData.length"/> -->
  </div>
</template>

<script>
import leftMenu from './leftMenu'
import { mapState } from 'vuex'

export default {
  components: {
    leftMenu
  },
  data () {
    return {
      menuData: []
    }
  },
  computed: {
    ...mapState(['showAll', 'apis'])
  },
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
      this.menuData = await this.$store.dispatch('getData', {method: 'post', url: '/api/auth/oauth/token', data: {username: 'admin', password: 123456, grant_type: 'password'}})
      console.log(this.menuData)
    }
  },
  mounted () {
    this._getData()
  }
}

</script>
<style lang='less' scoped>
</style>
