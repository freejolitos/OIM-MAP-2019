import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwRecibidoAtencion',
    expression: `
    SELECT csn.respuesta AS 'respuesta',
    COUNT(tb.radioRecibidoAtencionControl) AS 'totales'
FROM tbDatosGenerales AS tb
INNER JOIN catSiNo AS csn ON tb.radioRecibidoAtencionControl = csn.idSiNo
GROUP BY tb.radioRecibidoAtencionControl
`
})
export class vwRecibidoAtencion {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}