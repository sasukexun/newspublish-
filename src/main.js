import Vue from 'vue';
import App from './App';
import router from './router';
import resource from './resource';//通过import引入
import store from './vuex/index'
import './assets/js/rem'
//监听点击事件
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,//通过import引入，然后在这里调用
  store,
  components: { App },
  template: '<App/>'
});
