import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbDatosMenor' })
export class DatosMenor extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    faseControl: number;

    @Column()
    nombreCompletoControl: string;

    @Column()
    nacionalidadControl: number;

    @Column()
    fechaNacimientoControl: string;

    @Column()
    edadControl: number;

    @Column()
    radioGeneroControl: number;

    @Column()
    telefonoControl: string;

    @Column()
    observacionesControl: string;

    @Column()
    timestamp: string;

}