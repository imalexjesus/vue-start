<template>
	<div id="app" class="uk-offcanvas-content">
		<div id="header" class="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed uk-active uk-sticky-below ">
			<navigation/>
			<nav class="uk-navbar uk-navbar-container uk-margin">
			    <div class="uk-navbar-left">
			        <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#"></a>
			    </div>
			</nav>
		</div>
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

<style lang="scss" scoped itemtype="scss/">
/*	#header {
		position: fixed;
		width: 100%;
		top: 0;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
		transition: background-color 0.3s ease-in-out;
		background-color: #fff;
		height: 40px;
		padding: 10px 60px;
		z-index: 2;

		@media screen and (max-width: 900px) {
			display: none;
		}
	}

	.header__logo {
		display: inline-block;
		font-size: 1.5em;
		line-height: 40px;
		color: #2c3e50;
		font-weight: 500;
	}

	#main {
		position: relative;
		z-index: 1;
		padding: 0 60px 30px;
		overflow-x: hidden;
		height: -webkit-fill-available;
		background: aliceblue;
	}*/

</style>