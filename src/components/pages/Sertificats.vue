<template>
	<article class="first-section">
		<section class="uk-section uk-flex uk-flex-column uk-flex-middle uk-container uk-light" uk-height-viewport="offset-top: true; offset-bottom: true;">
			<h1 class="uk-margin-large-bottom">Сертификаты</h1>


			<div class="uk-child-width-1-4@s uk-margin-large-bottom uk-text-center" uk-grid uk-lightbox="animation: slide">
				<div>
					<a class="uk-inline" href="../../assets/null-images/image.png" caption="Caption 1">
						<img src="../../assets/null-images/image.png" width="160" alt=""> </a>
				</div>
				<div>
					<a class="uk-inline" href="../../assets/null-images/image.png" caption="Caption 2">
						<img src="../../assets/null-images/image.png" width="160" alt=""> </a>
				</div>
				<div>
					<a class="uk-inline" href="../../assets/null-images/image.png" caption="Caption 3">
						<img src="../../assets/null-images/image.png" width="160" alt=""> </a>
				</div>
				<div>
					<a class="uk-inline" href=".ю/assets/null-images/image.png" caption="Caption 3">
						<img src="../../assets/null-images/image.png" width="160" alt=""> </a>
				</div>
			</div>


		</section>
		<WarningBlock/>

	</article>
</template>

<script>
	import WarningBlock from './WarningBlock'

	export default {
		name: 'Sertificats',
		components: {
			WarningBlock
		}
	}
</script>