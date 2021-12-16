import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import dotenv from 'dotenv';

import connect from './models';
import { router as authRoutes, setUserModel } from './routes/auth';
import getLocalSignupStrategy from './passport/local-signup';
import getLocalLoginStrategy from './passport/local-login';

dotenv.config();

const DEFAULT_PORT = process.env.DEFAULT_PORT || 8001;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

//enable cross-origin from tania.tours
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

const DB_URI = process.env.DB_URI;
connect(DB_URI);
const User = mongoose.model('User');
setUserModel(User);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(passport.initialize());
passport.use('local-signup', getLocalSignupStrategy(User));
passport.use('local-login', getLocalLoginStrategy(User));
app.use('/', authRoutes);

app.get(
	'/users',
	passport.authenticate('local-login', { session: false }),
	function (req, res, next) {
		const { userId } = req.user;
		users.findOne({ _id: userId }, (err, data) => {
			if (err) {
				res.status(500).send(err);
			} else if (data) {
				const userData = data;
				res.status(200).send(userData);
			} else {
				res.status(500).send('invalid token');
			}
		});
	},
);

app.listen(DEFAULT_PORT, HOST, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('\n\tStarting server...');
	console.log(`Running locally at ${HOST}:${DEFAULT_PORT}`);
});
