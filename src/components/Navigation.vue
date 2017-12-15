<template>
<div id="header" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class="uk-light">

	<nav id="navbar" class="uk-navbar-container" uk-navbar>

		<router-link class="header__logo uk-navbar-item uk-logo" to="/">
			<img alt="ЛОГО" src="../assets/bfg-logo--white.svg" height="510" class="header__logo__img"/>
		</router-link>

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
</template>

<script>
	export default {
		name: 'Navigation'
	}
</script>

<style lang="scss" scoped>

	.header__logo__img {
		height: 65px;
		width: auto;
		margin-left: 5px;
	}

	#navbar {
		background: rgba(255, 111, 59, 0.95) !important;
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