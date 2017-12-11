<template>
	<nav id="navbar" class="navbar uk-navbar-container" uk-navbar>
		<router-link class="header__logo uk-navbar-item uk-logo" to="/">
			<img alt="ЛОГО" src="../assets/bfg-logo.svg" class="header__logo__img"/>
		</router-link>
		<div class="uk-navbar-right">
			<ul class="navbar__list uk-navbar-nav">
				<router-link class="nav-item" tag="li" to="/" exact>
					<a class="navbar__list__item">ДОМОЙ</a>
				</router-link>
				<router-link class="nav-item" tag="li" to="/test" exact>
					<a class="navbar__list__item">ТЕСТ</a>
				</router-link>
				<router-link class="nav-item" tag="li" to="/11" exact>
					<a class="navbar__list__item">О продукции</a>
				</router-link>
				<router-link class="nav-item" tag="li" to="/22" exact>
					<a class="navbar__list__item">Почему мамы нам доверяют?</a>
				</router-link>
				<router-link class="nav-item" tag="li" to="/33" exact>
					<a class="navbar__list__item">Наши сотрудники</a>
				</router-link>
				<router-link class="nav-item" tag="li" to="/44" exact>
					<a class="navbar__list__item">Чаво</a>
				</router-link>
			</ul>
		</div>
	</nav>
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