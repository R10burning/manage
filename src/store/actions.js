import * as types from './mutation-type.js'

export default {
  /* 改变数字 */
  changeCount ({commit}, a) {
    commit(types.CHANGE_COUNT)
    console.log(a)
  },
  /* 改变菜单 */
  changeMenu ({commit}) {
    commit(types.COLLAPSE_MENU)
  }
}
