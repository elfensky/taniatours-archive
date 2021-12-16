const express = require('express') //express server
const chalk = require('chalk') //colors terminal (console) output
const debug = require('debug') //used to log things (instead of console.log) //install @types/debug
const morgan = require('morgan') //used to log webtraffic things //install @types/morgan
const authRouter = require('./src/routers/authRouter')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const PORT = parseInt(process.env.PORT) || 3001 //get port env variable or 3000

const app = express() //instance of express
debug('app') //

//enable cross-origin
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

app.use(morgan('dev')) //logs network traffic combined, dev, ... (levels of logging)
app.use(express.json()) //used to be a separate package called bodyparser
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
	session({ secret: 'globomantics', resave: true, saveUninitialized: true })
) //needs to be an environment variable

require('./src/config/passport.js')(app) //return a function and execute it and pass app to it.

app.use('/', authRouter) //user Router

app.listen(PORT, () => {
	debug(`listening on port ${chalk.red(PORT)}`)
})
