<template>
	<article class="first-section" >

		<section class="uk-section uk-flex uk-flex-column uk-flex-middle uk-container uk-dark" uk-scrollspy="cls: uk-animation-slide-right; target: > h1; delay: 300; repeat: false">
			<h1 class="uk-margin-large-bottom">Почему мамы нам доверяют</h1>

			<div class="uk-width-1-2@s uk-flex uk-flex-column" uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 400; repeat: false">
				<!-- безопасность -->
				<div class="uk-margin uk-flex">
					<div class="uk-margin-right uk-width-auto">
						<img src="../assets/null-images/image.png" style="height: 60px" alt="">
					</div>
					<div class="uk-width-expand">
						<h3 class="uk-margin-remove-bottom">Нас выбирают</h3>
						<p class="uk-margin-remove-top">В 2017 на территории ЕС и СНГ продано более 3 450 000 упаковок продукции</p>
					</div>
				</div>

				<!-- Натуральные компоненты -->
				<div class="uk-margin uk-flex">
					<div class="uk-margin-right uk-width-auto">
						<img src="../assets/null-images/image.png" style="height: 60px" alt="">
					</div>
					<div class="uk-width-expand">
						<h3 class="uk-margin-remove-bottom">Натуральный состав</h3>
						<p class="uk-margin-remove-top">Наша продукция создается из высококачественного натурального сырья</p>
					</div>
				</div>
				<!-- безопасность -->
				<div class="uk-margin uk-flex">
					<div class="uk-margin-right uk-width-auto">
						<img src="../assets/null-images/image.png" style="height: 60px" alt="">
					</div>
					<div class="uk-width-expand">
						<h3 class="uk-margin-remove-bottom">Сертификаты соответствия</h3>
						<p class="uk-margin-remove-top uk-article-meta">Вся продукция сертифицирована на территории Украины, ЕС и СНГ</p>
					</div>
				</div>
				<!-- безопасность -->
				<div class="uk-margin uk-flex">
					<div class="uk-margin-right uk-width-auto">
						<img src="../assets/null-images/image.png" style="height: 60px" alt="">
					</div>
					<div class="uk-width-expand">
						<h3 class="uk-margin-remove-bottom">Для самых маленьких</h3>
						<p class="uk-margin-remove-top">Безопасен для детей от 3 лет</p>
					</div>
				</div>
			</div>

		</section>

		<WarningBlock/>
	</article>
</template>

<script>
	import WarningBlock from '../components/WarningBlock'

	export default {
		name: 'Faq',
		components: {
			WarningBlock
		}
	}
</script>

<style scoped>

</style>