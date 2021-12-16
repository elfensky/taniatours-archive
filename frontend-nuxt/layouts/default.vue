<template>
	<div class="o-container">
		<NavigationDesktop class="c-nav" />
		<nuxt />
	</div>
</template>

<script>
import NavigationDesktop from '../components/shared/NavigationDesktop';

export default {
	layout: 'default',
	components: {
		NavigationDesktop,
	},
};
</script>

<style lang="scss" scoped>
.o-container {
	display: block;
	width: 100%;
	min-height: 100vh;
}
</style>
