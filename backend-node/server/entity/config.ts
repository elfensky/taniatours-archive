import { Entity, Column } from 'typeorm'

@Entity('config')
export class Config {
	@Column({ unique: true, primary: true })
	key!: string

	@Column()
	value!: boolean
}
