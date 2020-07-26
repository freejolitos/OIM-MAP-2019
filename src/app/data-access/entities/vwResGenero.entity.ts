import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwRespGenero',
    expression: `
SELECT cg.genero,
       COUNT(tb.radioGeneroControl) AS 'totales'
FROM tbDatosGenerales AS tb
INNER JOIN catGenero AS cg ON tb.radioGeneroControl = cg.id
GROUP BY tb.radioGeneroControl;
`
})
export class vwRespGenero {

    @ViewColumn()
    genero: string;

    @ViewColumn()
    totales: number;

}