import * as types from './mutation-type.js'

export default {
  /* 改变数字 */
  changeCount ({commit}) {
    commit(types.CHANGE_COUNT)
  },
  /* 改变菜单 */
  changeMenu ({commit}) {
    commit(types.COLLAPSE_MENU)
  }
}
