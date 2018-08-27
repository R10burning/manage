import * as types from './mutation-type.js'

export default {
  [types.CHANGE_COUNT] (state) {
    state.count++
  },
  [types.COLLAPSE_MENU] (state) {
    state.showAll = !state.showAll
  },
  [types.GET_DATA] (state, res) {
    state.data = res
  }
}
