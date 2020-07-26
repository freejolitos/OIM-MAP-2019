import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwRespNac',
    expression: `
SELECT cn.Nacionalidad AS 'nacionalidad',
       COUNT(cn.Nacionalidad) AS 'totales'
FROM tbDatosGenerales AS tb
INNER JOIN catNacionalidades AS cn ON tb.NacionalidadControl = cn.id
GROUP BY cn.Nacionalidad
`
})
export class vwRespNac {

    @ViewColumn()
    nacionalidad: string;

    @ViewColumn()
    totales: number;

}