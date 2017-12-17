<template>
	<article>
		<section class="first-section uk-section-small uk-section uk-flex" uk-height-viewport="offset-top: true; offset-bottom: true;">

			<div class="uk-container uk-width-1-2 uk-light">
				<h2 class="uk-heading-divider">Ваш ребенок простыл?<br/> Ребенок часто болеет?
					<br/>Сопли и кашель у ребенка?</h2>
				<h5 class="uk-margin-remove-top">Серия натуральных препаратов, которые быстро поднимут Вашего ребенка на ноги</h5>

				<div class="uk-container">
					<!-- безопасность -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<div class="uk-border-circle" style="background: gray; width: 40px; height: 40px"></div>
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Безопасность</h3>
							<p class="uk-margin-remove-top">Разрешен к применению для детей от 3лет. Без спирта и ГМО.</p>
						</div>
					</div>
					<!-- Натуральные компоненты -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<div class="uk-border-circle" style="background: gray; width: 40px; height: 40px"></div>
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Натуральные компоненты</h3>
							<p class="uk-margin-remove-top">Разрешен к применению для детей от 3лет. Без спирта и ГМО.</p>
						</div>
					</div>
					<!-- безопасность -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<div class="uk-border-circle" style="background: #cdcdcd; width: 40px; height: 40px"></div>
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Безопасность</h3>
							<p class="uk-margin-remove-top uk-article-meta">Разрешен к применению для детей от 3лет. Без спирта и ГМО.</p>
						</div>
					</div>
					<!-- безопасность -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<div class="uk-border-circle" style="background: gray; width: 40px; height: 40px"></div>
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Безопасность</h3>
							<p class="uk-margin-remove-top">Разрешен к применению для детей от 3лет. Без спирта и ГМО.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="uk-container uk-light" style="width: 510px">
				<div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="min-height: 510; max-height: 510; autoplay autoplay: true;">
					<ul class="uk-slideshow-items">
						<li><img src="../assets/all-products-together@510x510.png" uk-cover></li>
						<li><img src="../assets/olefar-liquid@510x510.png"></li>
						<li><img src="../assets/alvin-liquid@510x510.png"></li>
						<li><img src="../assets/sinorm-pills@510x510.png"></li>
						<li><img src="../assets/sinorm-liquid@510x510.png"></li>
					</ul>

					<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
					<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

					<ul class="uk-dotnav uk-flex-center uk-margin">
						<li uk-slideshow-item="0"><a href="#">Item 1</a></li>
						<li uk-slideshow-item="1"><a href="#">Item 2</a></li>
						<li uk-slideshow-item="2"><a href="#">Item 3</a></li>
						<li uk-slideshow-item="3"><a href="#">Item 4</a></li>
						<li uk-slideshow-item="4"><a href="#">Item 5</a></li>
					</ul>
				</div>
			</div>


		</section>

		<WarningBlock/>
	</article>
</template>

<script>
	import WarningBlock from '../components/WarningBlock'

	export default {
		name: 'FullPage',
		components: {
			WarningBlock
		}
	}
</script>

<style lang="scss" scoped>
	.first-section {
		background: $color-olifar;
	}

</style>