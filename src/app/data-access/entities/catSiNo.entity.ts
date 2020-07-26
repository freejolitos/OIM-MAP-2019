import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catSiNo'})
export class catSiNo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idSiNo: number;

    @Column()
    Respuesta: string;

}