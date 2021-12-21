export default {
	//added myself:
	// mode: "universal",
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'frontend-nuxt',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	// "~/assets/scss-old/screen.scss",
	css: [
		'~/assets/scss/screen.scss',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/fontawesome.js',
		// '~/plugins/firebase.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// '@nuxtjs/firebase',
	],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/apollo',
		// '@nuxtjs/auth-next',
		// '@nuxtjs/pwa',
		'@nuxtjs/firebase',
		// '@nuxtjs/axios',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	// ADDED MYSELF:
	router: {
		middleware: ['mobile', 'auth'],
	},
	// internationalization plugin config
	i18n: {
		// baseUrl: "https://tania.tours",
		baseUrl: 'http://localhost:3000/',
		/* module options */
		locales: [
			{ code: 'en', iso: 'en-US' },
			{ code: 'ru', iso: 'ru-RU' },
		],
		defaultLocale: 'en',
		vueI18n: {
			fallbackLocale: 'en',
			messages: {
				en: {
					welcome: 'Welcome',
				},
				ru: {
					welcome: 'Добро пожаловать',
				},
			},
		},
	},
	// head() {
	// 	return this.$nuxtI18nHead({ addSeoAttributes: true });
	// },
	// graphql api
	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: 'http://localhost:1337/graphql',
			},
			strapi: {
				httpEndpoint: 'http://localhost:1337/graphql',
			},
		},
	},
	// rest api
	// axios: {
	// 	// proxy: true
	// },
	firebase: {
		config: {
			apiKey: 'AIzaSyDDUF1aLkjnjGIeCaIwC_Hz_owLcgBTfmM',
			authDomain: 'taniatours.firebaseapp.com',
			projectId: 'taniatours',
			storageBucket: 'taniatours.appspot.com',
			messagingSenderId: '679997734789',
			appId: '1:679997734789:web:b02c9506e7635ff1c10eec',
			measurementId: 'G-4Q3KD5QL69',
		},
		services: {
			auth: {
				persistence: 'local', // default
				initialize: {
					// onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
					onAuthStateChangedAction: 'onAuthStateChangedAction',
				},
				ssr: false, // default false
			},
			// firestore: true,
		},
	},
};
