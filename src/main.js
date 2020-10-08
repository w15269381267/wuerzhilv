// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wcSwiper from 'wc-swiper';
import 'wc-swiper/style.css';
import axios from 'axios';
import BaiduMap from 'vue-baidu-map';

Vue.prototype.axios = axios
Vue.use(wcSwiper);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(BaiduMap, {
  ak: 'X2gHGIDQrBOsHqBXxzAG46FSTpbXXZVM'
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
router.afterEach((to, from, next) => {
  	  window,
  	    scrollTo(0, 0)
})
