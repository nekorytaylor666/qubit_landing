import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFullPage from 'vue-fullpage.js';
import 'normalize.css'; // Note this
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
