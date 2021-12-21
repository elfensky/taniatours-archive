<template>
	<main class="o-main">
		<!-- //o-container c-profile -->
		<LayoutSection id="header">
			<LayoutEmpty>
				<ContentImage
					:src="'http://localhost:1337' + aboutPage.Cover.url"
					v-if="!this.$apollo.queries.aboutPage.loading" />
			</LayoutEmpty>

			<LayoutSquare
				name="color--transparent"
				v-if="!this.$apollo.queries.aboutPage.loading">
				<ContentGrid
					class="o-grid--right"
					style="border-right: none"
					:content="aboutPage"></ContentGrid>
			</LayoutSquare>
		</LayoutSection>
	</main>
</template>

<script>
import Vue from 'vue'; //when used with ts, it fucks up Apollo
import gql from 'graphql-tag';
// import gql from '@nuxtjs/apollo'

const DELETE_RESERVATION = gql`
	mutation removeReservationByUuid($uuid: String!) {
		removeReservationByUuid(uuid: $uuid) {
			uuid
		}
	}
`;

export default Vue.extend({
	data() {
		return {
			currentLocale: this.$nuxt.$i18n.locale,
		};
	},
	mounted() {
		// this.startAnimations();

		this.currentLocale;
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	created() {
		this.currentLocale;
	},
	updated() {
		this.currentLocale;
	},
	apollo: {
		$client: 'strapi',
		aboutPage: {
			query: gql`
				query getAboutPage($locale: String) {
					aboutPage(locale: $locale) {
						Title
						Subtitle
						Description
						ContentTitle
						ContentText
						Cover {
							url
						}
					}
				}
			`,
			variables() {
				return {
					locale: this.currentLocale,
				};
			},
			prefetch: true,
		},
	},
});
// console.log(getReservationsByUser);
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-profile {
	display: flex;
}
</style>
