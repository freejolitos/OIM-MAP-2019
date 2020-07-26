import { ViewEntity, ViewColumn } from "typeorm";


@ViewEntity({
    name: 'expFoliosFamilia',
    expression: `
    SELECT
idFolioFamilia
,identificadorFamilia
,timestamp
FROM tbFoliosFamilia
    `
})
export class expFoliosFamilia {

    @ViewColumn()
    idFolioFamilia: string

    @ViewColumn()
    identificadorFamilia: string

    @ViewColumn()
    timestamp: string

}