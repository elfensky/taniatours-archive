<template>
	<nav class="navigation">
		<div class="localization">
			<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
			<nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link>
		</div>

		<h1>Default Layout</h1>
		<h2>CURRENT LOCALE: {{ $i18n.locale }}</h2>

		<div v-if="$auth.loggedIn">
			{{ $auth.user.email }}
			<button>Logout</button>
			<v-btn>Logout</v-btn>
			<!-- <nuxt-link>Logout</nuxt-link> -->
			<!-- <nuxt-link to="profile">Profile</nuxt-link> -->
			<!-- <nuxt-link v-if="$auth.admin" to="admin">Admin</nuxt-link> -->
			<!-- username -->
			<!-- logout button -->
		</div>
		<div v-else>
			<nuxt-link to="login">Login</nuxt-link>
			<nuxt-link to="signup">Signup</nuxt-link>
			<nuxt-link to="profile">Profile</nuxt-link>
		</div>
	</nav>
</template>

<script>
// export default {
// 	data() {
// 		return {
// 			currentLocale: this.$nuxt.$i18n.locale,
// 		};
// 	},
// };
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
