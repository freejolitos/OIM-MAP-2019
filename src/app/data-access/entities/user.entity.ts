import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({name: 'tbUsuarios'})
export class Usuarios extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({nullable:true})
    nombres: string;

    @Column({nullable:true})
    apellidos: string;

}