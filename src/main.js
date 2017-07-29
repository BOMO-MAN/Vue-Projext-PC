// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import Index from './pages/index'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Index
		}
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
 	router,
  template: '<Layout/>',
  components: { Layout }
})
