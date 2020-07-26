import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catGenero'})
export class catGenero extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    genero: string;

}