import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwEdadesMenorNA',
    expression: `
    SELECT
	tb1.edad,
	tb1.totales
FROM (
SELECT 0 as 'edad', SUM(CASE WHEN edadControl = 0 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 1 as 'edad', SUM(CASE WHEN edadControl = 1 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 2 as 'edad', SUM(CASE WHEN edadControl = 2 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 3 as 'edad', SUM(CASE WHEN edadControl = 3 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 4 as 'edad', SUM(CASE WHEN edadControl = 4 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 5 as 'edad', SUM(CASE WHEN edadControl = 5 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 6 as 'edad', SUM(CASE WHEN edadControl = 6 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 7 as 'edad', SUM(CASE WHEN edadControl = 7 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 8 as 'edad', SUM(CASE WHEN edadControl = 8 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 9 as 'edad', SUM(CASE WHEN edadControl = 9 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 10 as 'edad', SUM(CASE WHEN edadControl = 10 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 11 as 'edad', SUM(CASE WHEN edadControl = 11 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 12 as 'edad', SUM(CASE WHEN edadControl = 12 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 13 as 'edad', SUM(CASE WHEN edadControl = 13 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 14 as 'edad', SUM(CASE WHEN edadControl = 14 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 15 as 'edad', SUM(CASE WHEN edadControl = 15 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 16 as 'edad', SUM(CASE WHEN edadControl = 16 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 17 as 'edad', SUM(CASE WHEN edadControl = 17 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
UNION
SELECT 18 as 'edad', SUM(CASE WHEN edadControl = 18 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor
) AS tb1
`
})
export class vwEdadesMenorNA {

    @ViewColumn()
    edad: number;

    @ViewColumn()
    totales: number;

}