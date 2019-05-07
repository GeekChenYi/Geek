import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import user from './module/user'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    user
  }
})
