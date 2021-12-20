import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { User } from './user'

@ObjectType()
@InputType('ReservationsInput')
@Entity('reservations')
export class Reservation {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	uuid?: string

	// @Field((type) => User)
	// @Column((type) => User)
	@Field()
	@Column()
	userid?: string

	@Field()
	@Column()
	tourid!: number

	@Field()
	@Column('datetime')
	requested_datetime?: Date = new Date()

	@Field()
	@Column('datetime')
	order_datetime?: Date = new Date()
}
