import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({name: 'tbCitas'})
export class Citas extends BaseEntity {

    @PrimaryGeneratedColumn()
    idCita: number;

    @Column()
    folioCitasControl: string;

    @Column()
    fechaAtencionControl: string;

    @Column()
    lugarAtencionControl: number;

    @Column()
    nombreCompletoControl: string;

    @Column()
    motivoOrientacionControl: number;

    @Column()
    otroMotivoControl: string;

    @Column()
    atendidoPorControl: string;

    @Column()
    timestamp: string;

}