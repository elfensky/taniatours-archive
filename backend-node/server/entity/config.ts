import { Entity, Column } from 'typeorm'
import { Field, ID, InputType, ObjectType } from 'type-graphql'

@Entity('config')
export class Config {
	@Column({ unique: true, primary: true })
	key!: string

	@Column()
	value!: boolean
}
