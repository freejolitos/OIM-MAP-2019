import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catMedioIngreso'})
export class catMedioIngreso extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    medioTransporte: string;

}