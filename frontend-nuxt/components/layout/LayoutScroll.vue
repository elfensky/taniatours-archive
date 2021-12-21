<template>
	<div class="o-content o-content--scroll">
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
		},
	},
});
</script>
