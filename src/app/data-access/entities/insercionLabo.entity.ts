import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbInsercionLabo' })
export class InsercionLabo extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    radioPlaticaInformativaControl: number;

    @Column()
    radioCanalizadoControl: number;

    @Column()
    cualf3Control: string;

    @Column()
    radioEncontroTrabajoControl: number;

    @Column()
    dondeControl: string;

    @Column()
    porquef3Control: string;

    @Column()
    radioObtuvoDocumentosControl: number;

    @Column()
    checkRFCControl: number;

    @Column()
    RFCControl: number;

    @Column()
    checkNSSControl: number;

    @Column()
    NSSControl: number;

    @Column()
    checkf3OtroControl: number;

    @Column()
    otroControl: string;

    @Column()
    porque2Control: string;

    @Column()
    observacionesFinalesControl: string;

    @Column()
    timestamp: string;

}