import { Injectable } from '@angular/core';
import { Connection, ConnectionOptions, createConnection, getConnection, getConnectionManager } from 'typeorm';
import { Settings } from './repositories/settings';

// Entidades Cataogos
import { catCondMigEsp } from './entities/catCondMigEsp.entity';
import { catCondMigTra } from './entities/catCondicionMigratoriaTramite.entity';
import { catCondMigratoria } from './entities/catCondicionMigratoria.entity';
import { catDepartamento } from './entities/catDepartamentos.entity';
import { catEdoCivil } from './entities/catEdoCivil.entity';
import { catFases } from './entities/catFases.entity';
import { catGenero } from './entities/catGenero.entity';
import { catIdioma } from './entities/catIdioma.entity';
import { catMedioIngreso } from './entities/catMedioIngreso.entity';
import { catNacionalidad } from './entities/catNacionalidades.entity';
import { catOrientacionSexual } from './entities/catOrientacionSexual.entity';
import { catPaises } from './entities/catPaises.entity';
import { catParentesco } from './entities/catParentesco.entity';
import { catSiNo } from './entities/catSiNo.entity';

// Entidades Tablas
import { Citas } from './entities/citas.entity';
import { ControlFases } from './entities/ControlFases.entity';
import { DatosGenerales } from './entities/datosGenerales.entity';
import { DatosMenor } from './entities/datosMenor.entity';
import { DatosMenorFam } from './entities/dtMenorFam.entity';
import { FoliosFamilia } from './entities/foliosFamilia.entity';
import { InsercionLabo } from './entities/insercionLabo.entity';
import { RevisionGesDoc } from './entities/RevisionGesDoc.entity';
import { seguimientoAdulto } from './entities/sgAdulto.entity';
import { seguimientoMenor } from './entities/sgMenorNA.entity';
import { seguimientoMenorFam } from './entities/sgMenorFam.entity';
import { Usuarios } from './entities/user.entity';

// Entidades vistas
import { vwCondicionMigratoria } from './entities/vwCondicionMigraroria.entity';
import { vwCondMigEsp } from './entities/vwCondMigEsp.entity';
import { vwCondicionMigratoriaTramite } from './entities/vwCondicionMigratoriaTramite.entity';
import { vwCuantasVeces } from './entities/vwCuantasVeces.entity';
import { vwDatosGen } from './entities/vwDatosGenerales.entity';
import { vwDetalleMenorFam } from './entities/vwDetalleMenorFam.entity';
import { vwDistribucionCasosAdulto } from './entities/vwDistribucionCasosAdulto.entity';
import { vwDistribucionTotalesFamilia } from './entities/vwDistribucionTotalesFamilia.entity';
import { vwEdadesMenorNA } from './entities/vwEdadesMenorNA.entity';
import { vwEdoCivil } from './entities/vwEdoCivil.entity';
import { vwEstacionMigratoria } from './entities/vwEstacionMigratoria.entity';
import { vwGeneroMenorNA } from './entities/vwGeneroMenorNA.entity';
import { vwIdioma } from './entities/vwIdioma.entity';
import { vwInsercionLabo } from './entities/vwInsercionLabo.entity';
import { vwLeerEscribir } from './entities/vwLeerEscr.entity';
import { vwListadoInd } from './entities/vwListadoindividual.entity';
import { vwListadoMenor } from './entities/vwLsMenorNA.entity';
import { vwListadoMenorfam } from './entities/vwLsMenorFam.entity';
import { vwMedioIngreso } from './entities/vwMedioIngreso.entity';
import { vwNacionalidadMenorNA } from './entities/vwNacionalidadMenorNA.entity';
import { vwOrientacionSexual } from './entities/vwOrientacionSexual.entity';
import { vwRechazoAeropuerto } from './entities/vwRechazoAeropuerto.entity';
import { vwRecibioCanalizacion } from './entities/vwRecibioCanalizacion.entity';
import { vwRecibidoAtencion } from './entities/vwRecAtencion.entity';
import { vwRespGenero } from './entities/vwResGenero.entity';
import { vwRespNac } from './entities/vwResNac.entity';
import { vwRevGesDoc } from './entities/vwRevGesDoc.entity';
import { vwSQLITE_Status } from './entities/vwSQLITE_SEQUENCE.entity';

// Entidades exportacion
import { expDatosGenerales } from './entities/expDatosGenerales.entity';
import { expControlFases } from './entities/expControlFases.entity';
import { expDatosMenor } from './entities/expDatosMenor.entity';
import { expDatosMenorFam } from './entities/expDatosMenorFam.entity';
import { expFoliosFamilia } from './entities/expFoliosFamilia.entity';
import { expInsercionLaboral } from './entities/expInsercionLaboral.entity';
import { expRevGesDoc } from './entities/expRevGesDoc.entity';

// Entidades reporte
import { reporteDatosMenor } from './entities/reporteDatosMenor.entity';
import { reporteDatosMenorFam } from './entities/reporteDatosMenorFam.entity';
import { reporteDatosGenerales } from './entities/reporteDatosGenerales.entity';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        Settings.initialize();
        this.options = {
            type: 'sqlite',
            database: Settings.dbPath,
            entities: [
                catCondMigEsp,
                catCondMigratoria,
                catCondMigTra,
                catDepartamento,
                catEdoCivil,
                catFases,
                catGenero,
                catIdioma,
                catMedioIngreso,
                catNacionalidad,
                catOrientacionSexual,
                catPaises,
                catParentesco,
                catSiNo,

                Citas,
                ControlFases,
                DatosGenerales,
                DatosMenor,
                DatosMenorFam,
                FoliosFamilia,
                InsercionLabo,
                RevisionGesDoc,
                seguimientoAdulto,
                seguimientoMenor,
                seguimientoMenorFam,
                Usuarios,

                vwCondicionMigratoria,
                vwCondMigEsp,
                vwCondicionMigratoriaTramite,
                vwCuantasVeces,
                vwDatosGen,
                vwDetalleMenorFam,
                vwDistribucionCasosAdulto,
                vwDistribucionTotalesFamilia,
                vwEdadesMenorNA,
                vwEdoCivil,
                vwEstacionMigratoria,
                vwGeneroMenorNA,
                vwIdioma,
                vwInsercionLabo,
                vwLeerEscribir,
                vwListadoInd,
                vwListadoMenor,                
                vwListadoMenorfam,
                vwMedioIngreso,
                vwNacionalidadMenorNA,
                vwOrientacionSexual,
                vwRechazoAeropuerto,
                vwRecibioCanalizacion,
                vwRecibidoAtencion,
                vwRespGenero,
                vwRespNac,
                vwRevGesDoc,
                vwSQLITE_Status,

                expControlFases,
                expDatosGenerales,
                expDatosMenor,
                expDatosMenorFam,
                expFoliosFamilia,
                expInsercionLaboral,
                expRevGesDoc,

                reporteDatosMenor,
                reporteDatosMenorFam,
                reporteDatosGenerales
                
            ],
            synchronize: true,
            logging: ["error"]
        };

        this.connection = createConnection(this.options)
    }
}
