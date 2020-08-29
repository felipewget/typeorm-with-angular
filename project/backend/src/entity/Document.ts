import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,OneToMany, OneToOne, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Farmer } from './Farmer';

@Entity()
export class Document {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    document_number: String;

    @Column()
    document_type: string;

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

    @ManyToOne(() => Farmer, farmer => farmer.documents )
    @JoinColumn({ name: "id" })
    identifier_document: Farmer    

}


