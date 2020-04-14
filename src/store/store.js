import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getter'
import actions from './actions'

// 声明使用Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
