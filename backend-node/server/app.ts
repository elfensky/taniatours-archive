// app.ts
import express, { Request, Response } from 'express'
import { middlewareDemo } from './middleware/demo'
import dotenv from 'dotenv'
import cors from 'cors'
import { plainToClass } from 'class-transformer'

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

//CONTROLLERS (REST)
import { BirdController } from './controllers/bird.controller'

//GRAPHQL
import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { graphqlHTTP } from 'express-graphql'
//RESOLVERS
import { UserResolver } from './resolvers/UserResolver'

//we can use await here
import { ReservationResolver } from './resolvers/ReservationResolver'
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
			app.use(cors())
			app.use(express.json()) // for parsing application/json //nu kan je ook respnse.json({user:'Cassanova'}); doen
			app.use(middlewareDemo)

			// ROUTES
			app.get('/', (request: Request, response: Response) => {
				response.send(`Welcome, just know: you matter!`)
			})

			const birdController = new BirdController()
			app.use('/birds', birdController.router)

			//GRAPHQL
			// GRAPHQL
			let schema: GraphQLSchema = {} as GraphQLSchema

			await buildSchema({
				resolvers: [UserResolver, ReservationResolver],
			}).then((_) => {
				schema = _
			})

			// GRAPHQL INIT MIDDLEWARE
			app.use(
				'/graphql', // Url, do you want to keep track of a version?
				graphqlHTTP((request, response) => ({
					schema: schema,
					context: { request, response },
					graphiql: true,
				})),
			)

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
