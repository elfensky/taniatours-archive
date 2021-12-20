import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('reservations')
export class Reservation {
	@PrimaryGeneratedColumn('uuid')
	uuid?: string

	@Column()
	userid?: string
	@Column()
	tour?: number
	@Column('datetime')
	requested_datetime?: string
	@Column('datetime')
	order_datetime?: string
}
