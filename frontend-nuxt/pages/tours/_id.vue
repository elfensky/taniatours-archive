<template>
	<main class="o-main">
		<LayoutSection id="tours">
			<LayoutSquare v-if="!this.$apollo.queries.tour.loading" name="tour">
				<ContentGrid :content="tour"></ContentGrid>
				<div style="margin-top: 10vh">
					<button>Place a reservation</button>
					<form action="">
						<input
							type="datetime-local"
							id="birthdaytime"
							name="birthdaytime" />
						<input
							type="number"
							id="people"
							name="people"
							min="1"
							max="10" />
						<input type="submit" value="Place Reservation" />
					</form>
				</div>
			</LayoutSquare>
		</LayoutSection>
	</main>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	data() {
		return {
			currentLocale: this.$nuxt.$i18n.locale,
			homePage: {},
			id: this.$route.params.id,
			// currentData: awaitthis.apollo.homePage,
		};
	},
	mounted() {
		// this.startAnimations();
		this.currentLocale;
		this.id;
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	created() {
		// this.currentLocale;
	},
	methods: {},
	updated() {
		this.currentLocale;
		this.id;
	},
	apollo: {
		tour: {
			query: gql`
				query getTour($id: ID!) {
					tour(id: $id) {
						Title
						LengthInMinutes
						Description
						Cover {
							url
						}
					}
				}
			`,
			variables() {
				return {
					id: this.$route.params.id,
				};
			},
			prefetch: true,
		},
	},
});
</script>

<style scoped>
/* .container {
	display: flex;
	justify-content: space-between;
	line-height: 1.5;
}
article * {
	margin-bottom: 1rem;
}
aside {
	min-width: 280px;
	max-width: 280px;
	padding-left: 2rem;
}
.title {
	font-size: 2rem;
} */
</style>
