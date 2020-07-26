import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catIdioma'})
export class catIdioma extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idioma: string;

}