import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catEdoCivil'})
export class catEdoCivil extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    edoCivil: string;

}