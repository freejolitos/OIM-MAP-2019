import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'vwListadoInd',
    expression: `
    SELECT
    tbDatosGenerales.idFolioFamilia, 
    tbControlFases.folioControl,
	tbDatosGenerales.timestamp,
    tbDatosGenerales.nombresControl,
    tbDatosGenerales.apellidoPaternoControl,
    tbDatosGenerales.apellidoMaternoControl,
    catFases.Fase AS fase,
    catFases.URL AS URL
FROM
    tbDatosGenerales
		INNER JOIN
	tbControlFases ON tbDatosGenerales.folioControl = tbControlFases.folioControl
        INNER JOIN
    catFases ON tbControlFases.faseControl = catFases.idFase
ORDER BY tbDatosGenerales.timestamp DESC;
    `
})
export class vwListadoInd {

    @ViewColumn()
    idFolioFamilia: string;

    @ViewColumn()
    folioControl: string;

    @ViewColumn()
    timestamp: number;

    @ViewColumn()
    nombresControl: string;

    @ViewColumn()
    apellidoPaternoControl: string;

    @ViewColumn()
    apellidoMaternoControl: string;

    @ViewColumn()
    fase: string;

    @ViewColumn()
    URL: string;
}