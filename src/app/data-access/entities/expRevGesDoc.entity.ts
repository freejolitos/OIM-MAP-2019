import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expRevGesDoc',
    expression: `
    SELECT
        folioControl
        ,radioReunioDocumentosControl
        ,observacionesf2Control
        ,porQueControl
        ,radioResolucionMigratoriaControl
        ,cualControl
        ,fechaResolucionControl
        ,CURPControl
        ,negativaControl
        ,timestamp
    FROM tbRevGestDoc
    `
})
export class expRevGesDoc {

    @ViewColumn()
    folioControl: string 

    @ViewColumn()
    radioReunioDocumentosControl: number

    @ViewColumn()
    observacionesf2Control: string

    @ViewColumn()
    porQueControl: string

    @ViewColumn()
    radioResolucionMigratoriaControl: number

    @ViewColumn()
    cualControl: number

    @ViewColumn()
    fechaResolucionControl: string

    @ViewColumn()
    CURPControl: string

    @ViewColumn()
    negativaControl: string

    @ViewColumn()
    timestamp: string

    

}