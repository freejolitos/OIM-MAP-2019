import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwIdioma',
    expression: `
    SELECT 
	catIdioma.idioma as 'respuesta',
	count(tbDatosGenerales.idiomaControl) as 'totales'
FROM tbDatosGenerales
	INNER JOIN catIdioma ON tbDatosGenerales.idiomaControl = catIdioma.id
GROUP BY tbDatosGenerales.idiomaControl
`
})
export class vwIdioma {

    @ViewColumn()
    respuesta: string;

    @ViewColumn()
    totales: number;

}