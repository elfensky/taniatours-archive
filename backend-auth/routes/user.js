const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

router.get('/user', async (req, res) => {
	try {
		const cookie = req.cookies['jwt'];

		const claims = jwt.verify(cookie, process.env.JWT_SECRET);
		if (!claims) {
			return res.status(401).json({
				message: 'Unauthorized',
			});
		} else {
			const user = await User.findOne({ _id: claims._id });
			const { password, ...data } = await user.toJSON();
			return res.send({ data: data });
		}
	} catch (error) {
		// return res.send({ error: error });
		return res.status(401).json({
			message: 'Unauthorized',
		});
	}
});

module.exports = router; //export as a router
