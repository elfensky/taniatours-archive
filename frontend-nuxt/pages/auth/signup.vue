<template>
	<main class="o-container c-signup">
		<form class="c-form" @submit.prevent="signup">
			<label for="name" class="c-label">Full Name</label>
			<input
				class="c-input"
				name="name"
				type="text"
				placeholder="Tatiana Lavrenova"
				required
				v-model="userData.fullname" />

			<label for="phone" class="c-label">Phone</label>
			<input
				class="c-input"
				name="phone"
				type="tel"
				placeholder="+32 111 222 333"
				required
				v-model="userData.phone" />

			<label for="email" class="c-label">Email</label>
			<input
				class="c-input"
				name="email"
				type="text"
				placeholder="me@example.com"
				required
				v-model="userData.email" />

			<label for="password" class="c-label">Password</label>
			<input
				class="c-input"
				name="password"
				type="password"
				placeholder="****************"
				required
				v-model="userData.password" />
			<input type="submit" value="Signup" />
		</form>
	</main>
</template>

<script>
export default {
	data() {
		return {
			userData: {
				fullname: 'Andrei Lavrenov',
				phone: '+32488218790',
				email: 'andrei@lavrenov.io',
				password: 'password123',
			},
		};
	},
	methods: {
		async signup() {
			await fetch('http://localhost:4000/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this.userData),
			});
			// await this.$router.push('/login');
			login();
		},
		async login() {
			console.log('execute login function');
		},
	},
};
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-signup {
	width: 100vw;
	max-width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;

		input {
			margin-bottom: 1em;
		}
	}
}
</style>
