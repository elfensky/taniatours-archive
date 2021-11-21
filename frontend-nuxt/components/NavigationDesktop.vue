<template>
	<nav class="navigation">
		<div class="localization">
			<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
			<nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link>
		</div>

		<h1>Default Layout</h1>
		<!-- <a href="">PagesDropDown</a>
		<a href="">Cart</a>
		<a href="">Profile</a> -->
	</nav>
</template>

<style scoped>
.navigation {
	position: fixed;
	z-index: 999;
}

.localization {
	color: red !important;
}
</style>
