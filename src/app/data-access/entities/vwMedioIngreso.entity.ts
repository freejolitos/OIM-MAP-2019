import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwMedioIngreso',
    expression: `
    SELECT
	catMedioIngreso.medioTransporte as 'respuesta',
	COUNT(medioTransporteControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catMedioIngreso ON tbDatosGenerales.medioTransporteControl = catMedioIngreso.id
GROUP BY medioTransporteControl
`
})
export class vwMedioIngreso {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}