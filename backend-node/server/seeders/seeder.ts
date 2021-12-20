//GENERAL FUNCTIONALITY
import { Connection, getRepository } from 'typeorm'
import { plainToClass } from 'class-transformer'

//ENTITIES
import { Config } from '../entity/config'
import { Bird } from '../entity/bird'
import { User } from '../entity/user'
import { Reservation } from '../entity/reservation'

//DATA
import birds from './birds.json'
import users from './users.json'
import reservations from './reservations.json'

const seedDatabase = async (connection: Connection) => {
	try {
		//SELECT * FROM config Where seeded==true
		const isSeeded = await getRepository(Config).findOne('seeded')
		//IF NOT SEEDED
		if (isSeeded === undefined) {
			// const birdsORM = plainToClass(Bird, birds)
			// await connection.manager.save(birdsORM) //deze lijst van vogels in de lijst

			const usersORM = plainToClass(User, users)
			await connection.manager.save(usersORM)

			const reservationsORM = plainToClass(Reservation, reservations)
			await connection.manager.save(reservationsORM)

			//SET SEEDED TO TRUE
			const configORM = new Config()
			configORM.key = 'seeded'
			configORM.value = true
			await connection.manager.save(configORM)
			console.log('✅ Database seeded with JSONs.')
		}

		//IF SEEDED
		else {
			console.log('❎ Database has already been seeded.')
		}
	} catch (error: any) {
		console.error('🚫 SEEDING ERROR: ' + error.message)
	}
}
export default seedDatabase
