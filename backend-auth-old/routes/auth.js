import { Router } from 'express';
import passport from 'passport';

let User;
const router = new Router();

const setUserModel = (userModel) => {
	User = userModel;
};

router.post('/signup', (req, res, next) => {
	return passport.authenticate('local-signup', (err) => {
		if (err) {
			return res.json({
				error: err,
			});
		}

		return res.status(200).end();
	})(req, res, next);
});

router.post('/login', (req, res, next) => {
	return passport.authenticate('local-login', (error, accessToken) => {
		if (error !== null) {
			return res.json({
				error: error,
			});
		} else {
			return res.json({
				// token: `Bearer ${accessToken}`,
				token: accessToken,
			});
		}

		// return res.json({
		// 	payload: {
		// 		accessToken,
		// 	},
		// });
	})(req, res, next);
});

// router.get('/users', (req, res, next) => {});

// app.get(
// 	'/me',
// 	passport.authenticate(['jwt', 'bearer'], { session: false }),
// 	function (req, res, next) {
// 		const { userId } = req.user;
// 		users.findOne({ _id: userId }, (err, data) => {
// 			if (err) {
// 				res.status(500).send(err);
// 			} else if (data) {
// 				const userData = data;
// 				res.status(200).send(userData);
// 			} else {
// 				res.status(500).send('invalid token');
// 			}
// 		});
// 	},
// );
module.exports = {
	setUserModel,
	router,
};
