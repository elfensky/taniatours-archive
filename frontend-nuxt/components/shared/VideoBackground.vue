<template>
	<!-- VIDEO  -->
	<div class="c-video__container">
		<video
			id="video"
			class="c-video__file"
			playsinline
			autoplay
			muted
			loop
			:poster="require('~/assets/images/belgium-card.jpg')">
			<source src="~/assets/videos/bruges1.mp4" type="video/mp4" />
		</video>
	</div>
</template>

<script>
// function PreloadVideoImagePlaceholder() {
// 	document.getElementById("video").addEventListener("loadstart", (event) => {
// 		this.classList.add("c-video--loading");
// 	});
// 	document.getElementById("video").addEventListener("canplay", (event) => {
// 		this.classList.remove("c-video--loading");
// 		this.attr("poster", "");
// 	});
// }

// export default {
// 	mounted: function () {
// 		// PreloadVideoImagePlaceholder();
// 	},
// };
//
</script>
