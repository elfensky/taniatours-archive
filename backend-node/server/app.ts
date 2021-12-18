// app.ts
import express, { Request, Response } from 'express'
import { middlewareDemo } from './middleware/demo'
import dotenv from 'dotenv'
import reviews from './data/reviews.mysql.json'
import { Review } from './entities/review'
import { plainToClass } from 'class-transformer'
import birds from './data/birds.json'
import { Bird } from './entities/bird'
const allBirds = plainToClass(Bird, birds)

// APP SETUP
dotenv.config() //configure environment variables

const app = express(),
	port = process.env.PORT || 3001

// MIDDLEWARE
app.use(express.json()) // for parsing application/json //nu kan je ook respnse.json({user:'Cassanova'}); doen

app.use(middlewareDemo)

// app.use('/reviews', ReviewController.router)
// app.get('/', (request: Request, response: Response) => {
// 	response.send(`Welcome, just know: you matter!`)
// })

// app.post('/', (request: Request, response: Response) => {
// 	response.send(`POST request`)
// })
// app.put('/user', (request: Request, response: Response) => {
// 	response.send(`PUT at /user`)
// })
// app.delete('/user', (request: Request, response: Response) => {
// 	response.send(`DELETE at /user`)
// })

// APP START
app.listen(port, () => {
	console.info(`\nServer 👾 \nListening on http://localhost:${port}/`)
})
