<template>
	<main class="o-main">
		<!-- <div id="locale" style="text-align: right; position: absolute">
			{{ $i18n.locale }}
		</div> -->

		<!-- HEADER -->
		<LayoutSection id="header">
			<VideoBackground />
			<LayoutEmpty />
			<LayoutSquare
				v-if="!this.$apollo.queries.homePage.loading"
				name="header">
				<ContentGrid :content="homePage.Header" :social="true">
					<ContentLinks
						:links="[
							{ text: 'About me', path: '/', hash: '#about' },
							{ text: 'Tours', path: '/', hash: '#tours' },
						]" />
					<ContentSocial />
				</ContentGrid>
			</LayoutSquare>
		</LayoutSection>

		<!-- ABOUT -->
		<LayoutSection id="about">
			<LayoutSquare
				v-if="!this.$apollo.queries.homePage.loading"
				name="about">
				<ContentGrid :content="homePage.About">
					<ContentLinks
						:links="[
							{ text: 'Learn more', path: '/', hash: '#about' },
						]" />
				</ContentGrid>
			</LayoutSquare>
			<!-- <LayoutSquare></LayoutSquare> -->
		</LayoutSection>

		<!-- BLOG -->
		<LayoutSection id="blog">
			<LayoutSquare
				v-if="!this.$apollo.queries.homePage.loading"
				name="blog">
				<ContentGrid :content="homePage.Blog">
					<ContentLinks
						:links="[{ text: 'Show All', path: '/blogs' }]" />
				</ContentGrid>
			</LayoutSquare>

			<LayoutScroll
				v-if="!this.$apollo.queries.blogs.loading"
				name="c-blog__list">
				<ContentList type="blogs" :content="blogs" />
			</LayoutScroll>
		</LayoutSection>

		<!-- TOURS -->
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

		<!-- CONTACT -->
		<LayoutSection id="contact">
			<LayoutSquare
				v-if="!this.$apollo.queries.homePage.loading"
				name="contact">
				<ContentGrid :content="homePage.Contact">
					<!-- <ContentLinks
						:links="[
							{ text: 'About me', path: '/', hash: '#about' },
							{ text: 'Tours', path: '/', hash: '#tours' },
						]" /> -->
					<ContentSocial />
				</ContentGrid>
			</LayoutSquare>
		</LayoutSection>
	</main>
</template>

<script>
//lang="ts" fucks Middleware and I can't figure it out
import Vue from 'vue'; //when used with ts, it fucks up Apollo
import gql from 'graphql-tag';
// import { gsap } from 'gsap';
import VideoBackground from '../components/shared/VideoBackground';

function startAnimations() {
	gsap.to('.o-grid__title', { duration: 1, color: 'red' });
}

export default Vue.extend({
	data() {
		return {
			currentLocale: this.$nuxt.$i18n.locale,
			// homePage: {},
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
		homePage: {
			query: gql`
				query getHomePage($locale: String) {
					homePage(locale: $locale) {
						Header {
							Title
							Subtitle
							Description
						}
						About {
							Title
							Subtitle
							Description
						}
						Blog {
							Title
							Subtitle
							Description
						}
						Tours {
							Title
							Subtitle
							Description
						}
						Contact {
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
		blogs: {
			query: gql`
				query getBlogPosts($locale: String) {
					blogs(locale: $locale, limit: 2) {
						id
						Title
						ShortDescription
						Content
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
	components: {
		VideoBackground,
	},
});
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
</style>
