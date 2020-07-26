import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwCondMigEsp',
    expression: `
    SELECT
	catCondMigEsp.condicionMigratoriaEspecifica as 'respuesta',
	COUNT(condicionMigratoriaEspecificaControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catCondMigEsp ON tbDatosGenerales.condicionMigratoriaEspecificaControl = catCondMigEsp.id
GROUP BY tbDatosGenerales.condicionMigratoriaEspecificaControl
`
})
export class vwCondMigEsp {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}