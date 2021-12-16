const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
	console.log('signup: 1');
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		fullname: req.body.fullname,
		phone: req.body.phone,
		email: req.body.email,
		password: hashedPassword,
	});

	const result = await user.save();
	const { password, ...data } = await result.toJSON(); //remove hashed password from response
	res.send(data);
});

module.exports = router; //export as a router
