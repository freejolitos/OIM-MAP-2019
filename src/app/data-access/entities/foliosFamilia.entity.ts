import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'tbFoliosFamilia'})
export class FoliosFamilia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idFolioFamilia: string;

    @Column()
    identificadorFamilia: string;

    @Column()
    timestamp: string;

}