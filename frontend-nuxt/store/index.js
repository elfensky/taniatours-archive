const state = () => ({
	// the actual data
	user: null,
	blockedRoute: null,
});

const getters = {
	//computed properties. eg length of an array inside state.
	getUser(state) {
		return state.user;
	},

	isLoggedIn(state) {
		if (state.user != null) {
			return true;
		} else {
			return false;
		}
	},
};

const actions = {
	// get the data in state (api calls etc)
	// but "set" the data to state by callign a mutation!!!
	async onAuthStateChangedAction(state, { authUser, claims }) {
		if (!authUser) {
			// claims = null
			// Perform logout operations

			state.commit('SET_USER', null); // remove state

			this.$router.push({ path: '/auth/login' }); //redirect from here
		} else {
			const { uid, email } = authUser;
			state.commit('SET_USER', {
				uid,
				email,
			});
		}
	},

	// onAuthStateChangedAction: (ctx, { authUser, claims }) => {
	// 	if (!authUser) {
	// 		// claims = null
	// 		// Perform logout operations
	// 	} else {
	// 		const { uid, email } = authUser;
	// 		state.commit('ON_AUTH_STATE_CHANGED_MUTATION', {
	// 			authUser,
	// 			claims,
	// 		});
	// 		// Do something with the authUser and the claims object...
	// 	}
	// },

	// getBlockedRoute(state, route) {},
};

const mutations = {
	//change the data in state
	SET_USER(state, user) {
		console.log('SET_USER');
		state.user = user;
		// state.authUser = user;
	},

	// ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
	// 	if (!authUser) {
	// 		// perform logout operations
	// 		console.log('ON_AUTH___!authUser');
	// 		state.user = null;
	// 		claims = null;
	// 	} else {
	// 		// Do something with the authUser and the claims object...
	// 		console.log('ON_AUTH___else');
	// 		const { uid, email } = authUser;
	// 		state.user = { uid, email, claims };
	// 	}
	// },

	setBlockedRoute(state, parameter) {
		state.blockedRoute = parameter;
	},
	// SET_CURRENTROUTE(state, path) {
	//  state.route = path;
	// },
};

export default {
	state,
	actions,
	mutations,
	getters,
};
