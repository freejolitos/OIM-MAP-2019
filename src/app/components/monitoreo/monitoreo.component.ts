import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { misValidaciones } from '../../shared/validations.directives';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento
import Inputmask from 'inputmask'; // Libreria para mascaras
import { getConnectionManager, getConnection } from 'typeorm';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { DatabaseService } from '../../data-access/database.service';
import { vwRecibidoAtencion } from '../../data-access/entities/vwRecAtencion.entity';
import { vwRespGenero } from '../../data-access/entities/vwResGenero.entity';
import { vwRespNac } from '../../data-access/entities/vwResNac.entity';
import { vwLeerEscribir } from '../../data-access/entities/vwLeerEscr.entity';
import { vwEdoCivil } from '../../data-access/entities/vwEdoCivil.entity';
import { vwIdioma } from '../../data-access/entities/vwIdioma.entity';
import { vwOrientacionSexual } from '../../data-access/entities/vwOrientacionSexual.entity';
import { vwMedioIngreso } from '../../data-access/entities/vwMedioIngreso.entity';
import { vwCuantasVeces } from '../../data-access/entities/vwCuantasVeces.entity';
import { vwRechazoAeropuerto } from '../../data-access/entities/vwRechazoAeropuerto.entity';
import { vwEstacionMigratoria } from '../../data-access/entities/vwEstacionMigratoria.entity';
import { vwCondicionMigratoria } from '../../data-access/entities/vwCondicionMigraroria.entity';
import { vwCondMigEsp } from '../../data-access/entities/vwCondMigEsp.entity';
import { vwCondicionMigratoriaTramite } from '../../data-access/entities/vwCondicionMigratoriaTramite.entity';
import { vwRecibioCanalizacion } from '../../data-access/entities/vwRecibioCanalizacion.entity';
import { vwDistribucionCasosAdulto } from '../../data-access/entities/vwDistribucionCasosAdulto.entity';
import { vwDistribucionTotalesFamilia } from '../../data-access/entities/vwDistribucionTotalesFamilia.entity';
import { vwNacionalidadMenorNA } from '../../data-access/entities/vwNacionalidadMenorNA.entity';
import { vwGeneroMenorNA } from '../../data-access/entities/vwGeneroMenorNA.entity';
import { vwEdadesMenorNA } from '../../data-access/entities/vwEdadesMenorNA.entity';

// Para reporteria
import { reporteDatosMenor } from 'src/app/data-access/entities/reporteDatosMenor.entity';
import { JsonPipe } from '@angular/common';
import { reporteDatosMenorFam } from 'src/app/data-access/entities/reporteDatosMenorFam.entity';
import { reporteDatosGenerales } from 'src/app/data-access/entities/reporteDatosGenerales.entity';

declare var M: any;
declare var $: any;

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css'],
  providers: [
    DatabaseService
  ]
})
export class MonitoreoComponent implements OnInit, OnDestroy {

  fecha1: string;
  fecha2: string;
  private sub: any;
  public destroyed = new Subject<any>();

  // Recibido Atencion
  recibidoAtencionData: vwRecibidoAtencion[] = [];
  xRecibidoAtencionData = [];
  yRecibidoAtencionData = [];

  // Respuesta genero Adulto
  respuestaGeneroAdulto: vwRespGenero[] = [];
  xRespuestaGeneroAdulto = [];
  yRespuestaGeneroAdulto = [];

  // Nacionalidad Adulto
  nacionalidadAdulto: vwRespNac[] = [];
  xNacionalidadAdulto = [];
  yNacionalidadAdulto = [];

  // Respuesta leer y escribir adulto
  respuestaLeerAdulto: vwLeerEscribir[] = [];
  xRespuestaLeerAdulto = [];
  yRespuestaLeerAdulto = [];

  // Respuesta estado civil adulto
  respuestaEstadoCivil: vwEdoCivil[] = [];
  xRespuestaEstadoCivil = [];
  yRespuestaEstadoCivil = [];

  // Respuesta estado civil adulto
  respuestaIdioma: vwIdioma[] = [];
  xRespuestaIdioma = [];
  yRespuestaIdioma = [];

  // Respuesta estado civil adulto
  respuestaOrientacionSexual: vwOrientacionSexual[] = [];
  xRespuestaOrientacionSexual = [];
  yRespuestaOrientacionSexual = [];

  // Respuesta medio ingreso adulto
  respuestaMedioIngreso: vwMedioIngreso[] = [];
  xRespuestaMedioIngreso = [];
  yRespuestaMedioIngreso = [];

  // Respuesta cuantas veces adulto
  respuestaCuantasVeces: vwCuantasVeces[] = [];
  xRespuestaCuantasVeces = [];
  yRespuestaCuantasVeces = [];

  // Repuesta rechazo aeropuerto adulto
  respuestaRechazoAeropuerto: vwRechazoAeropuerto[] = [];
  xRespuestaRechazoAeropuerto = [];
  yRespuestaRechazoAeropuerto = [];

  // Respuesta estacion migratoria adulto
  respuestaEstacionMigratoria: vwEstacionMigratoria[] = [];
  xRespuestaEstacionMigratoria = [];
  yRespuestaEstacionMigratoria = [];

  // Respuesta condicion migratoria adulto
  respuestaCondicionMigratoria: vwCondicionMigratoria[] = [];
  xRespuestaCondicionMigratoria = [];
  yRespuestaCondicionMigratoria = [];

  // Respuesta condicion migratoria especifica
  respuestaCondicionMigratoriaEspecifica: vwCondMigEsp[] = [];
  xRespuestaCondicionMigratoriaEspecifica = [];
  yRespuestaCondicionMigratoriaEspecifica = [];

  // Respuesta condicion migratoria tramite
  respuestaCondicionMigratoriaTramite: vwCondicionMigratoriaTramite[] = [];
  xRespuestaCondicionMigratoriaTramite = [];
  yRespuestaCondicionMigratoriaTramite = [];

  respuestaRecibioCanalizacion: vwRecibioCanalizacion[] = [];
  xRespuestaRecibioCanalizacion = [];
  yRespuestaRecibioCanalizacion = [];

  respuestaDistribucionCasosAdulto: vwDistribucionCasosAdulto[] = [];
  xRespuestaDistribucionCasosAdulto = [];
  yRespuestaDistribucionCasosAdulto = [];

  respuestaDistribucionTotalesFamilia: vwDistribucionTotalesFamilia[] = [];
  xRespuestaDistribucionTotalesFamilia = [];
  yRespuestaDistribucionTotalesFamilia = [];

  respuestaNacionalidadMenorNA: vwNacionalidadMenorNA[] = [];
  xRespuestaNacionalidadMenorNA = [];
  yRespuestaNacionalidadMenorNA = [];

  generoMenorNA: vwGeneroMenorNA[] = [];
  xGeneroMenorNA = [];
  yGeneroMenorNA = [];

  edadesMenorNA: vwEdadesMenorNA[] = [];
  xEdadesMenorNA = [];
  yEdadesMenorNA = [];

  varReporteDatosMenor: reporteDatosMenor[] = [];
  varReporteDatosMenorFam: reporteDatosMenorFam[] = [];
  varReporteDatosGenerales: reporteDatosGenerales[] = [];

  constructor(
    private _database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  // == Funciones para obtener datos == //
  async getDatosMonitoreo(fecha1: string, fecha2: string) {

    // INICIO QUERYs
    let queryRecibidoAtencionData: string = `SELECT csn.respuesta AS 'respuesta', COUNT(tb.radioRecibidoAtencionControl) AS 'totales' FROM tbDatosGenerales AS tb INNER JOIN catSiNo AS csn ON tb.radioRecibidoAtencionControl = csn.idSiNo WHERE tb.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tb.radioRecibidoAtencionControl;`
    let queryRespuestaGeneroAdulto: string = `SELECT cg.genero, COUNT(tb.radioGeneroControl) AS 'totales' FROM tbDatosGenerales AS tb INNER JOIN catGenero AS cg ON tb.radioGeneroControl = cg.id WHERE tb.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tb.radioGeneroControl;`
    let queryNacionalidadAdulto: string = `SELECT cn.Nacionalidad AS 'nacionalidad', COUNT(cn.Nacionalidad) AS 'totales' FROM tbDatosGenerales AS tb INNER JOIN catNacionalidades AS cn ON tb.NacionalidadControl = cn.id WHERE tb.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY cn.Nacionalidad;`
    let queryRespuestaLeerAdulto: string = `SELECT csn.respuesta AS 'respuesta', COUNT(tb.radioLeerControl) AS 'totales' FROM tbDatosGenerales AS tb INNER JOIN catSiNo AS csn ON tb.radioLeerControl = csn.idSiNo WHERE tb.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tb.radioLeerControl;`
    let queryRespuestaEstadoCivil: string = `SELECT catEdoCivil.edoCivil as 'respuesta', count(tbDatosGenerales.estadoCivilControl) as 'totales' FROM tbDatosGenerales INNER JOIN catEdoCivil ON tbDatosGenerales.estadoCivilControl = catEdoCivil.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.estadoCivilControl;`
    let queryRespuestaIdioma: string = `SELECT catIdioma.idioma as 'respuesta', count(tbDatosGenerales.idiomaControl) as 'totales' FROM tbDatosGenerales INNER JOIN catIdioma ON tbDatosGenerales.idiomaControl = catIdioma.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.idiomaControl;`
    let queryRespuestaOrientacionSexual: string = `SELECT catOrientacionSexual.orientacionSexual as 'respuesta', count(tbDatosGenerales.orientacionSexualControl) as 'totales' FROM tbDatosGenerales INNER JOIN catOrientacionSexual ON tbDatosGenerales.orientacionSexualControl = catOrientacionSexual.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.orientacionSexualControl;`
    let queryRespuestaMedioIngreso: string = `SELECT catMedioIngreso.medioTransporte as 'respuesta', COUNT(medioTransporteControl) as 'totales' FROM tbDatosGenerales INNER JOIN catMedioIngreso ON tbDatosGenerales.medioTransporteControl = catMedioIngreso.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY medioTransporteControl;`
    let queryRespuestaCuantasVeces: string = `SELECT cuantasVecesControl as 'respuesta', count(cuantasVecesControl) as 'totales' FROM tbDatosGenerales WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY cuantasVecesControl;`
    let queryRespuestaRechazoAeropuerto: string = `SELECT catSiNo.Respuesta as 'respuesta', count(tbDatosGenerales.radioRechazoAeropuertoControl) as 'totales' FROM tbDatosGenerales INNER JOIN catSiNo ON tbDatosGenerales.radioRechazoAeropuertoControl = catSiNo.idSiNo WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.radioRechazoAeropuertoControl;`
    let queryRespuestaEstacionMigratoria: string = `SELECT catSiNo.Respuesta as 'respuesta', count(tbDatosGenerales.radioEstacionMigratoriaControl) as 'totales' FROM tbDatosGenerales INNER JOIN catSiNo ON tbDatosGenerales.radioEstacionMigratoriaControl = catSiNo.idSiNo WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.radioEstacionMigratoriaControl;`
    let queryRespuestaCondicionMigratoria: string = `SELECT catCondicionMigratoria.condicionMigratoria as 'respuesta', COUNT(tbDatosGenerales.condicionMigratoriaControl) as 'totales' FROM tbDatosGenerales INNER JOIN catCondicionMigratoria ON tbDatosGenerales.condicionMigratoriaControl = catCondicionMigratoria.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.condicionMigratoriaControl;`
    let queryRespuestaCondicionMigratoriaEspecifica: string = `SELECT catCondMigEsp.condicionMigratoriaEspecifica as 'respuesta', COUNT(condicionMigratoriaEspecificaControl) as 'totales' FROM tbDatosGenerales INNER JOIN catCondMigEsp ON tbDatosGenerales.condicionMigratoriaEspecificaControl = catCondMigEsp.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.condicionMigratoriaEspecificaControl;`
    let queryRespuestaCondicionMigratoriaTramite: string = `SELECT catCondicionMigratoriaTramite.condicionMigratoriaTramite as 'respuesta', COUNT(condicionMigratoriaTramiteControl) as 'totales' FROM tbDatosGenerales INNER JOIN catCondicionMigratoriaTramite ON tbDatosGenerales.condicionMigratoriaTramiteControl = catCondicionMigratoriaTramite.id WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosGenerales.condicionMigratoriaTramiteControl;`
    let queryRespuestaRecibidoCanalizacion: string = `SELECT catSiNo.Respuesta as 'respuesta', COUNT(radioRealizoCanalizacionControl) as 'totales' FROM tbDatosGenerales INNER JOIN catSiNo ON tbDatosGenerales.radioRealizoCanalizacionControl = catSiNo.idSiNo WHERE tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY radioRealizoCanalizacionControl;`
    let queryRespuestaDistribucionCasosAdulto: string = `SELECT distCasos.respuesta, distCasos.totales FROM(SELECT 'Casos Individuales' as 'respuesta', COUNT(idFolioFamilia) as 'totales' FROM tbDatosGenerales WHERE idFolioFamilia = 0 AND tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 'Casos Familiares' as 'respuesta', COUNT(idFolioFamilia) as 'totales' FROM tbDatosGenerales WHERE idFolioFamilia != 0 AND tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `') as distCasos;`
    let queryRespuestaDistribucionTotalesFamilia: string = `SELECT distCasos.respuesta, distCasos.totales FROM(SELECT 'Casos infantiles' as 'respuesta', COUNT(idFolioFamilia) as 'totales' FROM tbDatosGenerales WHERE idFolioFamilia != 0 AND tbDatosGenerales.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 'Casos adultos' as 'respuesta', COUNT(folioControl) as 'totales' FROM tbDatosMenorFam WHERE tbDatosMenorFam.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `') as distCasos;`
    let queryRespuestaNacionalidadMenorNA: string = `SELECT catNacionalidades.Nacionalidad as 'respuesta', COUNT(nacionalidadControl) as 'totales' FROM tbDatosMenor INNER JOIN catNacionalidades ON tbDatosMenor.nacionalidadControl = catNacionalidades.id WHERE tbDatosMenor.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosMenor.nacionalidadControl;`
    let queryGeneroMenorNA: string = `SELECT catGenero.genero as 'respuesta', COUNT(radioGeneroControl) as 'totales' FROM tbDatosMenor INNER JOIN catGenero ON tbDatosMenor.radioGeneroControl = catGenero.id WHERE tbDatosMenor.timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' GROUP BY tbDatosMenor.radioGeneroControl;`
    let queryEdadesMenorNA: string = `SELECT tb1.edad, tb1.totales FROM( SELECT 0 as 'edad', SUM(CASE WHEN edadControl = 0 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 1 as 'edad', SUM(CASE WHEN edadControl = 1 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 2 as 'edad', SUM(CASE WHEN edadControl = 2 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 3 as 'edad', SUM(CASE WHEN edadControl = 3 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 4 as 'edad', SUM(CASE WHEN edadControl = 4 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 5 as 'edad', SUM(CASE WHEN edadControl = 5 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 6 as 'edad', SUM(CASE WHEN edadControl = 6 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 7 as 'edad', SUM(CASE WHEN edadControl = 7 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 8 as 'edad', SUM(CASE WHEN edadControl = 8 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 9 as 'edad', SUM(CASE WHEN edadControl = 9 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 10 as 'edad', SUM(CASE WHEN edadControl = 10 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 11 as 'edad', SUM(CASE WHEN edadControl = 11 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 12 as 'edad', SUM(CASE WHEN edadControl = 12 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 13 as 'edad', SUM(CASE WHEN edadControl = 13 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 14 as 'edad', SUM(CASE WHEN edadControl = 14 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 15 as 'edad', SUM(CASE WHEN edadControl = 15 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 16 as 'edad', SUM(CASE WHEN edadControl = 16 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 17 as 'edad', SUM(CASE WHEN edadControl = 17 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `' UNION SELECT 18 as 'edad', SUM(CASE WHEN edadControl = 18 THEN 1 ELSE 0 END) AS 'totales' FROM tbDatosMenor WHERE timestamp BETWEEN '` + fecha1 + `' AND '` + fecha2 + `') AS tb1;`
    // FIN QUERYs

    const conexion = await this._database.connection

    const rRecibidoAtencion = await conexion.manager
      .query(queryRecibidoAtencionData)
    // const rRecibidoAtencion = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwRecibidoAtencion, "res")
    //   .getMany()

    const rRespGenero = await conexion.manager
      .query(queryRespuestaGeneroAdulto)
    // const rRespGenero = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwRespGenero, "res")
    //   .getMany()

    const rRespNac = await conexion.manager
      .query(queryNacionalidadAdulto)
    // const rRespNac = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwRespNac, "res")
    //   .getMany()

    const rLeerEscribir = await conexion.manager
      .query(queryRespuestaLeerAdulto)
    // const rLeerEscribir = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwLeerEscribir, "res")
    //   .getMany()

    const rEdoCivil = await conexion.manager
      .query(queryRespuestaEstadoCivil)
    // const rEdoCivil = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwEdoCivil, "res")
    //   .getMany()

    const rIdioma = await conexion.manager
      .query(queryRespuestaIdioma)
    // const rIdioma = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwIdioma, "res")
    //   .getMany()

    const rOrientacionSexual = await conexion.manager
      .query(queryRespuestaOrientacionSexual)
    // const rOrientacionSexual = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwOrientacionSexual, "res")
    //   .getMany()

    const rMedioIngreso = await conexion.manager
      .query(queryRespuestaMedioIngreso)
    // const rMedioIngreso = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwMedioIngreso, "res")
    //   .getMany()

    const rCuantasVeces = await conexion.manager
      .query(queryRespuestaCuantasVeces)
    // const rCuantasVeces = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwCuantasVeces, "res")
    //   .getMany()

    const rRechazoAeropuerto = await conexion.manager
      .query(queryRespuestaRechazoAeropuerto)
    // const rRechazoAeropuerto = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwRechazoAeropuerto, "res")
    //   .getMany()

    const rEstacionMigratoria = await conexion.manager
      .query(queryRespuestaEstacionMigratoria)
    // const rEstacionMigratoria = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwEstacionMigratoria, "res")
    //   .getMany()

    const rCondicionMigratoria = await conexion.manager
      .query(queryRespuestaCondicionMigratoria)
    // const rCondicionMigratoria = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwCondicionMigratoria, "res")
    //   .getMany()

    const rCondicionMigratoriaEspecifica = await conexion.manager
      .query(queryRespuestaCondicionMigratoriaEspecifica)
    // const rCondicionMigratoriaEspecifica = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwCondMigEsp, "res")
    //   .getMany()

    const rCondicionMigratoriaTramite = await conexion.manager
      .query(queryRespuestaCondicionMigratoriaTramite)
    // const rCondicionMigratoriaTramite = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwCondicionMigratoriaTramite, "res")
    //   .getMany()

    const rRecibioCanalizacion = await conexion.manager
      .query(queryRespuestaRecibidoCanalizacion)
    // const rRecibioCanalizacion = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwRecibioCanalizacion, "res")
    //   .getMany()

    const rDistribucionCasosAdulto = await conexion.manager
      .query(queryRespuestaDistribucionCasosAdulto)
    // const rDistribucionCasosAdulto = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwDistribucionCasosAdulto, "res")
    //   .getMany()

    const rDistribucionTotalesFamilia = await conexion.manager
      .query(queryRespuestaDistribucionTotalesFamilia)
    // const rDistribucionTotalesFamilia = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwDistribucionTotalesFamilia, "res")
    //   .getMany()

    const rNacionalidadMenorNA = await conexion.manager
      .query(queryRespuestaNacionalidadMenorNA)
    // const rNacionalidadMenorNA = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwNacionalidadMenorNA, "res")
    //   .getMany()

    const rGeneroMenorNA = await conexion.manager
      .query(queryGeneroMenorNA)
    // const rGeneroMenorNA = await conexion.createQueryBuilder()
    // .select("res")
    // .from(vwGeneroMenorNA, "res")
    // .getMany()

    const rEdadesMenorNA = await conexion.manager
      .query(queryEdadesMenorNA)
    // const rEdadesMenorNA = await conexion.createQueryBuilder()
    //   .select("res")
    //   .from(vwEdadesMenorNA, "res")
    //   .getMany()

    const rReporteDatosMenorNA = await conexion.createQueryBuilder()
      .select("res")
      .from(reporteDatosMenor, "res")
      .getMany()

    const rReporteDatosMenorFam = await conexion.createQueryBuilder()
      .select("res")
      .from(reporteDatosMenorFam, "res")
      .getMany()
    
    const rReporteDatosGenerales = await conexion.createQueryBuilder()
      .select("res")
      .from(reporteDatosGenerales, "res")
      .getMany()

    this.recibidoAtencionData = await rRecibidoAtencion
    for (var i in this.recibidoAtencionData) {
      await this.xRecibidoAtencionData.push(this.recibidoAtencionData[i]['respuesta']);
      await this.yRecibidoAtencionData.push(this.recibidoAtencionData[i]['totales']);
    }

    this.respuestaGeneroAdulto = await rRespGenero
    for (var i in this.respuestaGeneroAdulto) {
      await this.xRespuestaGeneroAdulto.push(this.respuestaGeneroAdulto[i]['genero']);
      await this.yRespuestaGeneroAdulto.push(this.respuestaGeneroAdulto[i]['totales']);
    }

    this.nacionalidadAdulto = await rRespNac
    for (var i in this.nacionalidadAdulto) {
      await this.xNacionalidadAdulto.push(this.nacionalidadAdulto[i]['nacionalidad']);
      await this.yNacionalidadAdulto.push(this.nacionalidadAdulto[i]['totales']);
    }

    this.respuestaLeerAdulto = await rLeerEscribir
    for (var i in this.respuestaLeerAdulto) {
      await this.xRespuestaLeerAdulto.push(this.respuestaLeerAdulto[i]['respuesta']);
      await this.yRespuestaLeerAdulto.push(this.respuestaLeerAdulto[i]['totales']);
    }

    this.respuestaEstadoCivil = await rEdoCivil
    for (var i in this.respuestaEstadoCivil) {
      await this.xRespuestaEstadoCivil.push(this.respuestaEstadoCivil[i]['respuesta'])
      await this.yRespuestaEstadoCivil.push(this.respuestaEstadoCivil[i]['totales'])
    }

    this.respuestaIdioma = await rIdioma
    for (var i in this.respuestaIdioma) {
      await this.xRespuestaIdioma.push(this.respuestaIdioma[i]['respuesta'])
      await this.yRespuestaIdioma.push(this.respuestaIdioma[i]['totales'])
    }

    this.respuestaOrientacionSexual = await rOrientacionSexual
    for (var i in this.respuestaOrientacionSexual) {
      await this.xRespuestaOrientacionSexual.push(this.respuestaOrientacionSexual[i]['respuesta'])
      await this.yRespuestaOrientacionSexual.push(this.respuestaOrientacionSexual[i]['totales'])
    }

    this.respuestaMedioIngreso = await rMedioIngreso
    for (var i in this.respuestaMedioIngreso) {
      await this.xRespuestaMedioIngreso.push(this.respuestaMedioIngreso[i]['respuesta'])
      await this.yRespuestaMedioIngreso.push(this.respuestaMedioIngreso[i]['totales'])
    }

    this.respuestaCuantasVeces = await rCuantasVeces
    for (var i in this.respuestaCuantasVeces) {
      await this.xRespuestaCuantasVeces.push(this.respuestaCuantasVeces[i]['respuesta'])
      await this.yRespuestaCuantasVeces.push(this.respuestaCuantasVeces[i]['totales'])
    }

    this.respuestaRechazoAeropuerto = await rRechazoAeropuerto
    for (var i in this.respuestaRechazoAeropuerto) {
      await this.xRespuestaRechazoAeropuerto.push(this.respuestaRechazoAeropuerto[i]['respuesta'])
      await this.yRespuestaRechazoAeropuerto.push(this.respuestaRechazoAeropuerto[i]['totales'])
    }

    this.respuestaEstacionMigratoria = await rEstacionMigratoria
    for (var i in this.respuestaEstacionMigratoria) {
      await this.xRespuestaEstacionMigratoria.push(this.respuestaEstacionMigratoria[i]['respuesta'])
      await this.yRespuestaEstacionMigratoria.push(this.respuestaEstacionMigratoria[i]['totales'])
    }

    this.respuestaCondicionMigratoria = await rCondicionMigratoria
    for (var i in this.respuestaCondicionMigratoria) {
      await this.xRespuestaCondicionMigratoria.push(this.respuestaCondicionMigratoria[i]['respuesta'])
      await this.yRespuestaCondicionMigratoria.push(this.respuestaCondicionMigratoria[i]['totales'])
    }

    this.respuestaCondicionMigratoriaEspecifica = await rCondicionMigratoriaEspecifica
    for (var i in this.respuestaCondicionMigratoriaEspecifica) {
      await this.xRespuestaCondicionMigratoriaEspecifica.push(this.respuestaCondicionMigratoriaEspecifica[i]['respuesta'])
      await this.yRespuestaCondicionMigratoriaEspecifica.push(this.respuestaCondicionMigratoriaEspecifica[i]['totales'])
    }

    this.respuestaCondicionMigratoriaTramite = await rCondicionMigratoriaTramite
    for (var i in this.respuestaCondicionMigratoriaTramite) {
      await this.xRespuestaCondicionMigratoriaTramite.push(this.respuestaCondicionMigratoriaTramite[i]['respuesta'])
      await this.yRespuestaCondicionMigratoriaTramite.push(this.respuestaCondicionMigratoriaTramite[i]['totales'])
    }

    this.respuestaRecibioCanalizacion = await rRecibioCanalizacion
    for (var i in this.respuestaRecibioCanalizacion) {
      await this.xRespuestaRecibioCanalizacion.push(this.respuestaRecibioCanalizacion[i]['respuesta'])
      await this.yRespuestaRecibioCanalizacion.push(this.respuestaRecibioCanalizacion[i]['totales'])
    }

    this.respuestaDistribucionCasosAdulto = await rDistribucionCasosAdulto
    for (var i in this.respuestaDistribucionCasosAdulto) {
      await this.xRespuestaDistribucionCasosAdulto.push(this.respuestaDistribucionCasosAdulto[i]['respuesta'])
      await this.yRespuestaDistribucionCasosAdulto.push(this.respuestaDistribucionCasosAdulto[i]['totales'])
    }

    this.respuestaDistribucionTotalesFamilia = await rDistribucionTotalesFamilia
    for (var i in this.respuestaDistribucionTotalesFamilia) {
      await this.xRespuestaDistribucionTotalesFamilia.push(this.respuestaDistribucionTotalesFamilia[i]['respuesta'])
      await this.yRespuestaDistribucionTotalesFamilia.push(this.respuestaDistribucionTotalesFamilia[i]['totales'])
    }

    this.respuestaNacionalidadMenorNA = await rNacionalidadMenorNA
    for (var i in this.respuestaNacionalidadMenorNA) {
      await this.xRespuestaNacionalidadMenorNA.push(this.respuestaNacionalidadMenorNA[i]['respuesta'])
      await this.yRespuestaNacionalidadMenorNA.push(this.respuestaNacionalidadMenorNA[i]['totales'])
    }

    this.generoMenorNA = await rGeneroMenorNA
    for (var i in this.generoMenorNA) {
      await this.xGeneroMenorNA.push(this.generoMenorNA[i]['respuesta'])
      await this.yGeneroMenorNA.push(this.generoMenorNA[i]['totales'])
    }

    this.edadesMenorNA = await rEdadesMenorNA
    for (var i in this.edadesMenorNA) {
      await this.xEdadesMenorNA.push(this.edadesMenorNA[i]['edad'])
      await this.yEdadesMenorNA.push(this.edadesMenorNA[i]['totales'])
    }

    this.varReporteDatosMenor = await rReporteDatosMenorNA
    this.varReporteDatosMenorFam = await rReporteDatosMenorFam
    this.varReporteDatosGenerales = await rReporteDatosGenerales
    console.log(this.varReporteDatosGenerales)
    console.log(this.varReporteDatosMenorFam)
    console.log(this.varReporteDatosMenor)

    await conexion.close()

  }

  formFiltrado = new FormGroup({
    fecha1Control: new FormControl('', [
      misValidaciones.dateValidator,
      Validators.required
    ]),
    fecha2Control: new FormControl('', [
      misValidaciones.dateValidator,
      Validators.required
    ])
  })

  // Calculo de dias de detencion
  restaTiempo(fecha1: any, fecha2: any): number {
    var a = moment(fecha1, "DD-MM-YYYY");
    var b = moment(fecha2, "DD-MM-YYYY");
    var resta = b.diff(a, 'days');
    console.log('resta:' + resta);
    return resta
  }

  // Funcion para poblar la fecha de dentencion
  eventTD() {
    if (this.formFiltrado.controls.fecha1Control.valid && this.formFiltrado.controls.fecha2Control.valid && !this.formFiltrado.controls.fecha1Control.pristine && !this.formFiltrado.controls.fecha2Control.pristine) {
      if (this.restaTiempo(this.formFiltrado.controls.fecha1Control.value, this.formFiltrado.controls.fecha2Control.value) > 0) {
        console.log('Tiempo OK')
        this.router.navigate(['Monitoreo', this.formFiltrado.controls.fecha1Control.value, this.formFiltrado.controls.fecha2Control.value])
      } else {
        console.log('Fecha 2 menor que fecha 1')
        M.toast({ html: 'La fecha inicial debe de ser mayor que la fecha final' })
      }
    }
  }

  submitFiltrado() {
    console.log(this.formFiltrado.value)
    this.eventTD()
  }

  generaGraficaPDF(idGrafica: string, idTabla: string, nombreGrafica: string) {  
    var newCanvas = document.querySelector('#'+idGrafica) as HTMLCanvasElement;
    var newCanvasImg = newCanvas.toDataURL();
    var pdf = new jsPDF('landscape');
    pdf.setFontSize(16);
    pdf.text(nombreGrafica,150, 15, {align: 'center'});
    pdf.addImage(newCanvasImg, 'PNG', 25, 30, 250, 125 );
    pdf.addPage();
    pdf.text(nombreGrafica,150, 15, {align: 'center'});
    pdf.autoTable({ 
      html: '#'+idTabla,
      margin: {
        top:30,
      },
      pageBreak: 'avoid'
    });
    pdf.save(nombreGrafica+'.pdf');
  }

  // Configuraciones de los exportables CSV
  optionsReporteEntrevistaIndividual = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: ['folio','folioFamilia','recibioAtencion','lugarDeAtencion','fechaNacimiento','edad','nacionalidad','departamento','genero','orientacionSexual','idioma','estadoCivil','sabeLeerEscribir','CP','fechaIngreso','medioIngreso','cuantasVecesIngreso','rechazadoAeropuerto','estadoEnEstacionMigratoria','cualEstacionMigratoria','fechaIngresoEstacionMigratoria','fechaSalidaEstacionMigratoria','tiempoDetencionEstacionMigratoria','haceCuantoTiempo','condicionMigratoriaEspecifica','otraCondicionMigratoria','condicionMigratoriaTramiteSolicitar','otroTramiteSolicitar','listadoDocumentos','seRealizoCanalizacion','explicacionCanalizacion','requiereAcompanamiento','queAcompanamiento','observaciones','fechaCaptura'],
    showTitle: true,
    title: 'Datos de entrevistas a mayores de edad',
    useBom: false,
    removeNewLines: true,
    keys: ['folio','folioFamilia','recibioAtencion','lugarDeAtencion','fechaNacimiento','edad','nacionalidad','departamento','genero','orientacionSexual','idioma','estadoCivil','sabeLeerEscribir','CP','fechaIngreso','medioIngreso','cuantasVecesIngreso','rechazadoAeropuerto','estadoEnEstacionMigratoria','cualEstacionMigratoria','fechaIngresoEstacionMigratoria','fechaSalidaEstacionMigratoria','tiempoDetencionEstacionMigratoria','haceCuantoTiempo','condicionMigratoriaEspecifica','otraCondicionMigratoria','condicionMigratoriaTramiteSolicitar','otroTramiteSolicitar','listadoDocumentos','seRealizoCanalizacion','explicacionCanalizacion','requiereAcompanamiento','queAcompanamiento','observaciones','fechaCaptura']
  };
  optionsReporteDatosMenorFamiliar = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['folio','folio familia','nacionalidad','fecha de nacimiento','edad','genero','parentesco','condicion migratoria','observaciones','fecha de captura'],
    showTitle: true,
    title: 'Datos de los NNA en casos familiares',
    useBom: false,
    removeNewLines: true,
    keys: ['folio','folioFamilia','nacionalidad','fechaNacimiento','edad','genero','parentesco','condicionMigratoria','observaciones','fechaCaptura']
  };
  optionsReporteDatosMenor = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['folio','nacionalidad','fecha de nacimiento', 'edad', 'genero', 'observaciones', 'fecha de captura'],
    showTitle: true,
    title: 'Datos de los NNA no acompañados',
    useBom: false,
    removeNewLines: true,
    keys: ['folio','nacionalidad','fechaNacimiento','edad','genero','observaciones','fechaCaptura']
  };

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.fecha1 = params['fecha1'];
      this.fecha2 = params['fecha2'];
      if (typeof this.fecha1 == 'undefined' || typeof this.fecha2 == 'undefined') {
        this.fecha1 = '01/01/2019';
        this.fecha2 = '31/12/2020';
        this.getDatosMonitoreo(this.fecha1, this.fecha2);
      } else {
        this.getDatosMonitoreo(this.fecha1, this.fecha2);
      }
    });

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      console.log('estamos pasando por aqui')
      // === Cargamos funciones en el onload de la pagnina === // 
      // this.getDatosMonitoreo(this.fecha1, this.fecha2);
      window.location.reload()
    });

    $(document).ready(function () {
      $('.collapsible').collapsible();
    });

    console.log('fecha 1: ' + this.fecha1)
    console.log('fecha 2: ' + this.fecha2)

    // Habilitado de las funciones de inputmask
    Inputmask().mask(document.querySelectorAll("input"));

    // Cosa extraña para campos prellenados
    M.updateTextFields = M.updateTextFields;

  }


  // === Configuraciones de las graficas === //

  // Pie Recibido atencion 
  public pieChartLabels_RecibidoAtencion: Label[] = this.xRecibidoAtencionData;
  public pieChartData_RecibidoAtencion: Number[] = this.yRecibidoAtencionData;

  // Pie Respuesta genero
  public pieChartLabels_RespuestaGeneroAdulto: Label[] = this.xRespuestaGeneroAdulto;
  public pieChartData_RespuestaGeneroAdulto: Number[] = this.yRespuestaGeneroAdulto;

  // Pie Nacionalidaddes
  public pieChartLabels_NacionalidadAdulto: Label[] = this.xNacionalidadAdulto;
  public pieChartData_NacionalidadAdulto: Number[] = this.yNacionalidadAdulto;

  // Pie LeerAdulto
  public pieChartLabels_LeerAdulto: Label[] = this.xRespuestaLeerAdulto;
  public pieChartData_LeerAdulto: Number[] = this.yRespuestaLeerAdulto;

  // Pie EstadoCivil
  public pieChartLabels_EdoCivil: Label[] = this.xRespuestaEstadoCivil;
  public pieChartData_EdoCivil: Number[] = this.yRespuestaEstadoCivil;

  // Pie Idioma
  public pieChartLabels_Idioma: Label[] = this.xRespuestaIdioma;
  public pieChartData_Idioma: Number[] = this.yRespuestaIdioma;

  // Pie Orientacion sexual
  public pieChartLabels_OrientacionSexual: Label[] = this.xRespuestaOrientacionSexual;
  public pieChartData_OrientacionSexual: Number[] = this.yRespuestaOrientacionSexual;

  // Pie medio ingreso
  public pieChartLabels_MedioIngreso: Label[] = this.xRespuestaMedioIngreso;
  public pieChartData_MedioIngreso: Number[] = this.yRespuestaMedioIngreso;

  // Pie cuantas veces
  public pieChartLabels_CuantasVeces: Label[] = this.xRespuestaCuantasVeces;
  public pieChartData_CuantasVeces: Number[] = this.yRespuestaCuantasVeces;

  // Pie rechazo aeropuerto
  public pieChartLabels_RechazoAeropuerto: Label[] = this.xRespuestaRechazoAeropuerto;
  public pieChartData_RechazoAeropuerto: Number[] = this.yRespuestaRechazoAeropuerto;

  // Pie estacion migratoria
  public pieChartLabels_EstacionMigratoria: Label[] = this.xRespuestaEstacionMigratoria;
  public pieChartData_EstacionMigratoria: Number[] = this.yRespuestaEstacionMigratoria;

  // Pie condicion migratoria
  public pieChartLabels_CondicionMigratoria: Label[] = this.xRespuestaCondicionMigratoria;
  public pieChartData_CondicionMigratoria: Number[] = this.yRespuestaCondicionMigratoria;

  // Pie condicion migratoria especifica
  public pieChartLabels_CondicionMigratoriaEspecifica: Label[] = this.xRespuestaCondicionMigratoriaEspecifica;
  public pieChartData_CondicionMigratoriaEspecifica: Number[] = this.yRespuestaCondicionMigratoriaEspecifica;

  // Pie condicion migratoria tramite
  public pieChartLabels_CondicionMigratoriaTramite: Label[] = this.xRespuestaCondicionMigratoriaTramite;
  public pieChartData_CondicionMigratoriaTramite: Number[] = this.yRespuestaCondicionMigratoriaTramite;

  // Pie recibio canalizacion
  public pieChartLabels_RecibioCanalizacion: Label[] = this.xRespuestaRecibioCanalizacion;
  public pieChartData_RecibioCanalizacion: Number[] = this.yRespuestaRecibioCanalizacion;

  // Pie distribucion casos adulto
  public pieChartLabels_DistribucionCasosAdulto: Label[] = this.xRespuestaDistribucionCasosAdulto;
  public pieChartData_DistribucionCasosAdulto: Number[] = this.yRespuestaDistribucionCasosAdulto;

  // Pie distribucion totales familia
  public pieChartLabels_DistribucionTotalesFamilia: Label[] = this.xRespuestaDistribucionTotalesFamilia;
  public pieChartData_DistribucionTotalesFamilia: Number[] = this.yRespuestaDistribucionTotalesFamilia;

  // Pie nacionalidad menor na
  public pieChartLabels_NacionalidadMenorNA: Label[] = this.xRespuestaNacionalidadMenorNA;
  public pieChartData_NacionalidadMenorNA: Number[] = this.yRespuestaNacionalidadMenorNA;

  // Pie genero menor na
  public pieChartLabels_GeneroMenorNA: Label[] = this.xGeneroMenorNA;
  public pieChartData_GeneroMenorNA: Number[] = this.yGeneroMenorNA;

  // Barras edades menor
  public barChartData_EdadesMenorNA: ChartDataSets[] = [
    { data: this.yEdadesMenorNA, label: 'Edades' }
  ];
  public barChartLabels_EdadesMenorNA: Label[] = this.xEdadesMenorNA;

  // Pie Generales
  public pieChartColors = [
    {
      backgroundColor: ['#861da0', '#305c96', '#7c56e7', '#a35ae7', '#a8e600', '#f6c3aa', '#e788e8', '#64a142', '#cfb0ae', '#9fc969', '#880c83', '#2dad02', '#cd7fe6', '#e948fc', '#984133', '#b950b4', '#022d57', '#af3538'],
    },
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Barras
  public barChartOptions: ChartOptions = {
    responsive: true,
    // // We use these empty structures as placeholders for dynamic theming.
    // scales: { xAxes: [{}], yAxes: [{}] },
    // plugins: {
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end',
    //   }
    // }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];
  public barChartPlugins = [];

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.destroyed.next();
    this.destroyed.complete();
  }

}
