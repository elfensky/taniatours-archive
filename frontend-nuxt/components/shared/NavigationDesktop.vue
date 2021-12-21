<template>
	<nav class="navigation">
		<div class="localization">
			<nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
			<nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
			<!-- <h2>Selected: {{ $i18n.locale }}</h2> -->
		</div>
		<div v-if="!isLoggedIn" class="guest">
			<nuxt-link :to="localePath('/')">Home</nuxt-link>
			<nuxt-link :to="localePath('/auth/login')">Login</nuxt-link>
			<nuxt-link :to="localePath('/auth/signup')">Signup</nuxt-link>
		</div>
		<div v-else class="user">
			<nuxt-link :to="localePath('/')">Home</nuxt-link>
			<nuxt-link :to="localePath('/profile')">Profile</nuxt-link>
			<button @click="logout">Logout</button>
		</div>
	</nav>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
	computed: {
		...mapGetters({
			isLoggedIn: 'isLoggedIn',
		}),
	},
	data() {
		return {
			// currentLocale: this.$nuxt.$i18n.locale,
			// user: this.$fire.auth.currentUser,
		};
	},
	methods: {
		// async logout() {
		// 	// this.$fire.auth.signOut().then(this.$router.push('/'));
		// },
		async logout() {
			try {
				await this.$fire.auth.signOut();
			} catch (e) {
				alert(e);
			}
		},
	},
});
</script>

<style lang="scss">
.navigation {
	position: fixed;
	z-index: 999;
	/* background-color: red; */
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.localization {
	// color: red !important;
	mix-blend-mode: darken;
	// &:after {
	// 	color: rgb(0, 255, 255);
	// 	mix-blend-mode: difference;
	// }
}
</style>
