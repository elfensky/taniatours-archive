import { Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryColumn({ unique: true })
	uid!: string
	isAdmin?: boolean = false
}
