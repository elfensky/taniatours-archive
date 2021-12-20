<template>
	<div class="o-content o-content--square" :class="'c-' + name">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		name: {
			type: String,
			required: true,
			validator: function (value: string) {
				return [
					'header',
					'about',
					'blog',
					'blogs',
					'tours',
					'contact',
				].includes(value);
			},
		},
		position: {
			type: String,
			required: false,
			validator: function (value: string) {
				return ['left', 'right'].includes(value);
			},
		},
	},
});
</script>
