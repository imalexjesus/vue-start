import Vue from 'vue'
import Router from 'vue-router'

import '@/styles/style.scss'
// import 'font-awesome/scss/font-awesome.scss'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

/***
 *  NORMAL LOAD
 */
import AboutProducts from '@/components/pages/AboutProducts'
/*
import PodrobneeOProdukcii from '@/components/pages/PodrobneeOProdukcii'
import Sotrudniki from '@/components/pages/Sotrudniki'
import Faq from '@/components/pages/Faq'
import Sertificats from '@/components/pages/Sertificats'
import GdeKupit from '@/components/pages/GdeKupit'
import Why from '@/components/pages/Why' */

/***
 * LAZY LOAD
 */
// const AboutProducts = () => import('../components/AboutProducts')

const PodrobneeOProdukcii = () => import('../components/pages/PodrobneeOProdukcii')
const Sotrudniki = () => import('../components/pages/Sotrudniki')
const Faq = () => import('../components/pages/Faq')
const Sertificats = () => import('../components/pages/Sertificats')
const GdeKupit = () => import('../components/pages/GdeKupit')
const Why = () => import('../components/pages/Why')
const Test = () => import('../components/pages/Test') // loads the Icon plugin
UIkit.use(Icons)

const RoutesMaps = [
	{
		path: '/',
		components: {
			default: AboutProducts,
			section1: Why
		}
	},
	{path: '/why', component: Why},
	{path: '/podrobnee-o-produkcii', component: PodrobneeOProdukcii},
	{path: '/sotrudniki', component: Sotrudniki},
	{path: '/faq', component: Faq},
	{path: '/sertificats', component: Sertificats},
	{path: '/gde-kupit', component: GdeKupit},
	{path: '/test', component: Test}
]

Vue.use(Router)

export default new Router({
	scrollBehavior: function (to, from, savedPosition) {
		if (to.hash) {
			return {selector: to.hash}
		} else {
			return {x: 0, y: 0}
		}
	},
	routes: RoutesMaps,
	mode: 'history',
	linkActiveClass: 'uk-active'
})
