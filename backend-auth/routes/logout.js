const router = require('express').Router();
const User = require('../models/user');

router.post('/logout', async (req, res) => {
	res.cookie('jwt', '', { maxAge: 0 });
	res.send({
		message: 'logged out',
	});
});

module.exports = router; //export as a router
