import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catPaises'})
export class catPaises extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pais: string;

}