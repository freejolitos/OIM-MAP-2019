import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwCondicionMigratoriaTramite',
    expression: `
    SELECT
	catCondicionMigratoriaTramite.condicionMigratoriaTramite as 'respuesta',
	COUNT(condicionMigratoriaTramiteControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catCondicionMigratoriaTramite ON tbDatosGenerales.condicionMigratoriaTramiteControl = catCondicionMigratoriaTramite.id
GROUP BY tbDatosGenerales.condicionMigratoriaTramiteControl
`
})
export class vwCondicionMigratoriaTramite {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}