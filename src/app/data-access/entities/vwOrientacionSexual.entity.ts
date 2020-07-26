import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwOrientacionSexual',
    expression: `
    SELECT
	catOrientacionSexual.orientacionSexual as 'respuesta',
	count(tbDatosGenerales.orientacionSexualControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catOrientacionSexual ON tbDatosGenerales.orientacionSexualControl = catOrientacionSexual.id
GROUP BY tbDatosGenerales.orientacionSexualControl
`
})
export class vwOrientacionSexual {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}