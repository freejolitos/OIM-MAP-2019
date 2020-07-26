import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expControlFases',
    expression: `
    SELECT
	folioControl
	,faseControl
FROM tbControlFases
    `
})
export class expControlFases {

    @ViewColumn()
    folioControl: string 

    @ViewColumn()
    faseControl: string

}