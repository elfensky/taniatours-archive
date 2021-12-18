<template>
	<nav class="navigation">
		<div class="localization">
			<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
			<nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link>
		</div>

		<h1>Default Layout</h1>
		<h2>LOCALE: {{ $i18n.locale }}</h2>
		<nuxt-link to="/">Home</nuxt-link>
		<nuxt-link to="/profile">Profile</nuxt-link>
		<nuxt-link to="/auth/logout">Logout</nuxt-link>

		<!-- <h2 v-if="$fire.auth.currentUser != null">
			USER: 
		</h2> -->

		<!-- <nuxt-link v-if="$auth.admin" to="admin">Admin</nuxt-link> -->
		<!-- username -->
		<!-- logout button -->

		<!-- <div v-if="$fire.auth.currentUser != null">
			<h2>{{ $fire.auth.currentUser.email }}</h2>
			<nuxt-link to="/auth/logout">Logout</nuxt-link>
			<nuxt-link to="/profile">Profile</nuxt-link>
		</div>
		<div v-else>
			<nuxt-link to="/auth/login">Login</nuxt-link>
			<nuxt-link to="/auth/signup">Signup</nuxt-link>
		</div> -->
	</nav>
</template>

<script>
export default {
	data() {
		return {
			// currentLocale: this.$nuxt.$i18n.locale,
			// user: this.$fire.auth.currentUser,
		};
	},
};
</script>

<style scoped>
.navigation {
	position: fixed;
	z-index: 999;
}

.localization {
	color: red !important;
}
</style>
