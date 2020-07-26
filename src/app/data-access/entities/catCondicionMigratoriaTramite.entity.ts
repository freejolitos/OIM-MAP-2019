import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catCondicionMigratoriaTramite'})
export class catCondMigTra extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    condicionMigratoriaTramite: string;

}