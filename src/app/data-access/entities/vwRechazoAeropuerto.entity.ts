import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwRechazoAeropuerto',
    expression: `
    SELECT
	catSiNo.Respuesta as 'respuesta',
	count(tbDatosGenerales.radioRechazoAeropuertoControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catSiNo ON tbDatosGenerales.radioRechazoAeropuertoControl = catSiNo.idSiNo
GROUP BY tbDatosGenerales.radioRechazoAeropuertoControl
`
})
export class vwRechazoAeropuerto {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}