import { plainToClass } from 'class-transformer'
import { Router } from 'express'
import { Bird } from '../entities/bird'

export class BirdController {
	public router = Router()
	public birds: Array<Bird>

	constructor() {
		this.birds = plainToClass(Bird, birds)

		// Initialize the routes in here, like this
		this.router.get('/all', this.all)
	}

	// Make sure to use an arrow function, so 'this' is properly bound.
	all = (request: Request, response: Response, next: NextFunction) => {
		response.send(this.birds)
	}
}
