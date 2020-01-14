import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';

import App from './App.vue';

import router from './router';

Vue.use(VueRouter);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
