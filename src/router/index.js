import Vue from 'vue'
import Router from 'vue-router'

import '../styles/style.scss'
// import 'font-awesome/scss/font-awesome.scss'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

/***
 *  NORMAL LOAD
 */
import AboutProducts from '../components/AboutProducts'

import PodrobneeOProdukcii from '../components/PodrobneeOProdukcii'
import Sotrudniki from '../components/Sotrudniki'
import Faq from '../components/Faq'
import Sertificats from '../components/Sertificats'
import GdeKupit from '../components/GdeKupit'
import Why from '../components/Why'
// import Test from '../components/Test'

/***
 * LAZY LOAD
 */
// const AboutProducts = resolve => require(['../components/AboutProducts'], resolve)
/*
const PodrobneeOProdukcii = resolve => require(['../components/PodrobneeOProdukcii'], resolve)
const Sotrudniki = resolve => require(['../components/Sotrudniki'], resolve)
const Faq = resolve => require(['../components/Faq'], resolve)
const Sertificats = resolve => require(['../components/Sertificats'], resolve)
const GdeKupit = resolve => require(['../components/GdeKupit'], resolve)
const Why = resolve => require(['../components/Why'], resolve)
*/

// loads the Icon plugin
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
	{path: '/gde-kupit', component: GdeKupit}
	// { path: '/test', component: Test }
]

Vue.use(Router)

export default new Router({
	routes: RoutesMaps,
	mode: 'history',
	linkActiveClass: 'uk-active',
	props: ['isScrollPage']
})
