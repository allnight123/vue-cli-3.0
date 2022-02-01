import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import StatusComponents from './Status.vue'     // 새로운 컴포넌트 등록시 

Vue.component('AppStatus', StatusComponents)    // 새로운 컴포넌트 등록시 
                                                // 이렇게 등록 하면 전역에서 사용가능하다.

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
