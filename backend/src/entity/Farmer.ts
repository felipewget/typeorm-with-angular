import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Document } from './Document';
import { Address } from './Address';

@Entity()
export class Farmer {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column()
    document_id: Number;

    @Column()
    address_id: Number;

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

    @OneToMany(() => Document, document => document.identifier_document)
    documents: Document[]

    @OneToMany(() => Address, address => address.identifier_address)
    addresses: Address[]

}