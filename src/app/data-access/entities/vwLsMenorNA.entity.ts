import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'vwListadoMenor',
    expression: `
SELECT dm.foliocontrol,
       dm.timestamp,
       dm.nombrecompletocontrol, 
       cn.nacionalidad AS nacionalidad, 
       dm.edadcontrol,
       dm.observacionesControl 
FROM   tbdatosmenor AS dm 
       INNER JOIN 
catnacionalidades AS cn ON dm.nacionalidadcontrol = cn.id 
`
})
export class vwListadoMenor {

    @ViewColumn()
    folioControl: string;

    @ViewColumn()
    timestamp: string;

    @ViewColumn()
    nombreCompletoControl: string;

    @ViewColumn()
    nacionalidad: string;

    @ViewColumn()
    edadcontrol: number;

    @ViewColumn()
    observacionesControl: string;

}