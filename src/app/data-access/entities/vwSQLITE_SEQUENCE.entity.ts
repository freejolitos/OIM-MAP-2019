import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name:'vwSQLITE_Status',
    expression:`
    SELECT name, seq FROM sqlite_sequence
`
})
export class vwSQLITE_Status {

    @ViewColumn()
    name: string;

    @ViewColumn()
    seq: number;

}