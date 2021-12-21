export default async function ({ app, store, route, redirect }) {
	console.log('triggered auth middleware');

	if (route.path !== '/auth/login') {
		//we are on a protected route
		if (!app.$fire.auth.currentUser) {
			//take them to signin page
			return redirect('/auth/login');
		}
	} else if (route.path === '/auth/login') {
		if (!app.$fire.auth.currentUser) {
			//leave them on the login page
		} else {
			//take user to homepage
			return redirect('/');
		}
	}
	// // store.currentPath = route.path;
	// store.commit('setBlockedRoute', route.path);

	// if (app.$fire.auth.currentUser == null) {
	// 	console.log('you are not logged in');
	// 	return redirect('/auth/login');
	// } else {
	// 	console.log('you are logged in.');
	// 	if (route.path === '/auth/login' || route.path === '/auth/signup') {
	// 		console.log('you are already logged in, redirecting to /profile');
	// 		return redirect('/profile');
	// 	} else {
	// 		console.log('you are logged in, continuing to ' + route.path);
	// 	}
	// }
}
