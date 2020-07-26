import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbDatosMenorFam' })
export class DatosMenorFam extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    faseControl: number;

    @Column()
    idFolioFamilia: string;

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
    parentescoControl: number;

    @Column()
    otroControl: string;

    @Column()
    condicionMigratoriaControl: number;

    @Column()
    observacionesControl: string;

    @Column()
    timestamp: string;

}