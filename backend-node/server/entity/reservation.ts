import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { User } from './user'

@ObjectType()
@InputType('ReservationsInput')
@Entity('reservations')
export class Reservation {
	@Field({ nullable: true })
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

	@Field({ nullable: true })
	@Column('datetime')
	requested_datetime?: Date = new Date()

	@Field({ nullable: true })
	@Column('datetime')
	order_datetime?: Date = new Date()
}
