<template>
	<article>
		<section class="uk-section bg-orange uk-flex uk-flex-column uk-flex-middle uk-light" uk-height-viewport="offset-top: true; offset-bottom: true;">
			<h1 class="uk-margin-large-bottom">Наши сотрудники</h1>

			<div class="uk-grid-small uk-flex-center uk-child-width-1-3@s" uk-grid>
				<div class="uk-card uk-text-center">
					<div class="uk-card-media-top uk-text-center">
						<img src="../assets/null-images/elliot.jpg" width="200" alt="">
					</div>
					<div class="uk-card-body">
						<h3 class="uk-card-title">Имя Фамилия</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
				</div>

				<div class="uk-card  uk-text-center">
					<div class="uk-card-media-top">
						<img src="../assets/null-images/steve.jpg" width="200" alt="">
					</div>
					<div class="uk-card-body">
						<h3 class="uk-card-title">Имя Фамилия</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
				</div>

				<div class="uk-card  uk-text-center">
					<div class="uk-card-media-top">
						<img src="../assets/null-images/elyse.png" width="200" alt="">
					</div>
					<div class="uk-card-body">
						<h3 class="uk-card-title">Имя Фамилия</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
				</div>


			</div>
			<button class="uk-button uk-button-default uk-margin-small-bottom">Задать вопрос представителю компании</button>
		</section>

		<WarningBlock/>
	</article>
</template>

<script>
	import WarningBlock from '../components/WarningBlock'

	export default {
		name: 'Sotrudniki',
		components: {
			WarningBlock
		}
	}
</script>

<style scoped>

</style>