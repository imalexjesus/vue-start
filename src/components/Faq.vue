<template>
	<article class="first-section">
		<section class="uk-section bg-orange uk-flex uk-flex-column uk-flex-middle uk-container uk-light" uk-height-viewport="offset-top: true; offset-bottom: true;">
			<h1 class="uk-margin-large-bottom">Часто задаваемые вопросы</h1>

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