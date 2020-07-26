import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'reporteDatosMenor',
    expression: `
    SELECT
	tbDatosMenor.folioControl as 'folio',
	catNacionalidades.Nacionalidad as 'nacionalidad',
	tbDatosMenor.fechaNacimientoControl as 'fechaNacimiento',
	tbDatosMenor.edadControl as 'edad',
	catGenero.genero as 'genero',
	tbDatosMenor.observacionesControl as 'observaciones',
	tbDatosMenor.timestamp as 'fechaCaptura'
FROM tbDatosMenor
	INNER JOIN catNacionalidades on tbDatosMenor.nacionalidadControl = catNacionalidades.id
	INNER JOIN catGenero on tbDatosMenor.radioGeneroControl = catGenero.id
    `
})
export class reporteDatosMenor {

    @ViewColumn()
    folio: string

    @ViewColumn()
    nacionalidad: string

    @ViewColumn()
    fechaNacimiento: string

    @ViewColumn()
    edad: number

    @ViewColumn()
    genero: string

    @ViewColumn()
    observaciones: string

    @ViewColumn()
    fechaCaptura: string



}