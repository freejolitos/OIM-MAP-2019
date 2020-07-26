import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'tbDatosGenerales' })
export class DatosGenerales extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    folioControl: string;

    @Column()
    idFolioFamilia: number;

    @Column()
    checkCartaAtencionControl: number;

    @Column()
    checkAvisoPrivacidadControl: number;

    @Column()
    checkCodigoConductaControl: number;

    @Column()
    radioRecibidoAtencionControl: number;

    @Column()
    lugarAtencionControl: number;

    @Column()
    doctoCartaAtencionControl: string;

    @Column()
    doctoAvisoProvacidadControl: string;

    @Column()
    doctoCodigoConductaCotrol: string;

    @Column()
    nombresControl: string;

    @Column()
    apellidoPaternoControl: string;

    @Column()
    apellidoMaternoControl: string;

    @Column()
    nombreAlternoControl: string;

    @Column()
    fechaNacimientoControl: string;

    @Column()
    edadControl: number;

    @Column()
    nacionalidadControl: number;

    @Column()
    departamentoControl: number;

    @Column()
    telefonoControl: string;

    @Column()
    correoElectronicoControl: string

    @Column()
    radioGeneroControl: number;

    @Column()
    orientacionSexualControl: number;

    @Column()
    idiomaControl: number;

    @Column()
    estadoCivilControl: number;

    @Column()
    radioLeerControl: number;

    @Column()
    paisControl: number;

    @Column()
    estadoControl: number;

    @Column()
    CPControl: string;

    @Column()
    fechaIngresoControl: string;

    @Column()
    medioTransporteControl: number;

    @Column()
    cuantasVecesControl: string;

    @Column()
    radioRechazoAeropuertoControl: number;

    @Column()
    radioEstacionMigratoriaControl: number;

    @Column()
    estacionMigratoriaControl: number;

    @Column()
    fechaIngresoEstacionControl: string;

    @Column()
    fechaSalidaEstacionControl: string;

    @Column()
    tiempoDetencionControl: number;

    @Column()
    condicionMigratoriaControl: number;

    @Column()
    haceCuantoTiempoControl: string;

    @Column()
    condicionMigratoriaEspecificaControl: number;

    @Column()
    otroCondicionMigratoriaControl: string;

    @Column()
    checkPasaporteControl: number;

    @Column()
    checkPartidaNacimientoControl: number;

    @Column()
    checkCedulaIdentidadControl: number;

    @Column()
    checkActaMatrimonioControl: number;

    @Column()
    checkNingunoControl: number;

    @Column()
    checkOtroControl: number;

    @Column()
    otroDocumentoControl: string;

    @Column()
    condicionMigratoriaTramiteControl: number;

    @Column()
    otroTramiteSolicitarControl: string;

    @Column()
    listadoDocumentosControl: string;

    @Column()
    radioDocumentoIdentidadControl: number;

    @Column()
    radioRealizoCanalizacionControl: number;

    @Column()
    explicacionCanalizadoControl: string;

    @Column()
    radioRequiereAcompanamientoControl: number;

    @Column()
    queAcompanamientoControl: string;

    @Column()
    observacionesControl: string;

    @Column()
    fotoControl: string;

    @Column()
    timestamp: string;

}