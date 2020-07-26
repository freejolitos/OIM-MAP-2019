import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expDatosGenerales',
    expression: `
    SELECT
folioControl
,idFolioFamilia
,checkCartaAtencionControl
,checkAvisoPrivacidadControl
,checkCodigoConductaControl
,radioRecibidoAtencionControl
,lugarAtencionControl
,doctoCartaAtencionControl
,doctoAvisoProvacidadControl
,doctoCodigoConductaCotrol
,nombresControl
,apellidoPaternoControl
,apellidoMaternoControl
,nombreAlternoControl
,fechaNacimientoControl
,edadControl
,nacionalidadControl
,departamentoControl
,telefonoControl
,correoElectronicoControl
,radioGeneroControl
,orientacionSexualControl
,idiomaControl
,estadoCivilControl
,radioLeerControl
,paisControl
,estadoControl
,CPControl
,fechaIngresoControl
,medioTransporteControl
,cuantasVecesControl
,radioRechazoAeropuertoControl
,radioEstacionMigratoriaControl
,estacionMigratoriaControl
,fechaIngresoEstacionControl
,fechaSalidaEstacionControl
,tiempoDetencionControl
,condicionMigratoriaControl
,haceCuantoTiempoControl
,condicionMigratoriaEspecificaControl
,otroCondicionMigratoriaControl
,checkPasaporteControl
,checkPartidaNacimientoControl
,checkCedulaIdentidadControl
,checkActaMatrimonioControl
,checkNingunoControl
,checkOtroControl
,otroDocumentoControl
,condicionMigratoriaTramiteControl
,otroTramiteSolicitarControl
,listadoDocumentosControl
,radioDocumentoIdentidadControl
,radioRealizoCanalizacionControl
,explicacionCanalizadoControl
,radioRequiereAcompanamientoControl
,queAcompanamientoControl
,observacionesControl
,fotoControl
,timestamp
FROM tbDatosGenerales
    `
})
export class expDatosGenerales {

    @ViewColumn()
    folioControl: string 

    @ViewColumn()
    idFolioFamilia: string

    @ViewColumn()
    checkCartaAtencionControl: number

    @ViewColumn()
    checkAvisoPrivacidadControl: number

    @ViewColumn() 
    checkCodigoConductaControl: number
    
    @ViewColumn()
    radioRecibidoAtencionControl: number

    @ViewColumn()
    lugarAtencionControl: number

    @ViewColumn()
    doctoCartaAtencionControl: string
    
    @ViewColumn()
    doctoAvisoProvacidadControl: string

    @ViewColumn()
    doctoCodigoConductaCotrol: string

    @ViewColumn()
    nombresControl: string

    @ViewColumn()
    apellidoPaternoControl: string

    @ViewColumn()
    apellidoMaternoControl: string

    @ViewColumn()
    nombreAlternoControl: string

    @ViewColumn()
    fechaNacimientoControl: string 

    @ViewColumn()
    edadControl: number

    @ViewColumn()
    nacionalidadControl: number

    @ViewColumn()
    departamentoControl: number

    @ViewColumn()
    telefonoControl: string

    @ViewColumn()
    correoElectronicoControl: string

    @ViewColumn()
    radioGeneroControl: number

    @ViewColumn()
    orientacionSexualControl: number

    @ViewColumn()
    idiomaControl: number

    @ViewColumn()
    estadoCivilControl: number

    @ViewColumn()
    radioLeerControl: number

    @ViewColumn()
    paisControl: number

    @ViewColumn()
    estadoControl: number

    @ViewColumn()
    CPControl: string

    @ViewColumn()
    fechaIngresoControl: string

    @ViewColumn()
    medioTransporteControl: number

    @ViewColumn()
    cuantasVecesControl: string

    @ViewColumn()
    radioRechazoAeropuertoControl: number

    @ViewColumn()
    radioEstacionMigratoriaControl: number

    @ViewColumn()
    estacionMigratoriaControl: number

    @ViewColumn()
    fechaIngresoEstacionControl: string

    @ViewColumn()
    fechaSalidaEstacionControl: string

    @ViewColumn()
    tiempoDetencionControl: string

    @ViewColumn()
    condicionMigratoriaControl: number

    @ViewColumn()
    haceCuantoTiempoControl: string

    @ViewColumn()
    condicionMigratoriaEspecificaControl: string

    @ViewColumn()
    otroCondicionMigratoriaControl: string

    @ViewColumn()
    checkPasaporteControl: number

    @ViewColumn()
    checkPartidaNacimientoControl: number

    @ViewColumn()
    checkCedulaIdentidadControl: number

    @ViewColumn()
    checkActaMatrimonioControl: number

    @ViewColumn()
    checkNingunoControl: number

    @ViewColumn()
    checkOtroControl: number

    @ViewColumn()
    otroDocumentoControl: string

    @ViewColumn()
    condicionMigratoriaTramiteControl: number

    @ViewColumn()
    otroTramiteSolicitarControl: string

    @ViewColumn()
    listadoDocumentosControl: string

    @ViewColumn()
    radioDocumentoIdentidadControl: number

    @ViewColumn()
    radioRealizoCanalizacionControl: number

    @ViewColumn()
    explicacionCanalizadoControl: string

    @ViewColumn()
    radioRequiereAcompanamientoControl: number

    @ViewColumn()
    queAcompanamientoControl: string

    @ViewColumn()
    observacionesControl: string
    
    @ViewColumn()
    fotoControl: string

    @ViewColumn()
    timestamp: string
}