import Vue from 'vue'
import Router from 'vue-router'

import AboutProducts from '../components/AboutProducts'
import PodrobneeOProdukcii from '../components/PodrobneeOProdukcii'
import Why from '../components/Why'
import Sotrudniki from '../components/Sotrudniki'
import Faq from '../components/Faq'
import Sertificats from '../components/Sertificats'
import GdeKupit from '../components/GdeKupit'
import Test from '../components/Test'

import '../styles/style.scss'
import 'font-awesome/scss/font-awesome.scss'

const MyRoutes = [
	{ path: '/', component: AboutProducts },
	{ path: '/why', component: Why },
	{ path: '/podrobnee-o-produkcii', component: PodrobneeOProdukcii },
	{ path: '/sotrudniki', component: Sotrudniki },
	{ path: '/faq', component: Faq },
	{ path: '/sertificats', component: Sertificats },
	{ path: '/gde-kupit', component: GdeKupit },
	{ path: '/test', component: Test }
]

Vue.use(Router)

export default new Router({
	routes: MyRoutes,
	mode: 'history',
	linkActiveClass: 'uk-active'
})
