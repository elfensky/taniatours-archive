<template>
	<section class="c-header o-section scrollify">
		<!-- VIDEO  -->
		<video
			v-if="this.name === 'header'"
			id="video"
			class="c-header__video"
			playsinline="playsinline"
			autoplay="autoplay"
			muted="muted"
			loop="loop"
		>
			<source src="~/assets/videos/bruges.mp4" type="video/mp4" />
		</video>

		<!-- GRID  -->
		<div class="o-grid c-header__grid">
			<h1 class="o-grid__title">
				<span class="o-grid__title--align">{{
					sectionContent.Title
				}}</span>
			</h1>
			<h2 class="o-grid__sub-title">
				{{ sectionContent.Subtitle }}
			</h2>
			<div class="o-grid__info">
				{{ sectionContent.Description }}
			</div>
			<div class="o-grid__links c-header__links">
				<!-- LINKS SHOULD BE ITS OWN COMPONENT WITH PASSED NAVIGATION -->
				<!-- 2 types, one for navigating on the same page, another using nuxt's Navigation component  -->
				<a href="javascript:smooth('aboutme');">LINK1</a>
				<a href="javascript:smooth('tours');">LINK2</a>
			</div>

			<!-- SHOULD BE ITS OWN re-usable SECTION -->
			<div class="o-grid__social">
				<a id="instagram" href="#"><i class="fab fa-instagram"></i></a>
				<a id="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
				<a id="twitter" href="#"><i class="fab fa-twitter"></i></a>
				<a id="whatsapp" href="#"><i class="fab fa-whatsapp"></i></a>
				<a id="viber" href="#"><i class="fab fa-viber"></i></a>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		name: {
			type: String,
			required: true,
			validator: function (value: string) {
				return ["header", "about", "blog", "tours", "content"].includes(
					value
				);
			},
		},
		position: {
			type: String,
			required: true,
			validator: function (value: string) {
				return ["left", "right"].includes(value);
			},
		},
		config: {
			type: Array,
			required: false,
		},
		content: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
	computed: {
		// localContent = (): any => { return this.content as any}
		sectionContent() {
			return this.content;
		},
	},
	methods: {},
});
// function myLog(this: object) {
// 	console.log(this.config);
// }
</script>
