<template>
	<div>
		<!-- BLOGS  -->
		<div v-if="type == 'blogs'">
			<article
				v-for="item in ContentArray"
				:key="item.id"
				class="o-article c-blog__post">
				<h3 class="c-blog__post__title">{{ item.Title }}</h3>
				<h4 class="c-blog__post__info">{{ item.ShortDescription }}</h4>
				<p class="c-blog__post__info">{{ item.Content }}</p>
				<!-- <nuxt-link class="c-link" :to="'/blogs/' + item.id"
				>Readmore</nuxt-link
			> -->
				<ContentLinks
					class="o-article__links"
					:links="[
						{
							text: LinkText.blog,
							path: '/blogs/' + item.id,
						},
					]" />
			</article>
		</div>

		<!-- TOURS  -->
		<div v-if="type == 'tours'">
			<article
				v-for="item in ContentArray"
				:key="item.id"
				class="o-article c-tour__post">
				<h3 class="c-tour__post__title">{{ item.Title }}</h3>
				<h4 class="c-tour__post__info">
					{{ item.LengthInMinutes }} minutes
				</h4>
				<p class="c-tour__post__info">{{ item.Description }}</p>

				<ContentLinks
					class="o-article__links"
					:links="[
						{
							text: LinkText.tour1,
							path: '/tours/' + item.id,
						},
						{
							text: LinkText.tour2,
							path: '/tours/' + item.id,
						},
					]" />
			</article>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
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
	props: {
		type: {
			type: String,
			required: true,
			validator: function (value) {
				return ['blogs', 'tours'].includes(value);
			},
		},
		content: {
			type: Array,
			required: true,
		},
	},
	computed: {
		ContentType() {
			return this.type;
		},
		ContentArray() {
			return this.content;
		},
		LinkText() {
			if (this.currentLocale == 'ru') {
				return {
					blog: 'Читать далее',
					tour1: 'Дeтaли',
					tour2: 'Заказать',
				};
			} else {
				return {
					blog: 'Read more',
					tour1: 'Details',
					tour2: 'Book',
				};
			}
		},
	},
});
</script>
