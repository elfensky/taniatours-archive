<template>
	<div>
		<!-- <nav style="position: fixed">
			<h1>Default Layout</h1>
			<a href="">DropDown</a><a href="">Cart</a><a href="">Profile</a>
		</nav> -->
		<NavigationDesktop />
		<nuxt />
	</div>
</template>

<script>
import NavigationDesktop from "../components/NavigationDesktop";
export default {
	layout: "default",
	components: {
		NavigationDesktop,
	},
};
</script>
