<template>
	<main class="o-container c-login">
		<!-- <div v-if="isLoggedIn">logged in as {{ user.email }}</div> -->
		<div v-if="isLoggedIn">{{ redirect() }}</div>
		<!-- <div v-else>you're not logged in</div> -->

		<form v-else class="c-form" @submit.prevent="signup">
			<label for="email" class="c-label">Email</label>
			<input
				class="c-input"
				type="text"
				name="email"
				v-model="formData.email"
				placeholder="email"
				required />

			<label for="password" class="c-label">Password</label>
			<input
				type="password"
				name="password"
				v-model="formData.password"
				placeholder="****************"
				required />
			<input type="submit" value="Signup" />
			<button @click="reset">Forgot Password</button>
		</form>
		<!-- <div id="firebaseui-auth-container"></div> -->
		<!-- <button @click="loginFB">Login with Facebook</button> -->
	</main>
</template>

<script>
//lang="ts"
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
	computed: {
		// authUser: (state) => state.authUser,
		// isLoggedIn: 'isLoggedIn'
		...mapState({
			user: (state) => state.user,
		}),
		...mapGetters({
			isLoggedIn: 'isLoggedIn',
		}),
	},
	data() {
		return {
			formData: {
				email: 'andrei@lavrenov.io',
				password: 'L3g3ndarySkyrim',
			},
			error: null,
		};
	},
	methods: {
		async signup() {
			// this.$fire.auth.signinw
			// this.$fire.auth
			// 	.signInWithEmailAndPassword(
			// 		this.userInput.email,
			// 		this.userInput.password,
			// 	)
			// 	.catch(function (error) {
			// 		// Handle Errors here.
			// 		var errorCode = error.code;
			// 		var errorMessage = error.message;
			// 		if (errorCode === 'auth/wrong-password') {
			// 			alert('Wrong password.');
			// 		} else {
			// 			alert(errorMessage);
			// 		}
			// 		console.log(error);
			// 	})
			// 	.then(this.$router.push('/profile'));
			try {
				await this.$fire.auth.createUserWithEmailAndPassword(
					this.formData.email,
					this.formData.password,
				);
			} catch (e) {
				alert(e);
			}
		},
		reset() {
			this.$fire.auth
				.sendPasswordResetEmail(this.formData.email, actionCodeSettings)
				.then(function () {
					// Password reset email sent.
				})
				.catch(function (error) {
					// Error occurred. Inspect error.code.
				});
		},
		redirect() {
			this.$router.push('/profile');
		},
	},
});
// if (this.isLoggedIn) {
// 	redirect();
// }
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-login {
	width: 100vw;
	max-width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&__title {
		margin-bottom: 1em;
	}

	form {
		display: flex;
		flex-direction: column;

		input {
			margin-bottom: 1em;
		}
	}
}
</style>
