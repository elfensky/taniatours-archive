<template>
	<main class="o-container c-profile">
		<!-- <div id="locale" style="text-align: right; position: absolute">
			{{ $i18n.locale }}
		</div> -->

		Header that shows userinfo like twitch with an edit button to edit it
		"inside" the header <br />
		-> avatar, phone#, full name, email, means of contact (social media?)

		<br /><br />
		ul-li (list view) of all your reservations.<br />
		TOURNAME(links to tour) -- DATE -- TIME -- AMOUNT OF PPL -- PRICE --
		APPROVED? -- CANCEL-BUTTON
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
