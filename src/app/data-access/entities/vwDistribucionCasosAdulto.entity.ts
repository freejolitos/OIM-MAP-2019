import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwDistribucionCasosAdulto',
    expression: `
    SELECT
	distCasos.respuesta,
	distCasos.totales
FROM
(SELECT
	'Casos Individuales' as 'respuesta',
	COUNT(idFolioFamilia) as 'totales'
FROM tbDatosGenerales WHERE idFolioFamilia = 0
UNION
SELECT
	'Casos Familiares' as 'respuesta',
	COUNT(idFolioFamilia) as 'totales'
FROM tbDatosGenerales WHERE idFolioFamilia != 0) as distCasos
`
})
export class vwDistribucionCasosAdulto {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}