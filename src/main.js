import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import { directive } from "../libs/index"
import { directive as hsDirective, directiveForDom } from "./assets/js/vueHorizontalScreen";
import VConsole from 'vconsole';
Vue.config.productionTip = false
Vue.directive('disabled-body-scroll', { ...directive });
Vue.directive("horizontal-screen", { ...hsDirective });
Vue.directive("hs-swipe", { ...directiveForDom });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
new VConsole();