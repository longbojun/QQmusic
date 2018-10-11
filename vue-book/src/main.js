// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 文件夹router下面的index.js文件夹好像可以省略，其他的的不能
import router from './router'

Vue.config.productionTip = false;
//轮播图，开始放到了base/Swiper中，考虑到其他地方的使用，所以放到main中，供全局使用
var VueAwesomeSwiper = require('vue-awesome-swiper')
Vue.use(VueAwesomeSwiper);
// import  'swiper/dist/css/swiper.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  //用的runtime + compiler：所以支持template（render问题）
  template: '<App/>'
});
