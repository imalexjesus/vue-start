<template>
<div id="app" class="uk-offcanvas-content">
	<navigation/>
	<div id="main" class="tm-main uk-section-default uk-offcanvas-content">
		<router-view/>
	</div>
</div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
	name: 'app',
	components: {
		Navigation
	}
}
</script>

<style scoped>

</style>