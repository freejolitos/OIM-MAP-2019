import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catFases'})
export class catFases extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idFase: number;

    @Column()
    Fase: string;

    @Column()
    URL: string;

}