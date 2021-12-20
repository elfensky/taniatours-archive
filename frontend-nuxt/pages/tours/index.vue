<template>
	<main class="o-main">
		<LayoutSection id="tours">
			<LayoutSquare
				v-if="!this.$apollo.queries.homePage.loading"
				name="tours">
				<ContentGrid :content="homePage.Tours">
					<ContentLinks
						:links="[{ text: 'Show All', path: '/tours' }]" />
				</ContentGrid>
			</LayoutSquare>

			<LayoutScroll
				v-if="!this.$apollo.queries.tours.loading"
				name="list__tour">
				<ContentList type="tours" :content="tours" />
			</LayoutScroll>
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
			// currentData: awaitthis.apollo.homePage,
		};
	},
	mounted() {
		// this.startAnimations();
		this.currentLocale;
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	created() {
		// this.currentLocale;
	},
	methods: {},
	updated() {
		this.currentLocale;
	},
	apollo: {
		$client: 'strapi',
		homePage: {
			query: gql`
				query getHomePage($locale: String) {
					homePage(locale: $locale) {
						Tours {
							Title
							Subtitle
							Description
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
		tours: {
			query: gql`
				query getTours($locale: String) {
					tours(locale: $locale) {
						id
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
					locale: this.currentLocale,
				};
			},
			prefetch: true,
		},
	},
});
</script>

<style scoped>
h1 {
	background-color: red;
}
</style>
