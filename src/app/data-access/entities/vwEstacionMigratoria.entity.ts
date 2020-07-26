import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwEstacionMigratoria',
    expression: `
    SELECT
	catSiNo.Respuesta as 'respuesta',
	count(tbDatosGenerales.radioEstacionMigratoriaControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catSiNo ON tbDatosGenerales.radioEstacionMigratoriaControl = catSiNo.idSiNo
GROUP BY tbDatosGenerales.radioEstacionMigratoriaControl

`
})
export class vwEstacionMigratoria {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}