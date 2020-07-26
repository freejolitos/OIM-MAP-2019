import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expDatosMenorFam',
    expression: `
    SELECT
folioControl
,faseControl
,idFolioFamilia
,nombreCompletoControl
,nacionalidadControl
,fechaNacimientoControl
,edadControl
,radioGeneroControl
,parentescoControl
,otroControl
,condicionMigratoriaControl
,observacionesControl
,timestamp
FROM tbDatosMenorFam
    `
})
export class expDatosMenorFam {

    @ViewColumn()
    folioControl: string
    
    @ViewColumn()
    faseControl: number

    @ViewColumn()    
    idFolioFamilia: string

    @ViewColumn()
    nombreCompletoControl: string

    @ViewColumn() 
    nacionalidadControl: number

    @ViewColumn()
    fechaNacimientoControl: string

    @ViewColumn()
    edadControl: number

    @ViewColumn()
    radioGeneroControl: number

    @ViewColumn()
    parentescoControl: number

    @ViewColumn()
    otroControl: string

    @ViewColumn()
    condicionMigratoriaControl: number
    
    @ViewColumn()
    observacionesControl: string 

    @ViewColumn()
    timestamp: string

}