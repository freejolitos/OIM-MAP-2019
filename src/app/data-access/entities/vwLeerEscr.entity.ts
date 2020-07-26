import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwLeerEscribir',
    expression: `
SELECT csn.respuesta AS 'respuesta',
       COUNT(tb.radioLeerControl) AS 'totales'
FROM tbDatosGenerales AS tb
INNER JOIN catSiNo AS csn ON tb.radioLeerControl = csn.idSiNo
GROUP BY tb.radioLeerControl;
`
})
export class vwLeerEscribir {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}