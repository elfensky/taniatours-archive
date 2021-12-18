export default function ({ app, route, redirect }) {
	if (route.path !== '/auth/login') {
		//we are on a protected route
		if (!app.$fire.auth.currentUser) {
			//take them to sign in page
			return redirect('/auth/login');
		}
	} else if (route.path === '/auth/login') {
		if (!app.$fire.auth.currentUser) {
			//leave them on the sign in page
		} else {
			return redirect('/profile');
		}
	}
}

// export default function ({ app, route, redirect }) {
// 	if (app.$fire.auth.currentUser == null) {
// 		//if not logged in
// 		//take them to sign in page
// 		console.log(app.$fire.auth.currentUser);
// 		return redirect('/auth/login');
// 	} else {
// 		return redirect(route.path);
// 	}
// }
