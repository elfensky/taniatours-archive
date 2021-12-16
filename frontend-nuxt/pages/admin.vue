<template>
	<main class="o-container c-admin">
		<!-- <div id="locale" style="text-align: right; position: absolute">
			{{ $i18n.locale }}
		</div> -->

		<aside>
			sidebar like strapi with:
			<section>
				Pages
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Contact</a>
				<!-- <a href="">Blog</a> //standard template, filled from cms -->
				<!-- <a href="">Blogs</a> -->
				<!-- <a href="">Tour</a>  //standard template, filled from cms -->
				<!-- <a href="">Tours</a> -->
			</section>
			<section>
				Collections
				<a href="">Blogs</a>
				<!-- <a href="">Blog</a> //standard template, filled from cms -->
				<a href="">Blogs</a>
				<!-- <a href="">Tour</a>  //standard template, filled from cms -->
				<a href="">Tours</a>
				<a href="">Users</a>
			</section>
			<section>
				Settings
				<a href="">Locales</a>
			</section>
		</aside>
		<div>
			slot-loaded forms per type.
			<form action="">
				<section>
					<input type="text" name="" id="" />
					<button>Save</button>
				</section>
			</form>
		</div>
	</main>
</template>

<script>
export default {
	middleware: 'auth',
};
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-admin {
	display: flex;
}
</style>
