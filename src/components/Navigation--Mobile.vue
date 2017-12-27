<template>
	<div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas">
		<!-- мобильное меню -->
		<div class="uk-offcanvas-bar">
			<div class="uk-panel">
				<ul class="uk-nav uk-nav-default tm-nav">
					<!--<li class="uk-nav-header">Главная</li>-->
					<router-link class="nav-item" tag="li" to="/" exact>
						<a class="navbar__list__item">Главная</a>
					</router-link>
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
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Navigation--Mobile'
	}
</script>