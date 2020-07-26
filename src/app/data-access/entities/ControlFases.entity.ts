import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'tbControlFases'})
export class ControlFases extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    faseControl: number;

}