<template>
	<article class="first-section">
		<section class="uk-section uk-flex uk-flex-column uk-flex-middle uk-container uk-light" uk-height-viewport="offset-top: true; offset-bottom: true;">
			<h1 class="uk-margin-large-bottom">Покупайте в аптеке рядом с Вами</h1>

			<h3 class="uk-margin-large-bottom">Контактная информация</h3>

		</section>

		<WarningBlock/>
	</article>
</template>

<script>
	import WarningBlock from './WarningBlock'

	export default {
		name: 'GdeKupit',
		components: {
			WarningBlock
		}
	}
</script>