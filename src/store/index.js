import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import * as getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: debug ? [createLogger()] : []
})

export default store
