import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbRevGestDoc' })
export class RevisionGesDoc extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    radioReunioDocumentosControl: number;

    @Column()
    observacionesf2Control: string;

    @Column()
    porQueControl: string;

    @Column()
    radioResolucionMigratoriaControl: number;

    @Column()
    cualControl: number;

    @Column()
    fechaResolucionControl: string;

    @Column()
    CURPControl: string;

    @Column()
    negativaControl: string;

    @Column()
    timestamp: string;

}