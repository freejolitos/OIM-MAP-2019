import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbSeguimientoMenor' })
export class seguimientoMenor extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    idFolioMenor: string;

    @Column()
    notaSeguimientoControl: string;

    @Column()
    timestamp: string;

}