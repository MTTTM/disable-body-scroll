import Vue from 'vue'
import App from './App.vue'
// import {directive} from "../libs/index"
// import {directive} from "../dist/index.es.min.js"
// import {directive} from "disable-body-scroll"
let D  = require("disable-body-scroll");
console.log("D",D)
Vue.config.productionTip = false
Vue.directive('disabled-body-scroll',{...D.directive});
new Vue({
  render: h => h(App),
}).$mount('#app')
