<template>
	<div class="o-grid__links c-header__links">
		<!-- <a v-for="link in links" :key="link.index" :href="link.path"
			>{{ link.text }} <span>{{ ">>" }}</span></a
		> -->

		<nuxt-link
			v-for="link in links"
			:key="link.index"
			:to="localePath({ path: link.path, hash: link.hash })"
			>{{ link.text }} <span>{{ ">>" }}</span></nuxt-link
		>
		<!-- <a>{{ links[0] }}</a> -->
		<!-- <a href="javascript:smooth('aboutme');">{LINK1}</a>
		<a href="javascript:smooth('tours');">LINK2</a> -->
	</div>
</template>
<script>
export default {
	name: "SectionLinks",
	props: {
		links: {
			type: Array,
			required: true,
		},
	},
	computed: {
		// linkCount() = () => return {this.links.count()}
	},
	data() {
		return {};
	},
};
// console.log(props);
</script>
