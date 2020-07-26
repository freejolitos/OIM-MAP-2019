import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catParentesco'})
export class catParentesco extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    parentesco: string;

}