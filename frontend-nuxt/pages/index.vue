<template>
	<main class="o-main">
		<!-- <div id="locale" style="text-align: right; position: absolute">
			{{ $i18n.locale }}
		</div> -->

		<!-- HEADER -->
		<LayoutSection id="header">
			<VideoBackground />
			<LayoutEmpty />
			<LayoutSquare v-if="!this.$apollo.queries.homePage.loading" name="header">
				<ContentGrid
					class="o-grid--right"
					:content="homePage.Header"
					:social="true">
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
			<LayoutSquare v-if="!this.$apollo.queries.homePage.loading" name="about">
				<ContentGrid :content="homePage.About">
					<ContentLinks :links="[{ text: 'Learn more', path: '/about' }]" />
				</ContentGrid>
			</LayoutSquare>

			<LayoutEmpty v-if="!this.$apollo.queries.homePage.loading">
				<ContentImage :src="'http://localhost:1337' + homePage.Cover.url" />
			</LayoutEmpty>
		</LayoutSection>

		<!-- BLOG -->
		<LayoutSection id="blog">
			<LayoutSquare v-if="!this.$apollo.queries.homePage.loading" name="blog">
				<ContentGrid :content="homePage.Blog">
					<!-- <ContentLinks :links="[{ text: 'Show All', path: '/blogs' }]" /> -->
				</ContentGrid>
			</LayoutSquare>

			<LayoutScroll v-if="!this.$apollo.queries.blogs.loading" name="c-blog__list">
				<ContentList type="blogs" :content="blogs" />
			</LayoutScroll>
		</LayoutSection>

		<!-- TOURS -->
		<LayoutSection id="tours">
			<LayoutSquare
				v-if="!this.$apollo.queries.homePage.loading"
				name="tours"
				id="tours_container">
				<ContentGrid :content="homePage.Tours" id="tours_grid">
					<ContentLinks :links="[{ text: 'Show All', path: '/tours' }]" />
				</ContentGrid>
			</LayoutSquare>

			<LayoutScroll v-if="!this.$apollo.queries.tours.loading" name="list__tour">
				<ContentList type="tours" :content="tours" />
			</LayoutScroll>
		</LayoutSection>

		<!-- CONTACT -->
		<LayoutSection id="contact">
			<LayoutSquare v-if="!this.$apollo.queries.homePage.loading" name="contact">
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

		<!-- <span v-if="this."></span> -->
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
			scriptSource: '~/assets/scripts/scroll.js',
			// homePage: {},
			// currentData: awaitthis.apollo.homePage,
		};
	},
	mounted() {
		// this.startAnimations();
		this.currentLocale;
		this.scrollLock();
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	created() {
		// this.currentLocale;
	},
	methods: {
		scrollLock() {
			var h = Math.max(
				document.documentElement.clientHeight,
				window.innerHeight || 0,
			);
			var h2 = (h / 3) * 2;
			// var nav = document.getElementsByTagName('nav')[0];
			// // console.log(nav);
			// var header = document.getElementById('video');
			var blog = document.getElementById('blog');
			var tours_grid = document.getElementById('tours_grid');

			var tours_container = document.getElementById('tours_container');
			// var contact = document.getElementById('contact');
			// var tours_grid_scroll = 0;
			console.log('gotdata');

			window.addEventListener('scroll', function () {
				// let scrollpos = window.scrollY;

				//FIXED TOURS
				if (window.scrollY > blog.offsetTop + blog.offsetHeight) {
					// console.log("You've scrolled past the blog");
					tours_grid.classList.add('c-tours__grid--fixed');
					tours_container.classList.add('c-tours__container--fixed');
				}

				if (window.scrollY < blog.offsetTop + blog.offsetHeight) {
					// console.log("You've scrolled before the blog");
					tours_grid.classList.remove('c-tours__grid--fixed');
					tours_container.classList.remove('c-tours__container--fixed');
				}
			});
		},
	},
	updated() {
		this.currentLocale;
	},
	apollo: {
		$client: 'strapi',
		homePage: {
			query: gql`
				query getHomePage($locale: String) {
					homePage(locale: $locale) {
						Cover {
							url
						}
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
						Subtitle
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
