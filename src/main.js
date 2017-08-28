import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueResource from 'vue-resource'

import './common/style.css' // 这里需要引入基本的样式

// /* eslint-disable no-unused-vars */  // 这一句必须写，用来规避ES6的语法检测
// import vConsole from 'vconsole'  // 针对手机网页的前端 console 调试面板
// console.log('test')

Vue.use(MintUI)

Vue.use(VueLazyLoad, {
  loading: require('./assets/lazy.png')
})

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
