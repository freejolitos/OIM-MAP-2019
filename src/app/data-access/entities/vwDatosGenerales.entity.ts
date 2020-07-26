import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'vwDatosGen',
    expression: `
    SELECT 
	tbdg.id,
    tbdg.idFolioFamilia,
	tbdg.checkCartaAtencionControl,
	tbdg.checkAvisoPrivacidadControl,
	tbdg.checkCodigoConductaControl,
	tbdg.radioRecibidoAtencionControl,
	tbdg.lugarAtencionControl,
	tbdg.doctoCartaAtencionControl,
	tbdg.doctoAvisoProvacidadControl,
	tbdg.doctoCodigoConductaCotrol,
	tbdg.nombresControl,
	tbdg.apellidoMaternoControl,
    tbdg.apellidoPaternoControl,
    tbdg.nombreAlternoControl,
	tbdg.fechaNacimientoControl,
	tbdg.edadControl,
	cn.Nacionalidad as 'nacionalidadControl',
	cd.Departamento as 'departamentoControl',
    tbdg.telefonoControl,
    tbdg.correoElectronicoControl,
	cg.genero as 'radioGeneroControl',
	tbdg.orientacionSexualControl,
	tbdg.idiomaControl,
	tbdg.estadoCivilControl,
	tbdg.radioLeerControl,
	tbdg.paisControl,
	tbdg.estadoControl,
	tbdg.CPControl,
	tbdg.fechaIngresoControl,
	tbdg.medioTransporteControl,
	tbdg.cuantasVecesControl,
	tbdg.radioRechazoAeropuertoControl,
	tbdg.radioEstacionMigratoriaControl,
	tbdg.estacionMigratoriaControl,
	tbdg.fechaIngresoEstacionControl,
	tbdg.fechaSalidaEstacionControl,
	tbdg.tiempoDetencionControl,
	ccm.condicionMigratoria as 'condicionMigratoriaControl',
	tbdg.haceCuantoTiempoControl,
	tbdg.condicionMigratoriaEspecificaControl,
	tbdg.otroCondicionMigratoriaControl,
	tbdg.checkPasaporteControl,
	tbdg.checkPartidaNacimientoControl,
	tbdg.checkCedulaIdentidadControl,
	tbdg.checkActaMatrimonioControl,
	tbdg.checkNingunoControl,
	tbdg.checkOtroControl,
	tbdg.otroDocumentoControl,
	ccmt.condicionMigratoriaTramite as 'condicionMigratoriaTramiteControl',
	tbdg.otroTramiteSolicitarControl,
	tbdg.listadoDocumentosControl,
	tbdg.radioDocumentoIdentidadControl,
	tbdg.radioRealizoCanalizacionControl,
	tbdg.explicacionCanalizadoControl,
	tbdg.radioRequiereAcompanamientoControl,
	tbdg.queAcompanamientoControl,
	tbdg.observacionesControl,
	tbdg.fotoControl,
	tbdg.folioControl,
	tbdg.timestamp,
	cf.Fase AS fase,
    cf.URL AS URL
FROM tbDatosGenerales AS tbdg
		INNER JOIN
    catNacionalidades AS cn ON tbdg.nacionalidadControl = cn.id
        INNER JOIN
    catDepartamentos AS cd ON tbdg.departamentoControl = cd.idDepartamento
        INNER JOIN
    catGenero AS cg ON tbdg.radioGeneroControl = cg.id
        INNER JOIN
    catCondicionMigratoria AS ccm ON tbdg.condicionMigratoriaControl = ccm.id
        INNER JOIN
    catCondicionMigratoriaTramite AS ccmt ON tbdg.condicionMigratoriaTramiteControl = ccmt.id
		INNER JOIN
	tbControlFases AS tbcf ON tbdg.folioControl = tbcf.folioControl
        INNER JOIN
    catFases AS cf ON tbcf.faseControl = cf.idFase
    `
})
export class vwDatosGen {

    @ViewColumn()
    Id: number;

    @ViewColumn()
    folioControl: string;

    @ViewColumn()
    idFolioFamilia: number;

    @ViewColumn()
    checkCartaAtencionControl: number;

    @ViewColumn()
    checkAvisoPrivacidadControl: number;

    @ViewColumn()
    checkCodigoConductaControl: number;

    @ViewColumn()
    radioRecibidoAtencionControl: number;

    @ViewColumn()
    lugarAtencionControl: number;

    @ViewColumn()
    doctoCartaAtencionControl: string;

    @ViewColumn()
    doctoAvisoProvacidadControl: string;

    @ViewColumn()
    doctoCodigoConductaCotrol: string;

    @ViewColumn()
    nombresControl: string;

    @ViewColumn()
    apellidoPaternoControl: string;

    @ViewColumn()
    apellidoMaternoControl: string;

    @ViewColumn()
    nombreAlternoControl: string;

    @ViewColumn()
    fechaNacimientoControl: string;

    @ViewColumn()
    edadControl: number;

    @ViewColumn()
    nacionalidadControl: number;

    @ViewColumn()
    departamentoControl: number;

    @ViewColumn()
    telefonoControl: string;

    @ViewColumn()
    correoElectronicoControl: string

    @ViewColumn()
    radioGeneroControl: number;

    @ViewColumn()
    orientacionSexualControl: number;

    @ViewColumn()
    idiomaControl: number;

    @ViewColumn()
    estadoCivilControl: number;

    @ViewColumn()
    radioLeerControl: number;

    @ViewColumn()
    paisControl: number;

    @ViewColumn()
    estadoControl: number;

    @ViewColumn()
    CPControl: string;

    @ViewColumn()
    fechaIngresoControl: string;

    @ViewColumn()
    medioTransporteControl: number;

    @ViewColumn()
    cuantasVecesControl: string;

    @ViewColumn()
    radioRechazoAeropuertoControl: number;

    @ViewColumn()
    radioEstacionMigratoriaControl: number;

    @ViewColumn()
    estacionMigratoriaControl: number;

    @ViewColumn()
    fechaIngresoEstacionControl: string;

    @ViewColumn()
    fechaSalidaEstacionControl: string;

    @ViewColumn()
    tiempoDetencionControl: number;

    @ViewColumn()
    condicionMigratoriaControl: number;

    @ViewColumn()
    haceCuantoTiempoControl: string;

    @ViewColumn()
    condicionMigratoriaEspecificaControl: number;

    @ViewColumn()
    otroCondicionMigratoriaControl: string;

    @ViewColumn()
    checkPasaporteControl: number;

    @ViewColumn()
    checkPartidaNacimientoControl: number;

    @ViewColumn()
    checkCedulaIdentidadControl: number;

    @ViewColumn()
    checkActaMatrimonioControl: number;

    @ViewColumn()
    checkNingunoControl: number;

    @ViewColumn()
    checkOtroControl: number;

    @ViewColumn()
    otroDocumentoControl: string;

    @ViewColumn()
    condicionMigratoriaTramiteControl: string;

    @ViewColumn()
    otroTramiteSolicitarControl: string;

    @ViewColumn()
    listadoDocumentosControl: string;

    @ViewColumn()
    radioDocumentoIdentidadControl: number;

    @ViewColumn()
    radioRealizoCanalizacionControl: number;

    @ViewColumn()
    explicacionCanalizadoControl: string;

    @ViewColumn()
    radioRequiereAcompanamientoControl: number;

    @ViewColumn()
    queAcompanamientoControl: string;

    @ViewColumn()
    observacionesControl: string;

    @ViewColumn()
    fotoControl: string;

    @ViewColumn()
    timestamp: string;

    @ViewColumn()
    fase: string;

    @ViewColumn()
    URL: string;
}