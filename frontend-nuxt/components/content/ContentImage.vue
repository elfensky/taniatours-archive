<template>
	<div class="o-content o-content--image">
		<img :src="src" :srcset="srcset" :sizes="sizes" :alt="alt" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";

//pass image object (from api) instead?
export default Vue.extend({
	props: {
		src: {
			type: String,
			required: true,
		},
		srcset: {
			type: String,
			required: true,
		},
		sizes: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
});
</script>
