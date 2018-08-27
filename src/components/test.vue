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

export default {
  data () {
    return {
      totla: 0
    }
  },

  components: {},

  computed: {
    ...mapState(['count', 'apis', 'types']),
    ...mapGetters(['addCount'])
  },

  mounted () {
    // this.getData({method: 'GET', url: this.apis.test})
  },

  methods: {
    // ...mapMutations(['CHANGE_COUNT']),
    ...mapActions(['changeCount', 'getData'])
  }
}

</script>
