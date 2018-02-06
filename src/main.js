// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './css/common.css'
import './css/iconfont.css'
import mock from './apis/mock'

import routes from './config/routes'
import App from './App'
import splitting from './modules/code-splitting-demo'
import VueI18n from 'vue-i18n'

Vue.use(VueRouter) //路由注册
Vue.use(ElementUI) //UI框架注册
Vue.use(VueResource)
Vue.use(VueI18n)
console.log(VueI18n);
const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./common/lang/zh'),   // 中文语言包
      'en-US': require('./common/lang/en')    // 英文语言包
    }
})

const router = new VueRouter({
  routes
})

router.beforeEach(({meta, path}, from, next) => {
  let {auth = true} = meta
  let isLogin = Boolean(store.state.login.tokens != '') //true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
    return next({path: '/login'})
  }

  if (isLogin && (path == '/login' || path == '/')) { //已登录过，则跳转到主页
    return next({path: '/home/page1'})
  }

  next()
})

mock.start() //启动ajax mock服务

splitting.start() //demo：运行webpack2 code splitting示例


new Vue({
  el: '#app',
  i18n,  // 不要忘记
  router,
  store,
  render: h => h(App)
});
