import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwCondicionMigratoria',
    expression: `
    SELECT 
	catCondicionMigratoria.condicionMigratoria as 'respuesta',
	COUNT(tbDatosGenerales.condicionMigratoriaControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catCondicionMigratoria ON tbDatosGenerales.condicionMigratoriaControl = catCondicionMigratoria.id
GROUP BY tbDatosGenerales.condicionMigratoriaControl
`
})
export class vwCondicionMigratoria {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}