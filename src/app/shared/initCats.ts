import { Injectable } from '@angular/core';

// Especial para inicializar la DB
export class init_catCondMigratoria {
    constructor(
        public id: number,
        public condicionMigratoria: string
    ) { }
}

export class init_catCondMigTra {
    constructor(
        public id: number,
        public condicionMigratoriaTramite: string
    ) { }
}

export class init_catCondMigEsp {
    constructor(
        public id: number,
        public condicionMigratoriaEspecifica: string
    ) { }
}

export class init_catDepartamento {
    constructor(
        public idNacionalidad: number,
        public idDepartamento: number,
        public Departamento: string
    ) { }
}

export class init_catEstadoCivil {
    constructor(
        public id: number,
        public edoCivil: string
    ) { }
}

export class init_catFases {
    constructor(
        public id: number,
        public idFase: number,
        public Fase: string,
        public URL: string
    ) { }
}

export class init_catGenero {
    constructor(
        public id: number,
        public genero: string
    ) { }
}

export class init_catIdioma {
    constructor(
        public id: number,
        public idioma: string
    ) { }
}

export class init_catMedioIngreso {
    constructor(
        public id: number,
        public medioTransporte: string
    ) { }
}

export class init_catNacionalidad {
    constructor(
        public id: number,
        public Nacionalidad: string
    ) { }
}

export class init_catOrientacionSexual {
    constructor(
        public id: number,
        public orientacionSexual: string
    ) { }
}

export class init_catPaises {
    constructor(
        public id: number,
        public pais: string
    ) { }
}

export class init_catParentesco {
    constructor(
        public id: number,
        public parentesco: string
    ) { }
}

export class init_catSiNo {
    constructor(
        public id: number,
        public idSiNo: number,
        public Respuesta: string
    ) { }
}

export class init_tbUsuarios {
    constructor(
        public Id: number,
        public username: string,
        public password: string,
        public nombres: string,
        public apellidos: string
    ) { }
}

@Injectable()
export class initCataglogos {

    getCondicionMigratoria() {
        return [
            new init_catCondMigratoria(1, 'Condicion migratoria REGULAR'),
            new init_catCondMigratoria(2, 'Condicion migratoria IRREGULAR')
        ]
    }

    getCondicionMigratoriaTramite() {
        return [
            new init_catCondMigTra(1, 'REGULARIZACIÓN POR TENER DOCUMENTO VENCIDO'),
            new init_catCondMigTra(2, 'REGULARIZACIÓN POR VÍNCULO FAMILIAR'),
            new init_catCondMigTra(3, 'REGULARIZACIÓN POR RAZONES HUMANITARIAS'),
            new init_catCondMigTra(4, 'CAMBIO DE CONDICIÓN DE ESTANCIA DE VISITANTE A RESIDENTE TEMPORAL'),
            new init_catCondMigTra(5, 'CAMBIO DE CONDICIÓN DE ESTANCIA DE RESIDENTE TEMPORAL A RESIDENTE PERMANENTE'),
            new init_catCondMigTra(7, 'OBTENCIÓN DE PERMISO PARA TRABAJAR'),
            new init_catCondMigTra(8, 'NOTIFICACIÓN DE CAMBIOS'),
            new init_catCondMigTra(9, 'RENOVACIÓN DE DOCUMENTOS'),
            new init_catCondMigTra(10, 'REPOSICIÓN DE DOCUMENTOS'),
            new init_catCondMigTra(12, 'PROGRAMA TEMPORAL DE REGULARIZACION MIGRATORIA'),
            new init_catCondMigTra(13, 'CONSTANCIA DE INSCRIPCIÓN DE EMPLEADOR'),
            new init_catCondMigTra(14, 'OTRO')
        ]
    }

    getCondicionMigratoriaEspecifica() {
        return [
            new init_catCondMigEsp(0, 'SIN RESPUESTA'),
            new init_catCondMigEsp(1, 'RESIDENTE TEMPORAL'),
            new init_catCondMigEsp(2, 'RESIDENTE TEMPORAL ESTUDIANTE'),
            new init_catCondMigEsp(3, 'VISITANTE REGIONAL'),
            new init_catCondMigEsp(4, 'VISITANTE POR RAZONES HUMANITARIAS'),
            new init_catCondMigEsp(5, 'VISITANTE FRONTERIZO'),
            new init_catCondMigEsp(6, 'VISITANTE CON PERMISO PARA REALIZAR ACTIVIDADES REMUNERADAS'),
            new init_catCondMigEsp(7, 'VISITANTE SIN PERMISO PARA REALIZAR ACTIVIDADES REMUNERADAS'),
            new init_catCondMigEsp(8, 'VISITANTE CON FINES DE ADOPCIÓN'),
            new init_catCondMigEsp(9, 'RESIDENTE PERMANENETE'),
            new init_catCondMigEsp(10, 'OTRA'),
        ]
    }

    getDepartamento() {
        return [
            new init_catDepartamento(73, 1, 'ALTA VERAPAZ'),
            new init_catDepartamento(73, 2, 'BAJA VERAPAZ'),
            new init_catDepartamento(73, 3, 'CHIMALTENANGO'),
            new init_catDepartamento(73, 4, 'CHIQUIMULA'),
            new init_catDepartamento(73, 5, 'PETÉN'),
            new init_catDepartamento(73, 6, 'EL PROGRESO'),
            new init_catDepartamento(73, 7, 'QUICHÉ'),
            new init_catDepartamento(73, 8, 'ESCUINTLA'),
            new init_catDepartamento(73, 9, 'GUATEMALA'),
            new init_catDepartamento(73, 10, 'HUEHUETENANGO'),
            new init_catDepartamento(73, 11, 'IZABAL'),
            new init_catDepartamento(73, 12, 'JALAPA'),
            new init_catDepartamento(73, 13, 'JUTIAPA'),
            new init_catDepartamento(73, 14, 'QUETZALTENANGO'),
            new init_catDepartamento(73, 15, 'RETALHULEU'),
            new init_catDepartamento(73, 16, 'SACATEPÉQUEZ'),
            new init_catDepartamento(73, 17, 'SAN MARCOS'),
            new init_catDepartamento(73, 18, 'SANTA ROSA'),
            new init_catDepartamento(73, 19, 'SOLOLÁ'),
            new init_catDepartamento(73, 20, 'SUCHITEPÉQUEZ'),
            new init_catDepartamento(73, 21, 'TOTONICAPÁN'),
            new init_catDepartamento(73, 22, 'ZACAPA'),
            new init_catDepartamento(54, 23, 'AHUACHAPÁN'),
            new init_catDepartamento(54, 24, 'CABAÑAS'),
            new init_catDepartamento(54, 25, 'CHALATENANGO'),
            new init_catDepartamento(54, 26, 'CUSCATLÁN'),
            new init_catDepartamento(54, 27, 'LA LIBERTAD'),
            new init_catDepartamento(54, 28, 'LA PAZ'),
            new init_catDepartamento(54, 29, 'LA UNIÓN'),
            new init_catDepartamento(54, 30, 'MORAZÁN'),
            new init_catDepartamento(54, 31, 'SAN MIGUEL'),
            new init_catDepartamento(54, 32, 'SAN SALVADOR'),
            new init_catDepartamento(54, 33, 'SAN VICENTE'),
            new init_catDepartamento(54, 34, 'SANTA ANA'),
            new init_catDepartamento(54, 35, 'SONSONATE'),
            new init_catDepartamento(54, 36, 'USULUTÁN'),
            new init_catDepartamento(79, 37, 'ATLÁNTIDA'),
            new init_catDepartamento(79, 38, 'CHOLUTECA'),
            new init_catDepartamento(79, 39, 'COLÓN'),
            new init_catDepartamento(79, 40, 'COMAYAGUA'),
            new init_catDepartamento(79, 41, 'COPÁN'),
            new init_catDepartamento(79, 42, 'CORTES'),
            new init_catDepartamento(79, 43, 'EL PARAÍSO'),
            new init_catDepartamento(79, 44, 'FRANCISCO MORAZÁN'),
            new init_catDepartamento(79, 45, 'GRACIAS A DIOS'),
            new init_catDepartamento(79, 46, 'INTIBUCÁ'),
            new init_catDepartamento(79, 47, 'ISLAS DE LA BAHÍA'),
            new init_catDepartamento(79, 48, 'LA PAZ'),
            new init_catDepartamento(79, 49, 'LEMPIRA'),
            new init_catDepartamento(79, 50, 'OCOTEPEQUE'),
            new init_catDepartamento(79, 51, 'OLANCHO'),
            new init_catDepartamento(79, 52, 'SANTA BÁRBARA'),
            new init_catDepartamento(79, 53, 'VALLE'),
            new init_catDepartamento(79, 54, 'YORO'),
            new init_catDepartamento(128, 55, 'ATLANTICO NORTE (RAAN)'),
            new init_catDepartamento(128, 56, 'ATLANTICO SUR (RAAS)'),
            new init_catDepartamento(128, 57, 'BOACO'),
            new init_catDepartamento(128, 58, 'CARAZO'),
            new init_catDepartamento(128, 59, 'CHINANDEGA'),
            new init_catDepartamento(128, 60, 'CHONTALES'),
            new init_catDepartamento(128, 61, 'ESTELI'),
            new init_catDepartamento(128, 62, 'GRANADA'),
            new init_catDepartamento(128, 63, 'JINOTEGA'),
            new init_catDepartamento(128, 64, 'LEON'),
            new init_catDepartamento(128, 65, 'MADRIZ'),
            new init_catDepartamento(128, 66, 'MANAGUA'),
            new init_catDepartamento(128, 67, 'MASAYA'),
            new init_catDepartamento(128, 68, 'MATAGALPA'),
            new init_catDepartamento(128, 69, 'NUEVA SEGOVIA'),
            new init_catDepartamento(128, 70, 'RIO SAN JUAN'),
            new init_catDepartamento(128, 71, 'RIVAS'),
            new init_catDepartamento(188, 72, 'AMAZONAS'),
            new init_catDepartamento(188, 73, 'ANZOÁTEGUI'),
            new init_catDepartamento(188, 74, 'APURE'),
            new init_catDepartamento(188, 75, 'ARAGUA'),
            new init_catDepartamento(188, 76, 'BARINAS'),
            new init_catDepartamento(188, 77, 'BOLÍVAR'),
            new init_catDepartamento(188, 78, 'CARABOBO'),
            new init_catDepartamento(188, 79, 'COJEDES'),
            new init_catDepartamento(188, 80, 'DELTA AMACURO'),
            new init_catDepartamento(188, 81, 'DISTRITO CAPITAL'),
            new init_catDepartamento(188, 82, 'FALCÓN'),
            new init_catDepartamento(188, 83, 'GUÁRICO'),
            new init_catDepartamento(188, 84, 'LARA'),
            new init_catDepartamento(188, 85, 'MÉRIDA'),
            new init_catDepartamento(188, 86, 'MIRANDA'),
            new init_catDepartamento(188, 87, 'MONAGAS'),
            new init_catDepartamento(188, 88, 'NUEVA ESPARTA'),
            new init_catDepartamento(188, 89, 'PORTUGUESA'),
            new init_catDepartamento(188, 90, 'SUCRE'),
            new init_catDepartamento(188, 91, 'TÁCHIRA'),
            new init_catDepartamento(188, 92, 'TRUJILLO'),
            new init_catDepartamento(188, 93, 'VARGAS'),
            new init_catDepartamento(188, 94, 'YARACUY'),
            new init_catDepartamento(188, 95, 'ZULIA'),
            new init_catDepartamento(42, 96, 'AMAZONAS'),
            new init_catDepartamento(42, 97, 'ANTIOQUIA'),
            new init_catDepartamento(42, 98, 'ARAUCA'),
            new init_catDepartamento(42, 99, 'ATLÁNTICO'),
            new init_catDepartamento(42, 100, 'BOLÍVAR'),
            new init_catDepartamento(42, 101, 'BOYACÁ'),
            new init_catDepartamento(42, 102, 'CALDAS'),
            new init_catDepartamento(42, 103, 'CAQUETÁ'),
            new init_catDepartamento(42, 104, 'CASANARE'),
            new init_catDepartamento(42, 105, 'CAUCA'),
            new init_catDepartamento(42, 106, 'CESAR'),
            new init_catDepartamento(42, 107, 'CHOCÓ'),
            new init_catDepartamento(42, 108, 'CÓRDOBA'),
            new init_catDepartamento(42, 109, 'CUNDINAMARCA'),
            new init_catDepartamento(42, 110, 'GUAINÍA'),
            new init_catDepartamento(42, 111, 'GUAVIARE'),
            new init_catDepartamento(42, 112, 'HUILA'),
            new init_catDepartamento(42, 113, 'LA GUAJIRA'),
            new init_catDepartamento(42, 114, 'MAGDALENA'),
            new init_catDepartamento(42, 115, 'META'),
            new init_catDepartamento(42, 116, 'NARIÑO'),
            new init_catDepartamento(42, 117, 'NORTE DE SANTANDER'),
            new init_catDepartamento(42, 118, 'PUTUMAYO'),
            new init_catDepartamento(42, 119, 'QUINDÍO'),
            new init_catDepartamento(42, 120, 'RISARALDA'),
            new init_catDepartamento(42, 121, 'SAN ANDRÉS Y PROVIDENCIA'),
            new init_catDepartamento(42, 122, 'SANTANDER'),
            new init_catDepartamento(42, 123, 'SUCRE'),
            new init_catDepartamento(42, 124, 'TOLIMA'),
            new init_catDepartamento(42, 125, 'VALLE DEL CAUCA'),
            new init_catDepartamento(42, 126, 'VAUPÉS'),
            new init_catDepartamento(42, 127, 'VICHADA'),
            new init_catDepartamento(38, 128, 'I DE TARAPACÁ '),
            new init_catDepartamento(38, 129, 'II DE ANTOFAGASTA '),
            new init_catDepartamento(38, 130, 'III DE ATACAMA '),
            new init_catDepartamento(38, 131, 'IV DE COQUIMBO '),
            new init_catDepartamento(38, 132, 'V DE VALPARAÍSO '),
            new init_catDepartamento(38, 133, 'VI DEL LIBERTADOR GENERAL BERNARDO O\'HIGGINS '),
            new init_catDepartamento(38, 134, 'VII DEL MAULE '),
            new init_catDepartamento(38, 135, 'VIII DE CONCEPCIÓN '),
            new init_catDepartamento(38, 136, 'IX DE LA ARAUCANÍA '),
            new init_catDepartamento(38, 137, 'X DE LOS LAGOS '),
            new init_catDepartamento(38, 138, 'XI DE AYSÉN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO '),
            new init_catDepartamento(38, 139, 'XII DE MAGALLANES Y DE LA ANTÁRTICA CHILENA '),
            new init_catDepartamento(38, 140, 'METROPOLITANA DE SANTIAGO '),
            new init_catDepartamento(38, 141, 'XIV DE LOS RÍOS '),
            new init_catDepartamento(38, 142, 'XV DE ARICA Y PARINACOTA '),
            new init_catDepartamento(38, 143, 'XVI DEL ÑUBLE '),
            new init_catDepartamento(9, 144, 'BUENOS AIRES'),
            new init_catDepartamento(9, 145, 'CATAMARCA'),
            new init_catDepartamento(9, 146, 'CHACO'),
            new init_catDepartamento(9, 147, 'CHUBUT'),
            new init_catDepartamento(9, 148, 'CÓRDOBA'),
            new init_catDepartamento(9, 149, 'CORRIENTES'),
            new init_catDepartamento(9, 150, 'ENTRE RÍOS'),
            new init_catDepartamento(9, 151, 'FORMOSA'),
            new init_catDepartamento(9, 152, 'JUJUY'),
            new init_catDepartamento(9, 153, 'LA PAMPA'),
            new init_catDepartamento(9, 154, 'LA RIOJA'),
            new init_catDepartamento(9, 155, 'MENDOZA'),
            new init_catDepartamento(9, 156, 'MISIONES'),
            new init_catDepartamento(9, 157, 'NEUQUÉN'),
            new init_catDepartamento(9, 158, 'RÍO NEGRO'),
            new init_catDepartamento(9, 159, 'SALTA'),
            new init_catDepartamento(9, 160, 'SAN JUAN'),
            new init_catDepartamento(9, 161, 'SAN LUIS'),
            new init_catDepartamento(9, 162, 'SANTA CRUZ'),
            new init_catDepartamento(9, 163, 'SANTA FE'),
            new init_catDepartamento(9, 164, 'SANTIAGO DEL ESTERO'),
            new init_catDepartamento(9, 165, 'TIERRA DEL FUEGO, ANTÁRTIDA E ISLA DEL ATLÁNTICO SUR'),
            new init_catDepartamento(9, 166, 'TUCUMÁN'),
            new init_catDepartamento(78, 167, 'ARTIBONITO'),
            new init_catDepartamento(78, 168, 'CENTRO'),
            new init_catDepartamento(78, 169, 'GRAND ANSE'),
            new init_catDepartamento(78, 170, 'NIPPES '),
            new init_catDepartamento(78, 171, 'NORTE'),
            new init_catDepartamento(78, 172, 'NORESTE'),
            new init_catDepartamento(78, 173, 'NOROESTE'),
            new init_catDepartamento(78, 174, 'OESTE'),
            new init_catDepartamento(78, 175, 'SURESTE'),
            new init_catDepartamento(78, 176, 'SUR'),
            new init_catDepartamento(118, 177, 'AGUASCALIENTES'),
            new init_catDepartamento(118, 178, 'BAJA CALIFORNIA'),
            new init_catDepartamento(118, 179, 'BAJA CALIFORNIA SUR'),
            new init_catDepartamento(118, 180, 'CAMPECHE'),
            new init_catDepartamento(118, 181, 'CIUDAD DE MÉXICO'),
            new init_catDepartamento(118, 182, 'CHIAPAS'),
            new init_catDepartamento(118, 183, 'CHIHUAHUA'),
            new init_catDepartamento(118, 184, 'COAHUILA DE ZARAGOZA'),
            new init_catDepartamento(118, 185, 'COLIMA'),
            new init_catDepartamento(118, 186, 'DURANGO'),
            new init_catDepartamento(118, 187, 'ESTADO DE MÉXICO'),
            new init_catDepartamento(118, 188, 'GUANAJUATO'),
            new init_catDepartamento(118, 189, 'GUERRERO'),
            new init_catDepartamento(118, 190, 'HIDALGO'),
            new init_catDepartamento(118, 191, 'JALISCO'),
            new init_catDepartamento(118, 192, 'MICHOACÁN DE OCAMPO'),
            new init_catDepartamento(118, 193, 'MORELOS'),
            new init_catDepartamento(118, 194, 'NAYARIT'),
            new init_catDepartamento(118, 195, 'NUEVO LEÓN'),
            new init_catDepartamento(118, 196, 'OAXACA'),
            new init_catDepartamento(118, 197, 'PUEBLA'),
            new init_catDepartamento(118, 198, 'QUERÉTARO'),
            new init_catDepartamento(118, 199, 'QUINTANA ROO'),
            new init_catDepartamento(118, 200, 'SAN LUIS POTOSÍ'),
            new init_catDepartamento(118, 201, 'SINALOA'),
            new init_catDepartamento(118, 202, 'SONORA'),
            new init_catDepartamento(118, 203, 'TABASCO'),
            new init_catDepartamento(118, 204, 'TAMAULIPAS'),
            new init_catDepartamento(118, 205, 'TLAXCALA'),
            new init_catDepartamento(118, 206, 'VERACRUZ DE IGNACIO DE LA LLAVE'),
            new init_catDepartamento(118, 207, 'YUCATÁN'),
            new init_catDepartamento(118, 208, 'ZACATECAS'),
            new init_catDepartamento(999, 999, 'N/A')
        ]
    }

    getEdoCivil() {
        return [
            new init_catEstadoCivil(0, 'SIN RESPUESTA'),
            new init_catEstadoCivil(1, 'SOLTERO/A'),
            new init_catEstadoCivil(2, 'CASADO/A'),
            new init_catEstadoCivil(3, 'UNION LIBRE'),
            new init_catEstadoCivil(4, 'SEPARADO/A'),
            new init_catEstadoCivil(5, 'DIVORCIADO/A'),
            new init_catEstadoCivil(6, 'VIUDO/A')
        ]
    }

    getFases() {
        return [
            new init_catFases(1, 1, 'Datos generales', '/entrevista/datosGenerales'),
            new init_catFases(2, 2, 'Revision de documentos', '/entrevista/revisionGestionDocumentos'),
            new init_catFases(3, 3, 'Inserción laboral', '/entrevista/insercionLaboral'),
            new init_catFases(4, 4, 'Completado', '/entrevista/fin'),
            new init_catFases(5, 5, 'Impresion Folio', '/entrevista/impresionFolio')
        ]
    }

    getGenero() {
        return [
            new init_catGenero(1, 'Masculino'),
            new init_catGenero(2, 'Femenino'),
            new init_catGenero(3, 'No binario')
        ]
    }

    getIdioma() {
        return [
            new init_catIdioma(0, 'SIN RESPUESTA'),
            new init_catIdioma(1, 'ESPAÑOL'),
            new init_catIdioma(2, 'INGLES'),
            new init_catIdioma(3, 'CHINO'),
            new init_catIdioma(4, 'HINDI'),
            new init_catIdioma(5, 'ÁRABE'),
            new init_catIdioma(6, 'PORTUGUÉS'),
            new init_catIdioma(7, 'BENGALÍ'),
            new init_catIdioma(8, 'RUSO'),
            new init_catIdioma(9, 'JAPONES'),
            new init_catIdioma(10, 'PANYABI'),
            new init_catIdioma(11, 'FRANCÉS'),
            new init_catIdioma(12, 'CREOLE'),
            new init_catIdioma(13, 'GARÍFUNA'),
            new init_catIdioma(14, 'OTRO')
        ]
    }

    getMedioIngreso() {
        return [
            new init_catMedioIngreso(0, 'Sin respuesta'),
            new init_catMedioIngreso(1, 'Tierra'),
            new init_catMedioIngreso(2, 'Mar'),
            new init_catMedioIngreso(3, 'Aire')
        ]
    }

    getNacionalidad() {
        return [
            new init_catNacionalidad(1, 'AFGANISTÁN'),
            new init_catNacionalidad(2, 'ALBANIA'),
            new init_catNacionalidad(3, 'ALEMANIA'),
            new init_catNacionalidad(4, 'ANDORRA'),
            new init_catNacionalidad(5, 'ANGOLA'),
            new init_catNacionalidad(6, 'ANTIGUA Y BARBUDA'),
            new init_catNacionalidad(7, 'ARABIA SAUDITA'),
            new init_catNacionalidad(8, 'ARGELIA'),
            new init_catNacionalidad(9, 'ARGENTINA'),
            new init_catNacionalidad(10, 'ARMENIA'),
            new init_catNacionalidad(11, 'AUSTRALIA'),
            new init_catNacionalidad(12, 'AUSTRIA'),
            new init_catNacionalidad(13, 'AZERBAIYÁN'),
            new init_catNacionalidad(14, 'BAHAMAS'),
            new init_catNacionalidad(15, 'BANGLADÉS'),
            new init_catNacionalidad(16, 'BARBADOS'),
            new init_catNacionalidad(17, 'BARÉIN'),
            new init_catNacionalidad(18, 'BÉLGICA'),
            new init_catNacionalidad(19, 'BELICE'),
            new init_catNacionalidad(20, 'BENÍN'),
            new init_catNacionalidad(21, 'BIELORRUSIA'),
            new init_catNacionalidad(22, 'BIRMANIA'),
            new init_catNacionalidad(23, 'BOLIVIA'),
            new init_catNacionalidad(24, 'BOSNIA Y HERZEGOVINA'),
            new init_catNacionalidad(25, 'BOTSUANA'),
            new init_catNacionalidad(26, 'BRASIL'),
            new init_catNacionalidad(27, 'BRUNÉI'),
            new init_catNacionalidad(28, 'BULGARIA'),
            new init_catNacionalidad(29, 'BURKINA FASO'),
            new init_catNacionalidad(30, 'BURUNDI'),
            new init_catNacionalidad(31, 'BUTÁN'),
            new init_catNacionalidad(32, 'CABO VERDE'),
            new init_catNacionalidad(33, 'CAMBOYA'),
            new init_catNacionalidad(34, 'CAMERÚN'),
            new init_catNacionalidad(35, 'CANADÁ'),
            new init_catNacionalidad(36, 'CATAR'),
            new init_catNacionalidad(37, 'CHAD'),
            new init_catNacionalidad(38, 'CHILE'),
            new init_catNacionalidad(39, 'CHINA'),
            new init_catNacionalidad(40, 'CHIPRE'),
            new init_catNacionalidad(41, 'CIUDAD DEL VATICANO'),
            new init_catNacionalidad(42, 'COLOMBIA'),
            new init_catNacionalidad(43, 'COMORAS'),
            new init_catNacionalidad(44, 'COREA DEL NORTE'),
            new init_catNacionalidad(45, 'COREA DEL SUR'),
            new init_catNacionalidad(46, 'COSTA DE MARFIL'),
            new init_catNacionalidad(47, 'COSTA RICA'),
            new init_catNacionalidad(48, 'CROACIA'),
            new init_catNacionalidad(49, 'CUBA'),
            new init_catNacionalidad(50, 'DINAMARCA'),
            new init_catNacionalidad(51, 'DOMINICA'),
            new init_catNacionalidad(52, 'ECUADOR'),
            new init_catNacionalidad(53, 'EGIPTO'),
            new init_catNacionalidad(54, 'EL SALVADOR'),
            new init_catNacionalidad(55, 'EMIRATOS ÁRABES UNIDOS'),
            new init_catNacionalidad(56, 'ERITREA'),
            new init_catNacionalidad(57, 'ESLOVAQUIA'),
            new init_catNacionalidad(58, 'ESLOVENIA'),
            new init_catNacionalidad(59, 'ESPAÑA'),
            new init_catNacionalidad(60, 'ESTADOS UNIDOS'),
            new init_catNacionalidad(61, 'ESTONIA'),
            new init_catNacionalidad(62, 'ETIOPÍA'),
            new init_catNacionalidad(63, 'FILIPINAS'),
            new init_catNacionalidad(64, 'FINLANDIA'),
            new init_catNacionalidad(65, 'FIYI'),
            new init_catNacionalidad(66, 'FRANCIA'),
            new init_catNacionalidad(67, 'GABÓN'),
            new init_catNacionalidad(68, 'GAMBIA'),
            new init_catNacionalidad(69, 'GEORGIA'),
            new init_catNacionalidad(70, 'GHANA'),
            new init_catNacionalidad(71, 'GRANADA'),
            new init_catNacionalidad(72, 'GRECIA'),
            new init_catNacionalidad(73, 'GUATEMALA'),
            new init_catNacionalidad(74, 'GUYANA'),
            new init_catNacionalidad(75, 'GUINEA'),
            new init_catNacionalidad(76, 'GUINEA ECUATORIAL'),
            new init_catNacionalidad(77, 'GUINEA-BISÁU'),
            new init_catNacionalidad(78, 'HAITÍ'),
            new init_catNacionalidad(79, 'HONDURAS'),
            new init_catNacionalidad(80, 'HUNGRÍA'),
            new init_catNacionalidad(81, 'INDIA'),
            new init_catNacionalidad(82, 'INDONESIA'),
            new init_catNacionalidad(83, 'IRAK'),
            new init_catNacionalidad(84, 'IRÁN'),
            new init_catNacionalidad(85, 'IRLANDA'),
            new init_catNacionalidad(86, 'ISLANDIA'),
            new init_catNacionalidad(87, 'ISLAS MARSHALL'),
            new init_catNacionalidad(88, 'ISLAS SALOMÓN'),
            new init_catNacionalidad(89, 'ISRAEL'),
            new init_catNacionalidad(90, 'ITALIA'),
            new init_catNacionalidad(91, 'JAMAICA'),
            new init_catNacionalidad(92, 'JAPÓN'),
            new init_catNacionalidad(93, 'JORDANIA'),
            new init_catNacionalidad(94, 'KAZAJISTÁN'),
            new init_catNacionalidad(95, 'KENIA'),
            new init_catNacionalidad(96, 'KIRGUISTÁN'),
            new init_catNacionalidad(97, 'KIRIBATI'),
            new init_catNacionalidad(98, 'KUWAIT'),
            new init_catNacionalidad(99, 'LAOS'),
            new init_catNacionalidad(100, 'LESOTO'),
            new init_catNacionalidad(101, 'LETONIA'),
            new init_catNacionalidad(102, 'LÍBANO'),
            new init_catNacionalidad(103, 'LIBERIA'),
            new init_catNacionalidad(104, 'LIBIA'),
            new init_catNacionalidad(105, 'LIECHTENSTEIN'),
            new init_catNacionalidad(106, 'LITUANIA'),
            new init_catNacionalidad(107, 'LUXEMBURGO'),
            new init_catNacionalidad(108, 'MACEDONIA DEL NORTE'),
            new init_catNacionalidad(109, 'MADAGASCAR'),
            new init_catNacionalidad(110, 'MALASIA'),
            new init_catNacionalidad(111, 'MALAUI'),
            new init_catNacionalidad(112, 'MALDIVAS'),
            new init_catNacionalidad(113, 'MALÍ'),
            new init_catNacionalidad(114, 'MALTA'),
            new init_catNacionalidad(115, 'MARRUECOS'),
            new init_catNacionalidad(116, 'MAURICIO'),
            new init_catNacionalidad(117, 'MAURITANIA'),
            new init_catNacionalidad(118, 'MÉXICO'),
            new init_catNacionalidad(119, 'MICRONESIA'),
            new init_catNacionalidad(120, 'MOLDAVIA'),
            new init_catNacionalidad(121, 'MÓNACO'),
            new init_catNacionalidad(122, 'MONGOLIA'),
            new init_catNacionalidad(123, 'MONTENEGRO'),
            new init_catNacionalidad(124, 'MOZAMBIQUE'),
            new init_catNacionalidad(125, 'NAMIBIA'),
            new init_catNacionalidad(126, 'NAURU'),
            new init_catNacionalidad(127, 'NEPAL'),
            new init_catNacionalidad(128, 'NICARAGUA'),
            new init_catNacionalidad(129, 'NÍGER'),
            new init_catNacionalidad(130, 'NIGERIA'),
            new init_catNacionalidad(131, 'NORUEGA'),
            new init_catNacionalidad(132, 'NUEVA ZELANDA'),
            new init_catNacionalidad(133, 'OMÁN'),
            new init_catNacionalidad(134, 'PAÍSES BAJOS'),
            new init_catNacionalidad(135, 'PAKISTÁN'),
            new init_catNacionalidad(136, 'PALAOS'),
            new init_catNacionalidad(137, 'PANAMÁ'),
            new init_catNacionalidad(138, 'PAPÚA NUEVA GUINEA'),
            new init_catNacionalidad(139, 'PARAGUAY'),
            new init_catNacionalidad(140, 'PERÚ'),
            new init_catNacionalidad(141, 'POLONIA'),
            new init_catNacionalidad(142, 'PORTUGAL'),
            new init_catNacionalidad(143, 'REINO UNIDO'),
            new init_catNacionalidad(144, 'REPÚBLICA CENTROAFRICANA'),
            new init_catNacionalidad(145, 'REPÚBLICA CHECA'),
            new init_catNacionalidad(146, 'REPÚBLICA DEL CONGO'),
            new init_catNacionalidad(147, 'REPÚBLICA DOMINICANA'),
            new init_catNacionalidad(148, 'REPÚBLICA SUDAFRICANA'),
            new init_catNacionalidad(149, 'RUANDA'),
            new init_catNacionalidad(150, 'RUMANÍA'),
            new init_catNacionalidad(151, 'RUSIA'),
            new init_catNacionalidad(152, 'SAMOA'),
            new init_catNacionalidad(153, 'SAN CRISTÓBAL Y NIEVES'),
            new init_catNacionalidad(154, 'SAN MARINO'),
            new init_catNacionalidad(155, 'SAN VICENTE Y LAS GRANADINAS'),
            new init_catNacionalidad(156, 'SANTA LUCÍA'),
            new init_catNacionalidad(157, 'SANTO TOMÉ Y PRÍNCIPE'),
            new init_catNacionalidad(158, 'SENEGAL'),
            new init_catNacionalidad(159, 'SERBIA'),
            new init_catNacionalidad(160, 'SEYCHELLES'),
            new init_catNacionalidad(161, 'SIERRA LEONA'),
            new init_catNacionalidad(162, 'SINGAPUR'),
            new init_catNacionalidad(163, 'SIRIA'),
            new init_catNacionalidad(164, 'SOMALIA'),
            new init_catNacionalidad(165, 'SRI LANKA'),
            new init_catNacionalidad(166, 'SUAZILANDIA'),
            new init_catNacionalidad(167, 'SUDÁN'),
            new init_catNacionalidad(168, 'SUDÁN DEL SUR'),
            new init_catNacionalidad(169, 'SUECIA'),
            new init_catNacionalidad(170, 'SUIZA'),
            new init_catNacionalidad(171, 'SURINAM'),
            new init_catNacionalidad(172, 'TAILANDIA'),
            new init_catNacionalidad(173, 'TANZANIA'),
            new init_catNacionalidad(174, 'TAYIKISTÁN'),
            new init_catNacionalidad(175, 'TIMOR ORIENTAL'),
            new init_catNacionalidad(176, 'TOGO'),
            new init_catNacionalidad(177, 'TONGA'),
            new init_catNacionalidad(178, 'TRINIDAD Y TOBAGO'),
            new init_catNacionalidad(179, 'TÚNEZ'),
            new init_catNacionalidad(180, 'TURKMENISTÁN'),
            new init_catNacionalidad(181, 'TURQUÍA'),
            new init_catNacionalidad(182, 'TUVALU'),
            new init_catNacionalidad(183, 'UCRANIA'),
            new init_catNacionalidad(184, 'UGANDA'),
            new init_catNacionalidad(185, 'URUGUAY'),
            new init_catNacionalidad(186, 'UZBEKISTÁN'),
            new init_catNacionalidad(187, 'VANUATU'),
            new init_catNacionalidad(188, 'VENEZUELA'),
            new init_catNacionalidad(189, 'VIETNAM'),
            new init_catNacionalidad(190, 'YEMEN'),
            new init_catNacionalidad(191, 'YIBUTI'),
            new init_catNacionalidad(192, 'ZAMBIA'),
            new init_catNacionalidad(193, 'ZIMBABUE'),
            new init_catNacionalidad(194, 'ÁPATRIDA')
        ]
    }

    getOrientacionSexual() {
        return [
            new init_catOrientacionSexual(0, 'SIN RESPUESTA'),
            new init_catOrientacionSexual(1, 'HETEROSEXUAL'),
            new init_catOrientacionSexual(2, 'LESBIANA'),
            new init_catOrientacionSexual(3, 'HOMOSEXUAL'),
            new init_catOrientacionSexual(4, 'BISEXUAL'),
            new init_catOrientacionSexual(5, 'TRANSEXUAL')
        ]
    }

    getPaises() {
        return [
            new init_catPaises(1, 'AFGANISTÁN'),
            new init_catPaises(2, 'ALBANIA'),
            new init_catPaises(3, 'ALEMANIA'),
            new init_catPaises(4, 'ANDORRA'),
            new init_catPaises(5, 'ANGOLA'),
            new init_catPaises(6, 'ANTIGUA Y BARBUDA'),
            new init_catPaises(7, 'ARABIA SAUDITA'),
            new init_catPaises(8, 'ARGELIA'),
            new init_catPaises(9, 'ARGENTINA'),
            new init_catPaises(10, 'ARMENIA'),
            new init_catPaises(11, 'AUSTRALIA'),
            new init_catPaises(12, 'AUSTRIA'),
            new init_catPaises(13, 'AZERBAIYÁN'),
            new init_catPaises(14, 'BAHAMAS'),
            new init_catPaises(15, 'BANGLADÉS'),
            new init_catPaises(16, 'BARBADOS'),
            new init_catPaises(17, 'BARÉIN'),
            new init_catPaises(18, 'BÉLGICA'),
            new init_catPaises(19, 'BELICE'),
            new init_catPaises(20, 'BENÍN'),
            new init_catPaises(21, 'BIELORRUSIA'),
            new init_catPaises(22, 'BIRMANIA'),
            new init_catPaises(23, 'BOLIVIA'),
            new init_catPaises(24, 'BOSNIA Y HERZEGOVINA'),
            new init_catPaises(25, 'BOTSUANA'),
            new init_catPaises(26, 'BRASIL'),
            new init_catPaises(27, 'BRUNÉI'),
            new init_catPaises(28, 'BULGARIA'),
            new init_catPaises(29, 'BURKINA FASO'),
            new init_catPaises(30, 'BURUNDI'),
            new init_catPaises(31, 'BUTÁN'),
            new init_catPaises(32, 'CABO VERDE'),
            new init_catPaises(33, 'CAMBOYA'),
            new init_catPaises(34, 'CAMERÚN'),
            new init_catPaises(35, 'CANADÁ'),
            new init_catPaises(36, 'CATAR'),
            new init_catPaises(37, 'CHAD'),
            new init_catPaises(38, 'CHILE'),
            new init_catPaises(39, 'CHINA'),
            new init_catPaises(40, 'CHIPRE'),
            new init_catPaises(41, 'CIUDAD DEL VATICANO'),
            new init_catPaises(42, 'COLOMBIA'),
            new init_catPaises(43, 'COMORAS'),
            new init_catPaises(44, 'COREA DEL NORTE'),
            new init_catPaises(45, 'COREA DEL SUR'),
            new init_catPaises(46, 'COSTA DE MARFIL'),
            new init_catPaises(47, 'COSTA RICA'),
            new init_catPaises(48, 'CROACIA'),
            new init_catPaises(49, 'CUBA'),
            new init_catPaises(50, 'DINAMARCA'),
            new init_catPaises(51, 'DOMINICA'),
            new init_catPaises(52, 'ECUADOR'),
            new init_catPaises(53, 'EGIPTO'),
            new init_catPaises(54, 'EL SALVADOR'),
            new init_catPaises(55, 'EMIRATOS ÁRABES UNIDOS'),
            new init_catPaises(56, 'ERITREA'),
            new init_catPaises(57, 'ESLOVAQUIA'),
            new init_catPaises(58, 'ESLOVENIA'),
            new init_catPaises(59, 'ESPAÑA'),
            new init_catPaises(60, 'ESTADOS UNIDOS'),
            new init_catPaises(61, 'ESTONIA'),
            new init_catPaises(62, 'ETIOPÍA'),
            new init_catPaises(63, 'FILIPINAS'),
            new init_catPaises(64, 'FINLANDIA'),
            new init_catPaises(65, 'FIYI'),
            new init_catPaises(66, 'FRANCIA'),
            new init_catPaises(67, 'GABÓN'),
            new init_catPaises(68, 'GAMBIA'),
            new init_catPaises(69, 'GEORGIA'),
            new init_catPaises(70, 'GHANA'),
            new init_catPaises(71, 'GRANADA'),
            new init_catPaises(72, 'GRECIA'),
            new init_catPaises(73, 'GUATEMALA'),
            new init_catPaises(74, 'GUYANA'),
            new init_catPaises(75, 'GUINEA'),
            new init_catPaises(76, 'GUINEA ECUATORIAL'),
            new init_catPaises(77, 'GUINEA-BISÁU'),
            new init_catPaises(78, 'HAITÍ'),
            new init_catPaises(79, 'HONDURAS'),
            new init_catPaises(80, 'HUNGRÍA'),
            new init_catPaises(81, 'INDIA'),
            new init_catPaises(82, 'INDONESIA'),
            new init_catPaises(83, 'IRAK'),
            new init_catPaises(84, 'IRÁN'),
            new init_catPaises(85, 'IRLANDA'),
            new init_catPaises(86, 'ISLANDIA'),
            new init_catPaises(87, 'ISLAS MARSHALL'),
            new init_catPaises(88, 'ISLAS SALOMÓN'),
            new init_catPaises(89, 'ISRAEL'),
            new init_catPaises(90, 'ITALIA'),
            new init_catPaises(91, 'JAMAICA'),
            new init_catPaises(92, 'JAPÓN'),
            new init_catPaises(93, 'JORDANIA'),
            new init_catPaises(94, 'KAZAJISTÁN'),
            new init_catPaises(95, 'KENIA'),
            new init_catPaises(96, 'KIRGUISTÁN'),
            new init_catPaises(97, 'KIRIBATI'),
            new init_catPaises(98, 'KUWAIT'),
            new init_catPaises(99, 'LAOS'),
            new init_catPaises(100, 'LESOTO'),
            new init_catPaises(101, 'LETONIA'),
            new init_catPaises(102, 'LÍBANO'),
            new init_catPaises(103, 'LIBERIA'),
            new init_catPaises(104, 'LIBIA'),
            new init_catPaises(105, 'LIECHTENSTEIN'),
            new init_catPaises(106, 'LITUANIA'),
            new init_catPaises(107, 'LUXEMBURGO'),
            new init_catPaises(108, 'MACEDONIA DEL NORTE'),
            new init_catPaises(109, 'MADAGASCAR'),
            new init_catPaises(110, 'MALASIA'),
            new init_catPaises(111, 'MALAUI'),
            new init_catPaises(112, 'MALDIVAS'),
            new init_catPaises(113, 'MALÍ'),
            new init_catPaises(114, 'MALTA'),
            new init_catPaises(115, 'MARRUECOS'),
            new init_catPaises(116, 'MAURICIO'),
            new init_catPaises(117, 'MAURITANIA'),
            new init_catPaises(118, 'MÉXICO'),
            new init_catPaises(119, 'MICRONESIA'),
            new init_catPaises(120, 'MOLDAVIA'),
            new init_catPaises(121, 'MÓNACO'),
            new init_catPaises(122, 'MONGOLIA'),
            new init_catPaises(123, 'MONTENEGRO'),
            new init_catPaises(124, 'MOZAMBIQUE'),
            new init_catPaises(125, 'NAMIBIA'),
            new init_catPaises(126, 'NAURU'),
            new init_catPaises(127, 'NEPAL'),
            new init_catPaises(128, 'NICARAGUA'),
            new init_catPaises(129, 'NÍGER'),
            new init_catPaises(130, 'NIGERIA'),
            new init_catPaises(131, 'NORUEGA'),
            new init_catPaises(132, 'NUEVA ZELANDA'),
            new init_catPaises(133, 'OMÁN'),
            new init_catPaises(134, 'PAÍSES BAJOS'),
            new init_catPaises(135, 'PAKISTÁN'),
            new init_catPaises(136, 'PALAOS'),
            new init_catPaises(137, 'PANAMÁ'),
            new init_catPaises(138, 'PAPÚA NUEVA GUINEA'),
            new init_catPaises(139, 'PARAGUAY'),
            new init_catPaises(140, 'PERÚ'),
            new init_catPaises(141, 'POLONIA'),
            new init_catPaises(142, 'PORTUGAL'),
            new init_catPaises(143, 'REINO UNIDO'),
            new init_catPaises(144, 'REPÚBLICA CENTROAFRICANA'),
            new init_catPaises(145, 'REPÚBLICA CHECA'),
            new init_catPaises(146, 'REPÚBLICA DEL CONGO'),
            new init_catPaises(147, 'REPÚBLICA DOMINICANA'),
            new init_catPaises(148, 'REPÚBLICA SUDAFRICANA'),
            new init_catPaises(149, 'RUANDA'),
            new init_catPaises(150, 'RUMANÍA'),
            new init_catPaises(151, 'RUSIA'),
            new init_catPaises(152, 'SAMOA'),
            new init_catPaises(153, 'SAN CRISTÓBAL Y NIEVES'),
            new init_catPaises(154, 'SAN MARINO'),
            new init_catPaises(155, 'SAN VICENTE Y LAS GRANADINAS'),
            new init_catPaises(156, 'SANTA LUCÍA'),
            new init_catPaises(157, 'SANTO TOMÉ Y PRÍNCIPE'),
            new init_catPaises(158, 'SENEGAL'),
            new init_catPaises(159, 'SERBIA'),
            new init_catPaises(160, 'SEYCHELLES'),
            new init_catPaises(161, 'SIERRA LEONA'),
            new init_catPaises(162, 'SINGAPUR'),
            new init_catPaises(163, 'SIRIA'),
            new init_catPaises(164, 'SOMALIA'),
            new init_catPaises(165, 'SRI LANKA'),
            new init_catPaises(166, 'SUAZILANDIA'),
            new init_catPaises(167, 'SUDÁN'),
            new init_catPaises(168, 'SUDÁN DEL SUR'),
            new init_catPaises(169, 'SUECIA'),
            new init_catPaises(170, 'SUIZA'),
            new init_catPaises(171, 'SURINAM'),
            new init_catPaises(172, 'TAILANDIA'),
            new init_catPaises(173, 'TANZANIA'),
            new init_catPaises(174, 'TAYIKISTÁN'),
            new init_catPaises(175, 'TIMOR ORIENTAL'),
            new init_catPaises(176, 'TOGO'),
            new init_catPaises(177, 'TONGA'),
            new init_catPaises(178, 'TRINIDAD Y TOBAGO'),
            new init_catPaises(179, 'TÚNEZ'),
            new init_catPaises(180, 'TURKMENISTÁN'),
            new init_catPaises(181, 'TURQUÍA'),
            new init_catPaises(182, 'TUVALU'),
            new init_catPaises(183, 'UCRANIA'),
            new init_catPaises(184, 'UGANDA'),
            new init_catPaises(185, 'URUGUAY'),
            new init_catPaises(186, 'UZBEKISTÁN'),
            new init_catPaises(187, 'VANUATU'),
            new init_catPaises(188, 'VENEZUELA'),
            new init_catPaises(189, 'VIETNAM'),
            new init_catPaises(190, 'YEMEN'),
            new init_catPaises(191, 'YIBUTI'),
            new init_catPaises(192, 'ZAMBIA'),
            new init_catPaises(193, 'ZIMBABUE'),
            new init_catPaises(194, 'ÁPATRIDA'),
        ]
    }

    getParentesco() {
        return [
            new init_catParentesco(1, 'Hijo(a)'),
            new init_catParentesco(2, 'Sobrino(a)'),
            new init_catParentesco(3, 'Nieto(a)'),
            new init_catParentesco(4, 'Tutor(a)'),
            new init_catParentesco(5, 'Otro')
        ]
    }

    getSiNo() {
        return [
            new init_catSiNo(1, 0, 'Sin respuesta'),
            new init_catSiNo(2, 1, 'Si'),
            new init_catSiNo(3, 2, 'No')
        ]
    }

    getUsuarios() {
        return [
            new init_tbUsuarios(1, 'MAP.1', 'MAP.01', '', ''),
            new init_tbUsuarios(2, 'MAP.2', 'MAP.02', '', ''),
            new init_tbUsuarios(3, 'MAP.3', 'MAP.03', '', ''),
            new init_tbUsuarios(4, 'MAP.4', 'MAP.04', '', ''),
            new init_tbUsuarios(5, 'MAP.5', 'MAP.05', '', ''),
            new init_tbUsuarios(6, 'MAP.6', 'MAP.06', '', ''),
            new init_tbUsuarios(7, 'MAP.7', 'MAP.07', '', ''),
            new init_tbUsuarios(8, 'MAP.8', 'MAP.08', '', ''),
            new init_tbUsuarios(9, 'MAP.9', 'MAP.09', '', ''),
            new init_tbUsuarios(10, 'MAP.10', 'MAP.10', '', ''),
            new init_tbUsuarios(11, 'MAP.11', 'MAP.11', '', ''),
            new init_tbUsuarios(12, 'MAP.12', 'MAP.12', '', ''),
            new init_tbUsuarios(13, 'MAP.13', 'MAP.13', '', ''),
            new init_tbUsuarios(14, 'MAP.14', 'MAP.14', '', ''),
            new init_tbUsuarios(15, 'MAP.15', 'MAP.15', '', ''),
        ]
    }

}