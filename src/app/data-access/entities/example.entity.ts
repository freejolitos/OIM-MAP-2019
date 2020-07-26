import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'tbEjemplo'})
export class Example extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ejemplo: string;

}