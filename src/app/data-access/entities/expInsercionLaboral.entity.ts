import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expInsercionLaboral',
    expression: `
    SELECT
    folioControl
    ,radioPlaticaInformativaControl
    ,radioCanalizadoControl
    ,cualf3Control
    ,radioEncontroTrabajoControl
    ,dondeControl
    ,porquef3Control
    ,radioObtuvoDocumentosControl
    ,checkRFCControl
    ,RFCControl
    ,checkNSSControl
    ,NSSControl
    ,checkf3OtroControl
    ,otroControl
    ,porque2Control
    ,observacionesFinalesControl
    ,timestamp
    FROM tbInsercionLabo
    `
})
export class expInsercionLaboral {

    @ViewColumn()
    folioControl: string 

    @ViewColumn()
    radioPlaticaInformativaControl: number

    @ViewColumn()    
    radioCanalizadoControl: number

    @ViewColumn()
    cualf3Control: string

    @ViewColumn()
    radioEncontroTrabajoControl: number

    @ViewColumn()
    dondeControl: string

    @ViewColumn()
    porquef3Control: string

    @ViewColumn()
    radioObtuvoDocumentosControl: number

    @ViewColumn()
    checkRFCControl: number

    @ViewColumn()
    RFCControl: string

    @ViewColumn()
    checkNSSControl: number

    @ViewColumn()
    NSSControl: string

    @ViewColumn()
    checkf3OtroControl: number

    @ViewColumn()
    otroControl: string

    @ViewColumn()
    porque2Control: string

    @ViewColumn()
    observacionesFinalesControl: string

    @ViewColumn()
    timestamp: string

}