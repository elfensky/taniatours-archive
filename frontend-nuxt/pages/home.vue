<template>
	<div>
		<Section name="header" position="right" :content="content.Header" />
		<Section name="about" position="left" :content="content.About" />
		<!-- <Section name="blog" position="left" :content="content.Blog" />
		<Section name="tours" position="left" :content="content.Tours" />
		<Section name="contant" position="left" :content="content.Contact" /> -->
	</div>
</template>

<script lang="ts">
import Section from "../components/Section.vue";
import Tutorial from "../components/Tutorial.vue";
import gqlresponse from "../assets/data";

export default {
	name: "home",
	layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
	setup() {},
	components: { Section, Tutorial },
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
//a comment in css
</style>
