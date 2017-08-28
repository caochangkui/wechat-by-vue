import Vue from 'vue'
import Vuex from 'vuex'

// 把store下的所有文件全部import进来“import * as”是一种特殊语法
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'  // vuex的插件，可在控制台打印一个log日志，显示state做了哪些修改

Vue.use(Vuex)  // 注册插件vuex

const debug = process.env.NODE_ENV !== 'production'  // 开发时使用的模式，上线时就不用了

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
