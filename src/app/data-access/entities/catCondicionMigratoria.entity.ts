import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catCondicionMigratoria'})
export class catCondMigratoria extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    condicionMigratoria: string;

}