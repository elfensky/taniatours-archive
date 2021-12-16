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
				v-model="userData.email"
				placeholder="email"
				required />

			<label for="password" class="c-label">Password</label>
			<input
				type="password"
				name="password"
				v-model="userData.password"
				placeholder="****************"
				required />
			<input type="submit" value="Login" />
		</form>
		<!-- <button @click="loginFB">Login with Facebook</button> -->
	</main>
</template>

<script>
// lang="ts"
export default {
	data() {
		return {
			userData: {
				email: 'andrei@lavrenov.io',
				password: 'password123',
			},
			// email: 'lavtatiana@yahoo.com',
			// password: 'password123',
			error: null,
		};
	},
	methods: {
		async login() {
			let response = await this.$auth.loginWith('cookie', this.userData);
			// .then(() => {
			// 	this.$router.push('/');
			// })
			// .catch((err) => {
			// 	console.log(err);
			// 	this.error = err.response;
			// });
			console.log(response);
		},
		async login_facebook() {
			let response = await this.$auth
				.loginWith('facebook')
				.then(() => {
					this.$router.push('/profile');
				})
				.catch((err) => {
					this.error = err.response.data.error;
				});
		},
		async login_manual() {
			await fetch('http://localhost:4000/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(this.userData),
			});

			// await
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
