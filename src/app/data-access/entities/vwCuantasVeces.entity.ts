import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwCuantasVeces',
    expression: `
    SELECT
	cuantasVecesControl as 'respuesta',
	count(cuantasVecesControl) as 'totales'
FROM tbDatosGenerales
	GROUP BY cuantasVecesControl
`
})
export class vwCuantasVeces {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}