import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { Field, ID, InputType, ObjectType } from 'type-graphql'

@ObjectType()
@InputType('UsersInput')
@Entity('users')
export class User {
	@Field() //() => ID
	@PrimaryColumn({ unique: true })
	// @OneToMany(() => Reservation, (o) => o.seller)
	uid!: string

	@Field()
	@Column()
	isAdmin?: boolean = false
}
