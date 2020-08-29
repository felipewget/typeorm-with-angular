import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany, JoinColumn } from 'typeorm';
import { Farmer } from './Farmer';

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    street: String;

    @Column()
    state: String;

    @Column()
    address: String;

    @Column()
    country: String;

    @CreateDateColumn()
    created_at: Date;

    @Column({
        default: null
    })
    updated_at: Date;

    @Column({
        default: null
    })
    deleted_at: Date;

    
    @ManyToOne(() => Farmer, farmer => farmer.addresses )
    @JoinColumn({ name: "id" })
    identifier_address: Farmer

}