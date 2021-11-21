<template>
	<div>
		<Section
			name="header"
			position="right"
			:content="content.Header"
			:links="[
				{ text: 'learn more', path: '/', hash: '#about' },
				{ text: 'tours', path: '/', hash: '#tours' },
			]"
			:social="true"
		/>
		<Section name="about" position="left" :content="content.About" />
		<Section
			name="blog"
			position="left"
			:content="content.Blog"
			:links="[{ text: 'see all', path: '/blog' }]"
		/>
		<!-- <Section name="tours" position="left" :content="content.Tours" />
		<Section name="contant" position="left" :content="content.Contact" /> -->
	</div>
</template>

<script lang="ts">
//not required in nuxt
// import Section from "../components/Section.vue";
// import Tutorial from "../components/Tutorial.vue";
import gqlresponse from "../assets/data";

const links = [];

export default {
	// name: "index",
	layout: ({ isMobile }: { isMobile: Boolean }) =>
		isMobile ? "mobile" : "default",
	// layout: "default",
	setup() {},
	// components: { Section, Tutorial },
	data() {
		return {};
	},
	computed: {
		content() {
			return gqlresponse.data.homePage;
		},
	},
};
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
</style>
