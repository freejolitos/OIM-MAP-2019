import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catOrientacionSexual'})
export class catOrientacionSexual extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orientacionSexual: string;

}