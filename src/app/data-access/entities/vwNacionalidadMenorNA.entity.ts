import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwNacionalidadMenorNA',
    expression: `
    SELECT
	catNacionalidades.Nacionalidad as 'respuesta',
	COUNT(nacionalidadControl) as 'totales'
FROM tbDatosMenor
	INNER JOIN catNacionalidades ON tbDatosMenor.nacionalidadControl = catNacionalidades.id
GROUP BY tbDatosMenor.nacionalidadControl
`
})
export class vwNacionalidadMenorNA {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}