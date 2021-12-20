<template>
	<div class="container">
		<!-- HEADER -->
		<LayoutSection id="header">
			<!-- <LayoutEmpty /> -->
			<LayoutSquare name="cover">
				<!-- v-if="!this.$apollo.queries.homePage.loading"
				name="header" -->
				<ContentGrid :content="blog" :social="false">
					<!-- <ContentLinks
						:links="[
							{ text: 'About me', path: '/', hash: '#about' },
							{ text: 'Tours', path: '/', hash: '#tours' },
						]" />
					<ContentSocial /> -->
				</ContentGrid>
			</LayoutSquare>
		</LayoutSection>
		<!-- 
		<h1>A blog Title</h1>
		<h2>my id is {{ id }}</h2> -->
		<!-- <article>
			<h1 class="title">{{ post.title }}</h1>
			<p>{{ post.content }}</p>
		</article>
		<aside>
			<h3>Posts you might enjoy</h3>
			<ul>
				<li :v-for="related in relatedPosts">
					<nuxt-link
						:to="{ name: 'posts-id', params: { id: related.id } }">
						{{ related.title }}
					</nuxt-link>
				</li>
			</ul>
		</aside> -->
	</div>
</template>

<script>
import Vue from 'vue'; //when used with ts, it fucks up Apollo
import gql from 'graphql-tag';

export default Vue.extend({
	// head() {
	// 	return {
	// 		title: this.post.title,
	// 		meta: [
	// 			{ name: "twitter:title", content: this.post.title },
	// 			{ name: "twitter:description", content: this.post.content },
	// 			{
	// 				name: "twitter:image",
	// 				content: "https://i.imgur.com/UYP2umJ.png",
	// 			},
	// 			{ name: "twitter:card", content: "summary_large_image" },
	// 		],
	// 	};
	// },
	data() {
		return {
			currentLocale: this.$nuxt.$i18n.locale,
			id: this.$route.params.id,
		};
	},
	mounted() {
		// this.startAnimations();
		this.currentLocale;
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	apollo: {
		blog: {
			query: gql`
				query getBlogPost($id: ID!) {
					blog(id: $id) {
						Title
						ShortDescription
						Content
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
	// computed: {
	// 	post() {
	// 		return this.$store.state.posts.all.find(
	// 			(post) => post.id === this.id
	// 		);
	// 	},
	// 	relatedPosts() {
	// 		return this.$store.state.posts.all.filter(
	// 			(post) => post.id !== this.id
	// 		);
	// 	},
	// },
});
</script>

<style scoped>
.container {
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
}
</style>
