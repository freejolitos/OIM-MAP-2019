import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'vwListadoMenorFam',
    expression: `
SELECT 
    tbDatosMenorFam.folioControl,
    tbDatosMenorFam.timestamp,
    tbDatosMenorFam.faseControl,
    tbDatosMenorFam.fechaNacimientoControl,
    tbDatosMenorFam.nombreCompletoControl,
    catFases.Fase AS fase,
    catFases.URL AS URL,
	tbDatosMenorFam.idFolioFamilia
FROM
    tbDatosMenorFam
        LEFT JOIN
    catFases ON tbDatosMenorFam.faseControl = catFases.idFase
`
})

export class vwListadoMenorfam {

    @ViewColumn()
    folioControl: string;

    @ViewColumn()
    timestamp: string;

    @ViewColumn()
    faseControl: number;

    @ViewColumn()
    fechaNacimientoControl: string;

    @ViewColumn()
    nombreCompletoControl: string;

    @ViewColumn()
    fase: string;

    @ViewColumn()
    URL: string;

    @ViewColumn()
    idFolioFamilia: string;

}