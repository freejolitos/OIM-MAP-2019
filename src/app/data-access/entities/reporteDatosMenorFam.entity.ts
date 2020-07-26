import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'reporteDatosMenorFam',
    expression: `
    SELECT
	tbDatosMenorFam.folioControl as 'folio',
	tbDatosMenorFam.idFolioFamilia as 'folioFamilia',
	catNacionalidades.Nacionalidad as 'nacionalidad',
	tbDatosMenorFam.fechaNacimientoControl as 'fechaNacimiento',
	tbDatosMenorFam.edadControl as 'edad',
	catGenero.genero as 'genero',
	catParentesco.parentesco as 'parentesco',
	catCondMigEsp.condicionMigratoriaEspecifica as 'condicionMigratoria',
	tbDatosMenorFam.observacionesControl as 'observaciones',
	tbDatosMenorFam.timestamp as 'fechaCaptura'
FROM tbDatosMenorFam
	INNER JOIN catNacionalidades on tbDatosMenorFam.nacionalidadControl = catNacionalidades.id
	INNER JOIN catGenero on tbDatosMenorFam.radioGeneroControl = catGenero.id
	INNER JOIN catParentesco on tbDatosMenorFam.parentescoControl = catParentesco.id
	INNER JOIN catCondMigEsp on tbDatosMenorFam.condicionMigratoriaControl = catCondMigEsp.id
    `
})
export class reporteDatosMenorFam {

    @ViewColumn()
    folio: string

    @ViewColumn()
    folioFamilia: string

    @ViewColumn()
    nacionalidad: string

    @ViewColumn()
    fechaNacimiento: string

    @ViewColumn()
    edad: number

    @ViewColumn()
    genero: string

    @ViewColumn()
    parentesco: string

    @ViewColumn()
    condicionMigratoria: string

    @ViewColumn()
    observaciones: string

    @ViewColumn()
    fechaCaptura: string



}