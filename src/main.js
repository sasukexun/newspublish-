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

if (module.hot) {
  module.hot.accept();
}

//全局配置处
Vue.config.productionTip = false;
//13代表的是按键数字（enter）
Vue.config.keyCodes.nishigesha = 13
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,//通过import引入，然后在这里调用
  store,
  components: { App },
  template: '<App/>'
});
