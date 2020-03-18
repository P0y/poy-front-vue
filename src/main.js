import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// global component registration
import '@/components/_global.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
