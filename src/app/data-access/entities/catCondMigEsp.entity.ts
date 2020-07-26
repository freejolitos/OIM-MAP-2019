import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'catCondMigEsp'})
export class catCondMigEsp extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    condicionMigratoriaEspecifica: string;

}