<template>
	<div class="o-grid__links">
		<!-- <a v-for="link in links" :key="link.index" :href="link.path"
			>{{ link.text }} <span>{{ ">>" }}</span></a
		> -->
		<nuxt-link
			class="c-link"
			v-for="link in links"
			:key="link.index"
			:to="localePath({ path: link.path, hash: link.hash })">
			{{ link.text + ' ' }}
			<div class="c-link__arrow1">{{ '>' }}</div>
			<div class="c-link__arrow2">{{ '>' }}</div>
		</nuxt-link>
		<!-- <a>{{ links[0] }}</a> -->
		<!-- <a href="javascript:smooth('aboutme');">{LINK1}</a>
		<a href="javascript:smooth('tours');">LINK2</a> -->
	</div>
</template>
<script>
export default {
	name: 'SectionLinks',
	props: {
		links: {
			type: Array,
			required: false,
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
