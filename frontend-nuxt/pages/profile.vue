<template>
	<main class="o-container c-profile">
		<div>
			<h1 style="margin-top: 200px">
				WELCOME, {{ $nuxt.$fire.auth.currentUser.email }}
			</h1>
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
				TOURNAME(links to tour) -- DATE -- TIME -- AMOUNT OF PPL --
				PRICE -- APPROVED? -- CANCEL-BUTTON
			</p>
		</div>
	</main>
</template>

<script>
export default {
	middleware: 'auth',
};
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-profile {
	display: flex;
}
</style>
