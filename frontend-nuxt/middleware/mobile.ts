export default function (context: {
	req: { headers: { [x: string]: any } };
	isMobile: boolean;
}) {
	//sets user agent from headers is running in universal (ssr) mode, or from navigator.userAgent if running in SPA mode
	let userAgent = process.server
		? context.req.headers["user-agent"]
		: navigator.userAgent;
	// console.log(userAgent);
	context.isMobile = /mobile/i.test(userAgent);
}

// From: https://www.youtube.com/watch?v=xh_OrVwgh4M

// See also:
// https://masteringnuxt.com/blog/mobile-detection-with-nuxt-ssr
// --> https://www.npmjs.com/package/mobile-detect
// --> Client Hints

// https://sebastianlandwehr.com/blog/using-modernizr-with-nuxt-js-to-detect-browser-features/
// --> https://modernizr.com/

// PURE JAVASCRIPT NO TS:
// export default function (context) {
// 	//sets user agent from headers is running in universal (ssr) mode, or from navigator.userAgent if running in SPA mode
// 	let userAgent = process.server
// 		? context.req.headers["user-agent"]
// 		: navigator.userAgent;
// 	console.log(userAgent);
// 	context.isMobile = /mobile/i.test(userAgent);
// }
