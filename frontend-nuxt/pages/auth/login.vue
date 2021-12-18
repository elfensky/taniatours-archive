<template>
	<main class="o-container c-login">
		<p v-if="error">{{ error }}</p>
		<h1 class="c-login__title">Login Page</h1>

		<form class="c-form" @submit.prevent="login">
			<label for="email" class="c-label">Email</label>
			<input
				class="c-input"
				type="text"
				name="email"
				v-model="userInput.email"
				placeholder="email"
				required />

			<label for="password" class="c-label">Password</label>
			<input
				type="password"
				name="password"
				v-model="userInput.password"
				placeholder="****************"
				required />
			<input type="submit" value="Login" />
			<button @click="reset">Forgot Password</button>
		</form>
		<!-- <button @click="loginFB">Login with Facebook</button> -->
	</main>
</template>

<script>
// lang="ts"
export default {
	data() {
		return {
			userInput: {
				email: 'andrei@lavrenov.io',
				password: 'L3g3ndarySkyrim',
			},
			error: null,
		};
	},
	methods: {
		login() {
			// this.$fire.auth.signinw
			this.$fire.auth
				.signInWithEmailAndPassword(
					this.userInput.email,
					this.userInput.password,
				)
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					if (errorCode === 'auth/wrong-password') {
						alert('Wrong password.');
					} else {
						alert(errorMessage);
					}
					console.log(error);
				})
				.then((user) => {
					this.$router.push('/profile');
				});
		},
		reset() {
			this.$fire.auth
				.sendPasswordResetEmail(
					this.userInput.email,
					actionCodeSettings,
				)
				.then(function () {
					// Password reset email sent.
				})
				.catch(function (error) {
					// Error occurred. Inspect error.code.
				});
		},
	},
};
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
