// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import * as $http from './requests';

Vue.config.productionTip = false
Vue.prototype.$http = $http;
// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

Vue.use(ElementUI);

// 全局导航守卫
// router.beforeEach((to, from, next) => {
//   if(to.path === "/backstageHome") {  // 如果要去登录页面，直接放行
//     next();   
//   } else {
//     if(to.meta.isAuthRequired && store.state.isLogin === false) {   // 如果要去的页面需要验证登录并且当前用户没有登录,回到之前页面
//       next('/backstageHome')
//     } else {
//       next();
//     }
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
