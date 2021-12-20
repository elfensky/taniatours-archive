// import { Arg, Mutation, Query, Resolver } from 'type-graphql'
// import { EntityManager, getManager } from 'typeorm'
// import { Register } from '../entity/register'
// import { User } from '../entity/user'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { EntityManager, getManager, Repository, getRepository } from 'typeorm'
import { Reservation } from '../entity/reservation'
import { User } from '../entity/user'

// @Resolver()
// export class ReservationResolver {
// 	@Query(() => [Order], { nullable: true })
// 	async getOrders(
// 		@Arg('register_id') registerId: string,
// 		@CurrentUser() user: User,
// 	): Promise<Order[]> {
// 		try {
// 			// If authorized
// 			return await this.roleManager
// 				.hasRegisterRole(user, registerId, [Role.OWNER, Role.USER])
// 				.then(async () => {
// 					return await this.manager.find(Order)
// 				})
// 		} catch (error: any) {
// 			console.error(`⛔ (${user.email}) ` + error.message)
// 			throw error
// 		}
// 	}
// }

@Resolver()
export class ReservationResolver {
	manager: EntityManager = getManager()

	@Query(() => [Reservation], { nullable: true })
	async getReservationsByUser(
		@Arg('uid') uid: string,
	): Promise<Reservation[]> {
		// const foundUser = await this.repository.findOne({ uid: uid })
		const foundReservations = await this.manager
			.find(Reservation, { userid: uid })
			.catch((e) => {
				throw new Error('Could not find that order.')
			})

		return foundReservations
	}
}
