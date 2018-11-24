import Vue from 'vue';
import App from './App';
import router from './router';
import resource from './resource';//通过import引入

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,//通过import引入，然后在这里调用
  components: { App },
  template: '<App/>'
});
