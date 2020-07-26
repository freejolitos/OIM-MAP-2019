import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwRecibioCanalizacion',
    expression: `
    SELECT
	catSiNo.Respuesta as 'respuesta',
	COUNT(radioRealizoCanalizacionControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catSiNo ON tbDatosGenerales.radioRealizoCanalizacionControl = catSiNo.idSiNo
GROUP BY radioRealizoCanalizacionControl
`
})
export class vwRecibioCanalizacion {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}