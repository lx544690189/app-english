// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css'
import './assets/css/main.css'
import mComponents from './components'
import './assets/js/utiles'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(mComponents)
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
	NProgress.start()
	setTimeout(() =>{
    scrollTo(0,0)
    next()
  }, 100);
})
router.afterEach(transition => {
	NProgress.done()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
