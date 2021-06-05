import Vue from 'vue'
import App from './App.vue'
// import {directive} from "../libs/index"
import {directive} from "disable-body-scroll"
Vue.config.productionTip = false
Vue.directive('disabled-body-scroll',{...directive});
new Vue({
  render: h => h(App),
}).$mount('#app')
