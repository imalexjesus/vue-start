<template>
	<article class="first-section">
		<section class="uk-light first-section uk-section-small uk-section uk-flex uk-flex-column uk-flex-center uk-flex-middle" uk-height-viewport="offset-top: true; offset-bottom: true;">
			<h1 class="uk-margin-large-bottom">Подробнее о продукции</h1>

			<div class="uk-container uk-light" style="width: 510px;">
				<div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="min-height: 510; max-height: 510; autoplay autoplay: true;">
					<ul class="uk-slideshow-items uk-text-center">
						<li>
							<h2 class="uk-margin-large-bottom">Олефар</h2>
							<img src="../assets/olefar-liquid@510x510.png">
						</li>
						<li><img src="../assets/alvin-liquid@510x510.png"></li>
						<li><img src="../assets/sinorm-pills@510x510.png"></li>
						<li><img src="../assets/sinorm-liquid@510x510.png"></li>
					</ul>

					<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
					<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

					<div class="uk-container uk-width-auto">
						<a class="uk-button uk-button-default" href="">Где купить?</a>
						<button class="uk-button uk-button-default">Прочитать полную инструкцию</button>
					</div>

					<ul class="uk-dotnav uk-flex-center uk-margin">
						<li uk-slideshow-item="0"><a href="#">Item 1</a></li>
						<li uk-slideshow-item="1"><a href="#">Item 2</a></li>
						<li uk-slideshow-item="2"><a href="#">Item 3</a></li>
						<li uk-slideshow-item="3"><a href="#">Item 4</a></li>
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