<!--  -->
<template>
  <div>
    <div>{{this.addCount}}</div>
    <a href="#" @click="changeCount(123)">123</a>
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
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters(['addCount'])
  },

  mounted () {
  },

  methods: {
    ...mapMutations(['CHANGE_COUNT']),
    ...mapActions(['changeCount'])
  }
}

</script>
