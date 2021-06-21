import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import { directive } from "../libs/index"
import { directive as hsDirective } from "./assets/js/vueHorizontalScreen";

Vue.config.productionTip = false
Vue.directive('disabled-body-scroll', { ...directive });
Vue.directive("horizontal-screen", { ...hsDirective });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
