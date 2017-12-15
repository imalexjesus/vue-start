<template>
	<div id="baz-navbar" uk-sticky="media: 960" class="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed">
		<div class="uk-container uk-container-expand uk-navbar-transparent uk-dark">

			<nav class="uk-navbar">
				<div class="uk-navbar-left">
					<router-link class="header__logo uk-navbar-item uk-logo" to="/">
						<img alt="ЛОГО" src="../assets/bfg-logo.svg" height="510" class="uk-margin-small-right header__logo__img"/>
					</router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="navbar__list uk-navbar-nav">

						<router-link class="nav-item" tag="li" to="/podrobnee-o-produkcii" exact>
							<a class="navbar__list__item">О продукции</a>
						</router-link>
						<router-link class="nav-item" tag="li" to="/why" exact>
							<a class="navbar__list__item">Почему?</a>
						</router-link>
						<router-link class="nav-item" tag="li" to="/sotrudniki" exact>
							<a class="navbar__list__item">Наши сотрудники</a>
						</router-link>
						<router-link class="nav-item" tag="li" to="/faq" exact>
							<a class="navbar__list__item">Чаво</a>
						</router-link>
						<router-link class="nav-item" tag="li" to="/sertificats" exact>
							<a class="navbar__list__item">Сертификаты</a>
						</router-link>
						<router-link class="nav-item" tag="li" to="/gde-kupit" exact>
							<a class="navbar__list__item">Где купить?</a>
						</router-link>
					</ul>
				</div>
			</nav>
		</div>
	</div>


</template>

<script>
	export default {
		name: 'Navigation2'
	}
</script>

<style lang="scss" scoped>

	.header__logo__img {
		height: 65px;
		width: auto;
		margin-left: 5px;
	}

	#baz-navbar {
		// background: rgba(255, 111, 59, 0.95) !important;
		// background-color: $color-olifar2;
		// background: linear-gradient(to bottom, $color-olifar2, $color-olifar);
		background: rgba(255, 255, 255, 0.9);
	}
	/*
		.navbar {
			position: static;
		}
		.navbar__list {
			list-style-type: none;
			margin: 0;
			padding: 0;
			position: absolute;
			right: 40vw;
			top: 10px;
			height: 40px;
			line-height: 40px;
			display: inline-flex;
		}
		.navbar__list__item {
			display: inline-block;
			position: relative;
			margin: 0 0.6em;
		}
		*/
</style>