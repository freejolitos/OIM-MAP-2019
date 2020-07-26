import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'reporteDatosGenerales',
    expression: `
    SELECT
    tb0.folioControl as 'folio'
    ,tb0.idFolioFamilia as 'folioFamilia'
    ,csn01.respuesta as 'recibioAtencion'
    ,tb0.lugarAtencionControl as 'lugarDeAtencion'
    ,tb0.fechaNacimientoControl as 'fechaNacimiento'
    ,tb0.edadControl as 'edad'
    ,catNacionalidades.Nacionalidad as 'nacionalidad'
    ,catDepartamentos.Departamento as 'departamento'
    ,catGenero.genero as 'genero'
    ,catOrientacionSexual.orientacionSexual as 'orientacionSexual'
    ,catIdioma.idioma as 'idioma'
    ,catEdoCivil.edoCivil as 'estadoCivil'
    ,csn02.respuesta as 'sabeLeerEscribir'
    ,tb0.CPControl as 'CP'
    ,tb0.fechaIngresoControl as 'fechaIngreso'
    ,catMedioIngreso.medioTransporte as 'medioIngreso'
    ,tb0.cuantasVecesControl as 'cuantasVecesIngreso'
    ,csn03.respuesta as 'rechazadoAeropuerto'
    ,csn04.respuesta as 'estadoEnEstacionMigratoria'
    ,tb0.estacionMigratoriaControl as 'cualEstacionMigratoria'
    ,tb0.fechaIngresoEstacionControl as 'fechaIngresoEstacionMigratoria'
    ,tb0.fechaSalidaEstacionControl as 'fechaSalidaEstacionMigratoria'
    ,tb0.tiempoDetencionControl as 'tiempoDetencionEstacionMigratoria'
    ,catCondicionMigratoria.condicionMigratoria as 'condicionMigratoria'
    ,tb0.haceCuantoTiempoControl as 'haceCuantoTiempo'
    ,catCondMigEsp.condicionMigratoriaEspecifica as 'condicionMigratoriaEspecifica'
    ,tb0.otroCondicionMigratoriaControl as 'otraCondicionMigratoria'
    ,catCondicionMigratoriaTramite.condicionMigratoriaTramite as 'condicionMigratoriaTramiteSolicitar'
    ,tb0.otroTramiteSolicitarControl as 'otroTramiteSolicitar'
    ,tb0.listadoDocumentosControl as 'listadoDocumentos'
    ,csn05.respuesta as  'tieneDocumentoIdentidad'
    ,csn06.respuesta as 'seRealizoCanalizacion'
    ,tb0.explicacionCanalizadoControl as 'explicacionCanalizacion'
    ,csn07.respuesta as 'requiereAcompanamiento'
    ,tb0.queAcompanamientoControl as 'queAcompanamiento'
    ,tb0.observacionesControl as 'observaciones'
    ,tb0.timestamp as 'fechaCaptura'
    FROM tbDatosGenerales as tb0
        INNER JOIN catSiNo as csn01 on tb0.radioRecibidoAtencionControl = csn01.idSiNo
        INNER JOIN catNacionalidades on tb0.nacionalidadControl = catNacionalidades.id
        INNER JOIN catDepartamentos on tb0.departamentoControl = catDepartamentos.idDepartamento
        INNER JOIN catGenero on tb0.radioGeneroControl = catGenero.id
        INNER JOIN catOrientacionSexual on tb0.orientacionSexualControl = catOrientacionSexual.id
        INNER JOIN catIdioma on tb0.idiomaControl = catIdioma.id
        INNER JOIN catEdoCivil on tb0.estadoCivilControl = catEdoCivil.id
        INNER JOIN catSiNo as csn02 on tb0.radioLeerControl = csn02.idSiNo
        INNER JOIN catMedioIngreso on tb0.medioTransporteControl = catMedioIngreso.id
        INNER JOIN catSiNo as csn03 on tb0.radioRechazoAeropuertoControl = csn03.idSiNo
        INNER JOIN catSiNo as csn04 on tb0.radioDocumentoIdentidadControl = csn04.idSiNo
        INNER JOIN catCondicionMigratoria on tb0.condicionMigratoriaControl = catCondicionMigratoria.id
        INNER JOIN catCondMigEsp on tb0.condicionMigratoriaEspecificaControl = catCondMigEsp.id
        INNER JOIN catCondicionMigratoriaTramite on tb0.condicionMigratoriaTramiteControl = catCondicionMigratoriaTramite.id
        INNER JOIN catSiNo as csn05 on tb0.radioDocumentoIdentidadControl = csn05.idSiNo
        INNER JOIN catSiNo as csn06 on tb0.radioDocumentoIdentidadControl = csn06.idSiNo
        INNER JOIN catSiNo as csn07 on tb0.radioDocumentoIdentidadControl = csn07.idSiNo
    `
})
export class reporteDatosGenerales {

    @ViewColumn()
    folio: string

    @ViewColumn()
    folioFamilia: string

    @ViewColumn()
    recibioAtencion: string

    @ViewColumn()
    lugarDeAtencion: string

    @ViewColumn()
    fechaNacimiento: string

    @ViewColumn()
    edad: string

    @ViewColumn()
    nacionalidad: string

    @ViewColumn()
    departamento: string

    @ViewColumn()
    genero: string

    @ViewColumn()
    orientacionSexual: string

    @ViewColumn()
    idioma: string

    @ViewColumn()
    estadoCivil: string

    @ViewColumn()
    sabeLeerEscribir: string

    @ViewColumn()
    CP: string

    @ViewColumn()
    fechaIngreso: string

    @ViewColumn()
    medioIngreso: string

    @ViewColumn()
    cuantasVecesIngreso: string

    @ViewColumn()
    rechazadoAeropuerto: string

    @ViewColumn()
    estadoEnEstacionMigratoria: string

    @ViewColumn()
    cualEstacionMigratoria: string

    @ViewColumn()
    fechaIngresoEstacionMigratoria: string

    @ViewColumn()
    fechaSalidaEstacionMigratoria: string

    @ViewColumn()
    tiempoDetencionEstacionMigratoria: string

    @ViewColumn()
    condicionMigratoria: string

    @ViewColumn()
    haceCuantoTiempo: string

    @ViewColumn()
    condicionMigratoriaEspecifica: string

    @ViewColumn()
    otraCondicionMigratoria: string

    @ViewColumn()
    condicionMigratoriaTramiteSolicitar: string

    @ViewColumn()
    otroTramiteSolicitar: string

    @ViewColumn()
    listadoDocumentos: string

    @ViewColumn()
    tieneDocumentoIdentidad: string

    @ViewColumn()
    seRealizoCanalizacion: string

    @ViewColumn()
    explicacionCanalizacion: string

    @ViewColumn()
    requiereAcompanamiento: string

    @ViewColumn()
    queAcompanamiento: string

    @ViewColumn()
    observaciones: string

    @ViewColumn()
    fechaCaptura: string
}