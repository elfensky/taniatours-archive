import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { EntityManager, getManager, Repository, getRepository } from 'typeorm'
// import { Reservation } from '../entity/reservation'
import { User } from '../entity/user'

@Resolver()
export class UserResolver {
	manager: EntityManager = getManager()
	// repository: Repository<User>
	// constructor() {
	// 	this.repository = getRepository(User)
	// }

	@Query(() => User, { nullable: true })
	async getUserByUid(@Arg('uid') uid: string): Promise<User> {
		// const foundUser = await this.repository.findOne({ uid: uid })
		const foundUser = await this.manager
			.findOneOrFail(User, { uid: uid })
			.catch((e) => {
				throw new Error("Couldn't find user.")
			})

		return foundUser
	}

	@Mutation(() => User, { nullable: true })
	async createUser(@Arg('data') newUserData: User): Promise<User> {
		// return await this.manager.
		const newUser = await this.manager.create(User, newUserData)
		this.manager.save(newUser)
		return newUser
	}
}
