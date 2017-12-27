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
// const AboutProducts = resolve => require(['@/components/AboutProducts'], resolve)

const PodrobneeOProdukcii = resolve => require(['@/components/pages/PodrobneeOProdukcii'], resolve)
const Sotrudniki = resolve => require(['@/components/pages/Sotrudniki'], resolve)
const Faq = resolve => require(['@/components/pages/Faq'], resolve)
const Sertificats = resolve => require(['@/components/pages/Sertificats'], resolve)
const GdeKupit = resolve => require(['@/components/pages/GdeKupit'], resolve)
const Why = resolve => require(['@/components/pages/Why'], resolve)
const Test = resolve => require(['@/components/pages/components/Test'], resolve)

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
	{path: '/gde-kupit', component: GdeKupit},
	{path: '/test', component: Test}
]

Vue.use(Router)

export default new Router({
	routes: RoutesMaps,
	mode: 'history',
	linkActiveClass: 'uk-active',
	props: ['isScrollPage']
})
