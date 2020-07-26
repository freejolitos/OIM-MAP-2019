import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwGeneroMenorNA',
    expression: `
    SELECT
	catGenero.genero as 'respuesta',
	COUNT(radioGeneroControl) as 'totales'
FROM tbDatosMenor
	INNER JOIN catGenero ON tbDatosMenor.radioGeneroControl = catGenero.id
GROUP BY tbDatosMenor.radioGeneroControl
`
})
export class vwGeneroMenorNA {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}