<template>
	<main class="o-container c-profile">
		<div>
			<h1 style="margin-top: 200px">WELCOME</h1>
			<pre class="prettyprint lang-json"><code>
				{{ JSON.stringify($nuxt.$fire.auth.currentUser, null, 2) }}
				<!-- {{ $nuxt.$fire.auth.currentUser }} -->
			</code></pre>
			<!-- <div id="locale" style="text-align: right; position: absolute">
			{{ $i18n.locale }}
		</div> -->
			<p>
				Header that shows userinfo like twitch with an edit button to
				edit it "inside" the header <br />
				-> avatar, phone#, full name, email, means of contact (social
				media?)
			</p>
			<p>
				ul-li (list view) of all your reservations.<br />
				TOURNAME(links to tour) -- DATE -- TIME -- AMOUNT OF PPL -- PRICE
				-- APPROVED? -- CANCEL-BUTTON
			</p>
		</div>
		<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
	</main>
</template>

<script>
export default {
	middleware: 'auth',
	// computed: {
	// 	blockedRoute() {
	// 		return store.state.blockedRoute;
	// 	},
	// },
};
// console.log(this.blockedRoute);
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-profile {
	display: flex;
}
</style>
