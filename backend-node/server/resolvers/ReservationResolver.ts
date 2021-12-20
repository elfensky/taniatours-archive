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
	async getAllReservations(@Arg('uid') uid: string): Promise<Reservation[]> {
		const foundUser = await this.manager
			.findOneOrFail(User, { uid: uid })
			.catch((e) => {
				throw new Error('Could not find user to check auth.')
			})

		if (foundUser.isAdmin) {
			const foundReservations = await this.manager
				.find(Reservation)
				.catch((e) => {
					throw new Error('Could not find that order.')
				})
			return foundReservations
		} else {
			throw new Error('No Reservations available')
		}
	}

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

	@Mutation(() => Reservation, { nullable: true })
	async removeReservationByUuid(@Arg('uuid') uuid: string) {
		try {
			// DOES ORDER EXIST
			const existingReservation = await this.manager
				.findOneOrFail(Reservation, { uuid: uuid })
				.catch(() => {
					throw new Error(
						'Could not find the order you are trying to remove.',
					)
				})
			if (existingReservation !== null) {
				const { affected } = await this.manager.delete(Reservation, {
					uuid: uuid,
				})
			}
			// if (existingReservation.userid == data.uid) {
			// 	const { affected } = await this.manager.delete(Reservation, {
			// 		uuid: data.uuid,
			// 	})
			// 	if (!affected)
			// 		throw Error('Could not delete order (<1 affected)')
			// 	return affected
			else {
				throw Error('todo')
			}
		} catch (error: any) {
			console.error('⛔' + error.message)
			throw error
		}
	}

	@Mutation(() => Reservation, { nullable: true })
	async createReservation(
		@Arg('data') newReservationData: Reservation,
	): Promise<Reservation> {
		// return await this.manager.
		const newReservation = await this.manager.create(
			Reservation,
			newReservationData,
		)
		this.manager.save(newReservation)
		return newReservation
	}
}

// class ReservationUserObject{

// }
