<template>
	<article class="first-section uk-light">
		<section class="uk-section uk-container uk-flex uk-flex-center uk-flex-wrap" uk-height-viewport="offset-top: true; offset-bottom: true;">

			<div class="uk-width-1-2@m">
				<h2 class="uk-heading-divider uk-text-uppercase">Ваш ребенок простыл?<br/> Ребенок часто болеет?<br/>Сопли и кашель у ребенка?</h2>

				<h5 class="uk-margin-remove-top uk-text-primary">Серия натуральных препаратов, которые быстро поднимут Вашего ребенка на ноги</h5>

				<div class="uk-container">

					<!-- Безопасность -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<!--<div  style="background: gray; width: 40px; height: 40px"></div>-->
							<img src="../../assets/4-icons/health-insurance.svg" width="40" height="40">
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Безопасность</h3>
							<p class="uk-margin-remove-top">Разрешен к применению для детей от 3лет. Без спирта и ГМО.</p>
						</div>
					</div>

					<!-- Натуральные компоненты -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<img src="../../assets/4-icons/herbs-leaves-for-natural-spa-treatment-svgrepo-com.svg" width="40" height="40">
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Натуральные компоненты</h3>
							<p class="uk-margin-remove-top">В составе масла прополиса, календулы, тимьяна и другие.</p>
						</div>
					</div>

					<!-- Европейское качество -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<img src="../../assets/4-icons/eu-qual.svg" width="40" height="40">
						</div>

						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Европейское качество</h3>
							<p class="uk-margin-remove-top uk-article-meta">Продукция производится в ЕС.</p>
						</div>
					</div>

					<!-- Доступность -->
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<img src="../../assets/4-icons/dostupnost.svg" width="40" height="40">
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-margin-remove-bottom">Доступность</h3>
							<p class="uk-margin-remove-top">В наличии в ближайшей аптеке.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="uk-width-1-2@m">
				<div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="min-height: 510; max-height: 510; autoplay: true;">
					<ul class="uk-slideshow-items">
						<li><img src="../../assets/all-products-together@510x510.png"></li>
						<li><img src="../../assets/olefar-liquid@510x510.png"></li>
						<li><img src="../../assets/alvin-liquid@510x510.png"></li>
						<li><img src="../../assets/sinorm-pills@510x510.png"></li>
						<li><img src="../../assets/sinorm-liquid@510x510.png"></li>
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
	import WarningBlock from './WarningBlock'

	export default {
		props: ['isScrollPage'],
		name: 'AboutProducts',
		components: {
			WarningBlock
		}
	}
</script>