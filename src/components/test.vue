<!--  -->
<template>
  <div>
    <div>{{this.addCount}}</div>
    <a href="#">123</a>
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
  }

  // methods: {
  //   // show () {
  //   //   console.log(this.$route.query.id)
  //   // },
  //   // add () {
  //   //   this.$store.commit('increment')
  //   // }
  // }
}

</script>
