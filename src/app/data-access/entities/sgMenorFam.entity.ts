import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbSeguimientoMenorFam' })
export class seguimientoMenorFam extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    idFolioMenor: string;

    @Column()
    notaSeguimientoControl: string;

    @Column()
    timestamp: string;

}