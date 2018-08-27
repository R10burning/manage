import * as types from './mutation-type.js'
import request from '../api'

export default {
  /* 改变数字 */
  changeCount ({commit}) {
    commit(types.CHANGE_COUNT)
  },
  /* 改变菜单 */
  changeMenu ({commit}) {
    commit(types.COLLAPSE_MENU)
  },
  /* 通用请求 */
  async getData ({commit}, {method = 'GET', url = '', data = {}}) {
    let res = await request(method, url, data)
    // await commit(types.GET_DATA, res)
    return res
  }
}
