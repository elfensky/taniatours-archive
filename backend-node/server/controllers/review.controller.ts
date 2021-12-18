// // import { plainToClass } from 'class-transformer'
// import { plainToClass } from 'class-transformer'
// import { Router } from 'express'
// import { Review } from '../entities/review'

// export class ReviewController {
// 	public router = Router()
// 	public reviews: Array<Review>

// 	constructor() {
// 		this.reviews = plainToClass(Review, reviews)

// 		// Initialize the routes in here, like this
// 		this.router.get('/all', this.all)
// 	}

// 	// Make sure to use an arrow function, so 'this' is properly bound.
// 	all = (request: Request, response: Response, next: NextFunction) => {
// 		response.send(this.reviews)
// 	}
// }
