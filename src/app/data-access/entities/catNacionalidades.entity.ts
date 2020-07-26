import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catNacionalidades'})
export class catNacionalidad extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nacionalidad: string;

}