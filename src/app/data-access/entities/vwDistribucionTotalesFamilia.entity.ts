import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwDistribucionTotalesFamilia',
    expression: `
    SELECT
	distCasos.respuesta,
	distCasos.totales
FROM
(SELECT
	'Casos infantiles' as 'respuesta',
	COUNT(idFolioFamilia) as 'totales'
FROM tbDatosGenerales WHERE idFolioFamilia != 0
UNION
SELECT
	'Casos adultos' as 'respuesta',
	COUNT(folioControl) as 'totales'
FROM tbDatosMenorFam) as distCasos
`
})
export class vwDistribucionTotalesFamilia {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}