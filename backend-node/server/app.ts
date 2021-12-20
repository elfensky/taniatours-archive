// app.ts
import express, { Request, Response } from 'express'
import { middlewareDemo } from './middleware/demo'
import dotenv from 'dotenv'

import { plainToClass } from 'class-transformer'
// import birds from './data/birds.json'
// import { Bird } from './entity/bird'
// const allBirds = plainToClass(Bird, birds)

//TYPEORM
import { createDatabase } from 'typeorm-extension'
import {
	Connection,
	ConnectionOptions,
	createConnection,
	EntityManager,
	getConnectionOptions,
	getManager,
} from 'typeorm'
//SEEDER
import seedDatabase from './seeders/seeder'

//CONTROLLERS
import { BirdController } from './controllers/bird.controller'

//we can use await here
;(async () => {
	//DATABASE SETUP
	const connectionOptions: ConnectionOptions = await getConnectionOptions()
	createDatabase({ ifNotExist: true }, connectionOptions)
		.then(() => console.log('database has been created'))
		.then(createConnection)
		.then(async (connection: Connection) => {
			// SEED DATABASE
			seedDatabase(connection)

			// APP SETUP
			dotenv.config() //configure environment variables using .env file

			const app = express()
			const port = process.env.PORT || 3001

			// MIDDLEWARE
			app.use(express.json()) // for parsing application/json //nu kan je ook respnse.json({user:'Cassanova'}); doen
			app.use(middlewareDemo)

			// ROUTES
			app.get('/', (request: Request, response: Response) => {
				response.send(`Welcome, just know: you matter!`)
			})

			const birdController = new BirdController()
			app.use('/birds', birdController.router)

			// APP START
			app.listen(port, () => {
				console.info(
					`\nServer 👾 \nListening on http://localhost:${port}/`,
				)
			})
		})
		.catch((error) => console.error(error))
})()

// app.post('/', (request: Request, response: Response) => {
// 	response.send(`POST request`)
// })
// app.put('/user', (request: Request, response: Response) => {
// 	response.send(`PUT at /user`)
// })
// app.delete('/user', (request: Request, response: Response) => {
// 	response.send(`DELETE at /user`)
// })
