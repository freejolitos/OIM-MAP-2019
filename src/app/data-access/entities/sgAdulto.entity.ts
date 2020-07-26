import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbSeguimientoAdulto' })
export class seguimientoAdulto extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    notaSeguimientoControl: string;

    @Column()
    timestamp: string;

}