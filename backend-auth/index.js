const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logoutRoute = require('./routes/logout'); //router
const signupRoute = require('./routes/signup'); //router
const loginRoute = require('./routes/login'); //router
const userRoute = require('./routes/user'); //router
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const PORT = parseInt(process.env.PORT) || 4000; //get port env variable or 3000

mongoose.connect(
	'mongodb://localhost:27017/taniatours',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('connected to mongodb');
	},
);

app = express();

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	}),
);
app.use(cookieParser());
app.use(express.json());

app.use('/', signupRoute, loginRoute, userRoute, logoutRoute);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
