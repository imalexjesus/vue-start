<template>
	<div id="demo">
		<button v-on:click="show = !show">
			Переключить
		</button>
		<transition name="fade">
			<p v-if="show">hello</p>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'test',
	data () {
		return {
			show: true
		}
	}
}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0
	}
</style>