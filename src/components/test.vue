<!--  -->
<template>
  <div>
    <div>{{this.addCount}}</div>
    <a href="#" @click="changeCount(123)">123</a>
    <div>{{count}}</div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'
import request from '../../api'

export default {
  data () {
    return {
      totla: 0
    }
  },

  components: {},

  computed: {
    ...mapState(['count']),
    ...mapGetters(['addCount'])
  },

  mounted () {
    request('Get', '/api')
  },

  methods: {
    ...mapMutations(['CHANGE_COUNT']),
    ...mapActions(['changeCount'])
  }
}

</script>
