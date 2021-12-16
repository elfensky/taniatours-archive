const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

router.post('/login', async (req, res) => {
	const user = await User.findOne({ email: req.body.email });

	if (!user) {
		return res.status(404).send({ error: 'User not found' });
	}

	if (!(await bcrypt.compare(req.body.password, user.password))) {
		return res.status(400).send({ error: 'Invalid credentials' });
	}

	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
	res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000, //1 day
	});
	res.send({ message: 'Logged in successfully' });
});

module.exports = router; //export as a router
