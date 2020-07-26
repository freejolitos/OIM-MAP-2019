import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwEdoCivil',
    expression: `
    select 
	catEdoCivil.edoCivil as 'respuesta',
	count(tbDatosGenerales.estadoCivilControl) as 'totales'
FROM tbDatosGenerales 
	INNER JOIN catEdoCivil ON tbDatosGenerales.estadoCivilControl = catEdoCivil.id
GROUP BY tbDatosGenerales.estadoCivilControl;
`
})
export class vwEdoCivil {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}