<template>
	<div class="o-grid__social">
		<div class="c-social">
			<a
				class="c-icon c-icon--instagram"
				href="https://instagram.com/tlavrenova2">
				<FontAwesomeIcon :icon="['fab', 'instagram']" />
			</a>

			<a class="c-icon c-icon--facebook" href="https://fb.me/tlavrenova">
				<FontAwesomeIcon :icon="['fab', 'facebook-f']" />
			</a>

			<a
				class="c-icon c-icon--twitter"
				href="https://twitter.com/tlavrenova">
				<FontAwesomeIcon :icon="['fab', 'twitter']" />
			</a>

			<a
				class="c-icon c-icon--whatsapp"
				href="whatsapp://send?abid=[users name]&text=[message text]">
				<FontAwesomeIcon :icon="['fab', 'whatsapp']" />
			</a>
			<a
				class="c-icon c-icon--viber"
				href="viber://pa?chatURI=[public account URI]&text=[message text]">
				<FontAwesomeIcon :icon="['fab', 'viber']" />
			</a>
		</div>
		<svg width="0" height="0">
			<radialGradient id="rg" r="150%" cx="30%" cy="107%">
				<stop stop-color="#fdf497" offset="0" />
				<stop stop-color="#fdf497" offset="0.05" />
				<stop stop-color="#fd5949" offset="0.45" />
				<stop stop-color="#d6249f" offset="0.6" />
				<stop stop-color="#285AEB" offset="0.9" />
			</radialGradient>
		</svg>
	</div>
</template>
