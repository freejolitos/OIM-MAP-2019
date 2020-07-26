import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwRevGesDoc',
    expression: `
    SELECT 
folioControl,
cs1.Respuesta as radioReunioDocumentosControl,
observacionesf2Control,
porQueControl,
cs2.Respuesta as radioResolucionMigratoriaControl,
cualControl,
fechaResolucionControl,
CURPControl,
negativaControl,
timestamp
FROM tbRevGestDoc
INNER JOIN catSiNo as cs1 on tbRevGestDoc.radioReunioDocumentosControl = cs1.idSiNo
INNER JOIN catSiNo as cs2 on tbRevGestDoc.radioResolucionMigratoriaControl = cs2.idSiNo
    `
})
export class vwRevGesDoc {

    @ViewColumn()
    folioControl: string;
    
    @ViewColumn()
    radioReunioDocumentosControl: string;

    @ViewColumn()
    observacionesf2Control: string;
    
    @ViewColumn()
    porQueControl: string;
    
    @ViewColumn()
    radioResolucionMigratoriaControl: string;
    
    @ViewColumn()
    cualControl: string;
    
    @ViewColumn()
    fechaResolucionControl: string;
    
    @ViewColumn()
    CURPControl: string;
    
    @ViewColumn()
    negativaControl: string;
    
    @ViewColumn()
	timestamp: string;

}


