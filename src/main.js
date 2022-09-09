import Vue from "vue"; // ES6  导入方式
import App from "./App.vue"; // 导入根组件App
import router from "./router";
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


