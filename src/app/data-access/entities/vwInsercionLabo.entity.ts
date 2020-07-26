import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwInsercionLabo',
    expression: `
    SELECT
	folioControl,
	cs1.Respuesta as radioPlaticaInformativaControl,
	cs2.Respuesta as radioCanalizadoControl,
	cs3.Respuesta as radioEncontroTrabajoControl,
	cs4.Respuesta as radioObtuvoDocumentosControl,
	RFCControl,
	NSSControl,
	otroControl,
	observacionesFinalesControl,
	timestamp
FROM tbInsercionLabo
	INNER JOIN catSiNo as cs1 on tbInsercionLabo.radioPlaticaInformativaControl = cs1.idSiNo
	INNER JOIN catSiNo as cs2 on tbInsercionLabo.radioCanalizadoControl = cs2.idSiNo
	INNER JOIN catSiNo as cs3 on tbInsercionLabo.radioEncontroTrabajoControl = cs3.idSiNo
	INNER JOIN catSiNo as cs4 on tbInsercionLabo.radioObtuvoDocumentosControl = cs4.idSiNo
    `
})
export class vwInsercionLabo {

    @ViewColumn()
    folioControl: string;

    @ViewColumn()
    radioPlaticaInformativaControl: string;

    @ViewColumn()
    radioCanalizadoControl: string;

    @ViewColumn()
    radioEncontroTrabajoControl: string;

    @ViewColumn()
    radioObtuvoDocumentosControl: string;

    @ViewColumn()
    RFCControl: string;

    @ViewColumn()
    NSSControl: string;

    @ViewColumn()
    otroControl: string;

    @ViewColumn()
    observacionesFinalesControl: string;

    @ViewColumn()
    timestamp: string;

}