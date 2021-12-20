import { Request, Response, NextFunction, Router } from 'express'
import { Bird } from '../entity/bird'
// import birds from '../data/birds.json'
import { plainToClass } from 'class-transformer'
import { Repository, getRepository } from 'typeorm'

export class BirdController {
	public router = Router()
	repository: Repository<Bird>
	// public birds: Array<Bird>

	constructor() {
		this.repository = getRepository(Bird)
		// this.birds = plainToClass(Bird, birds)
		// Initialize the routes in here, like this
		this.router.get('/', this.all)
		this.router.get('/:id', this.one)
		// this.router.post('/', this.save)
	}

	// // Make sure to use an arrow function, so 'this' is properly bound.
	all = async (request: Request, response: Response, next: NextFunction) => {
		const birds = await this.repository.find() //SELECT & FROM birds
		response.send(birds)
	}

	one = async (request: Request, response: Response, next: NextFunction) => {
		const id: string = request.params.id
		const bird = await this.repository.findOne({ id: id }) //SELECT & FROM birds
		response.send(bird)
	}
}
