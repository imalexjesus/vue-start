import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HomePage'
import Test from '../components/Test'

import '../styles/style.scss'
import 'font-awesome/scss/font-awesome.scss'

const MyRoutes = [
	{ path: '/', component: HelloWorld },
	{ path: '/test', component: Test }
]

Vue.use(Router)

export default new Router({
	routes: MyRoutes,
	mode: 'history',
	linkActiveClass: 'uk-active'
})
