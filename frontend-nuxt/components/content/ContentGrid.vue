<template>
	<div class="o-grid u-border">
		<h1 class="o-grid__title">
			{{ sectionContent.Title }}
			<!-- <div class="o-grid__title--align">{{ sectionContent.Title }}</div> -->
		</h1>
		<h2 class="o-grid__subtitle">
			{{ sectionContent.Subtitle }}
		</h2>
		<p class="o-grid__description">
			{{ sectionContent.Description }}
		</p>
		<slot></slot>
	</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	props: {
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
		return {}
	},
	computed: {
		sectionContent() {
			console.log(this.content.RichSubtitle)
			return this.content
		},
	},
	methods: {},
})
</script>
