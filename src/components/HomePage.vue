<template>
	<div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow autoplay>

		<ul class="uk-slideshow-items">
			<li>
				<img uk-parallax="bgy: -200" src="https://getuikit.com/docs/images/light.jpg" alt="" uk-cover>
			</li>
			<li>
				<img src="https://getuikit.com/docs/images/dark.jpg" alt="" uk-cover>
			</li>
			<li>
				выфввыфыв
			</li>
		</ul>

		<a class="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
		<a class="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

	</div>
</template>

<script>
	export default {
		name: 'StartPage'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
