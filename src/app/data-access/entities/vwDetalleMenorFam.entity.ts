import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: 'vwDetalleMenorFam',
    expression: `
    SELECT 
	folioControl,
	idFolioFamilia,
	nombreCompletoControl,
	catNacionalidades.Nacionalidad as nacionalidadControl,
	fechaNacimientoControl,
	catGenero.genero as radioGeneroControl,
	catCondicionMigratoriaTramite.condicionMigratoriaTramite as condicionMigratoriaControl,
	observacionesControl,
    catParentesco.parentesco as parentescoControl
FROM tbDatosMenorFam
	INNER JOIN catNacionalidades ON tbDatosMenorFam.nacionalidadControl = catNacionalidades.id
	INNER JOIN catGenero ON tbDatosMenorFam.radioGeneroControl = catGenero.id
    INNER JOIN catCondicionMigratoriaTramite ON tbDatosMenorFam.condicionMigratoriaControl = catCondicionMigratoriaTramite.id
    INNER JOIN catParentesco ON tbDatosMenorFam.parentescoControl = catParentesco.id
    `
})
export class vwDetalleMenorFam {

    @ViewColumn()
    folioControl: string;

    @ViewColumn()
    idFolioFamilia: string;

    @ViewColumn()
    nombreCompletoControl: string;

    @ViewColumn()
    nacionalidadControl: string;

    @ViewColumn()
    fechaNacimientoControl: string;

    @ViewColumn()
    radioGeneroControl: string;

    @ViewColumn()
    condicionMigratoriaControl: string;

    @ViewColumn()
    observacionesControl: string;

    @ViewColumn()
    parentescoControl: string;

}