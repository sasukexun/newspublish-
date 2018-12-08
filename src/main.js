import Vue from 'vue';
import App from './App';
import router from './router';
import resource from './resource';//通过import引入

//全局配置处
Vue.config.productionTip = false;
Vue.config.silent = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,//通过import引入，然后在这里调用
  components: { App },
  template: '<App/>'
});
