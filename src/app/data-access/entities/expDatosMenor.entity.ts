import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expDatosMenor',
    expression: `
    SELECT 
    folioControl
    ,faseControl
    ,nombreCompletoControl
    ,nacionalidadControl
    ,fechaNacimientoControl
    ,edadControl
    ,radioGeneroControl
    ,telefonoControl
    ,observacionesControl
    ,timestamp
    FROM tbDatosMenor
    `
})
export class expDatosMenor {

    @ViewColumn()
    folioControl: string

    @ViewColumn()
    faseControl: number

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
    telefonoControl: string

    @ViewColumn()
    observacionesControl: string

    @ViewColumn()
    timestamp: string

}