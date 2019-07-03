import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 使用vuex和localStorage来存储数据
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo'))
}

const mutations = {
  SAVE_USERINFO: (state, userinfo) => {
    localStorage.setItem('useinfo', JSON.stringify(userinfo))
    state.userinfo = userinfo
  }
}

console.log(state)
export default new Vuex.Store({
  state,
  mutations
})
