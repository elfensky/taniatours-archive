<template>
	<section :id="name" class="c-header o-section scrollify">
		<!-- VIDEO  -->
		<video
			v-if="name === 'header'"
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

			<SectionLinks v-if="links" :links="links" />
			<SectionSocial v-if="social" />
		</div>
	</section>
</template>

<script lang="ts">
import Vue from "vue";
// import SectionLinks from "../components/SectionLinks.vue";
// import SectionSocial from "../components/SectionSocial.vue";

export default Vue.extend({
	// name: "Section", //not needed. Filename is used?
	// components: { SectionLinks, SectionSocial }, //done automatically in nuxt
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
		links: {
			type: Array,
			required: false,
		},
		social: {
			type: Boolean,
			required: false,
		},
	},
	data() {
		return {};
	},
	computed: {
		sectionContent() {
			return this.content;
		},
	},
	methods: {},
});
</script>
