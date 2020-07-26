import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catDepartamentos'})
export class catDepartamento extends BaseEntity {

    @Column()
    idNacionalidad: number;

    @PrimaryGeneratedColumn()
    idDepartamento: number;

    @Column()
    Departamento: string;

}