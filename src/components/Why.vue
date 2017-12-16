<template>
<article >
	<section class="uk-section bg-orange uk-flex uk-flex-column uk-flex-middle uk-light" uk-height-viewport="offset-bottom: 174px;">
		<h1 class="uk-margin-large-bottom">Почему мамы нам доверяют</h1>

		<div class="uk-container uk-text-left uk-light uk-margin-large-bottom">
			<!-- безопасность -->
			<div class="uk-grid " uk-grid>
				<div class="uk-width-auto">
					<img src="../assets/null-images/image.png" style="height: 60px" alt="">
				</div>
				<div class="uk-width-auto">
					<h3 class="uk-margin-remove-bottom">Нас выбирают</h3>
					<p class="uk-margin-remove-top">Текст</p>
				</div>
			</div>
			<!-- Натуральные компоненты -->
			<div class="uk-grid-medium uk-flex-middle" uk-grid>
				<div class="uk-width-auto">
					<img src="../assets/null-images/image.png" style="height: 60px" alt="">
				</div>
				<div class="uk-width-auto">
					<h3 class="uk-margin-remove-bottom">Натуральный состав</h3>
					<p class="uk-margin-remove-top">Текст</p>
				</div>
			</div>
			<!-- безопасность -->
			<div class="uk-grid-medium uk-flex-middle" uk-grid>
				<div class="uk-width-auto">
					<img src="../assets/null-images/image.png" style="height: 60px" alt="">
				</div>
				<div class="uk-width-auto">
					<h3 class="uk-margin-remove-bottom">Сертификаты соответствия</h3>
					<p class="uk-margin-remove-top uk-article-meta">Текст</p>
				</div>
			</div>
			<!-- безопасность -->
			<div class="uk-grid-medium uk-flex-middle" uk-grid>
				<div class="uk-width-auto">
					<img src="../assets/null-images/image.png" style="height: 60px" alt="">
				</div>
				<div class="uk-width-auto">
					<h3 class="uk-margin-remove-bottom">Для самых маленьких</h3>
					<p class="uk-margin-remove-top">Текст</p>
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