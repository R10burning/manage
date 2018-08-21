import * as types from './mutation-type.js'

export default {
  nameAsync ({commit}) {
    commit(types.CHANGE_COUNT)
    commit(types.COLLAPSE_MENU)
  }
}
