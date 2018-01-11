<template>
	<div id="app" class="uk-offcanvas-content">
		<Navigation/>
		<div class="uk-sticky-placeholder"></div>
		<div id="main" class="tm-main">
			<router-view class="section0" :isScrollPage="isScrollPage"/>
			<router-view class="section1" name="section1"/>
		</div>
		<NavigationMobile/>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	import NavigationMobile from '@/components/Navigation--Mobile'

	export default {
		name: 'app',
		components: {
			Navigation,
			NavigationMobile
		},
		data () {
			return {
				isScrollPage: true
			}
		}
	}
</script>