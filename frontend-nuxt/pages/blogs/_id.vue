<template>
	<main class="o-main">
		<LayoutSection id="header">
			<LayoutEmpty>
				<ContentImage
					:src="'http://localhost:1337' + blog.Cover.url"
					v-if="!this.$apollo.queries.blog.loading" />
			</LayoutEmpty>

			<LayoutSquare
				name="color--transparent"
				v-if="!this.$apollo.queries.blog.loading">
				<ContentGrid
					class="o-grid--right"
					style="border-right: none"
					:content="blog"></ContentGrid>
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
		$client: 'strapi',
		blog: {
			query: gql`
				query getBlog($id: ID!) {
					blog(id: $id) {
						Title
						Subtitle
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
