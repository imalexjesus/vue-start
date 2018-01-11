<template>
	<div id="app" class="uk-offcanvas-content">
		<Navigation/>
		<div class="uk-sticky-placeholder"></div>
		<div id="main" class="tm-main">
			<!--<router-view class="section0" :isScrollPage="isScrollPage"/>-->
			<!--<router-view class="section1" name="section1"/>-->
			<AboutProducts :isScrollPage="isScrollPage"/>
			<Why :isScrollPage="isScrollPage" class="section--bg-gray"/>
			<Sotrudniki/>
			<Faq class="section--bg-gray"/>
			<Sertificats/>
			<GdeKupit/>
		</div>
		<NavigationMobile/>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	import NavigationMobile from '@/components/Navigation--Mobile'
	import AboutProducts from '@/components/pages/AboutProducts'

	const PodrobneeOProdukcii = () => import('@/components/pages/PodrobneeOProdukcii')
	const Sotrudniki = () => import('@/components/pages/Sotrudniki')
	const Faq = () => import('@/components/pages/Faq')
	const Sertificats = () => import('@/components/pages/Sertificats')
	const GdeKupit = () => import('@/components/pages/GdeKupit')
	const Why = () => import('@/components/pages/Why')

	export default {
		name: 'app',
		components: {
			Navigation,
			NavigationMobile,
			AboutProducts,
			PodrobneeOProdukcii,
			Why,
			Sotrudniki,
			Faq,
			Sertificats,
			GdeKupit
		},
		data () {
			return {
				isScrollPage: true
			}
		}
	}
</script>