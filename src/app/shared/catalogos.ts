import { Injectable } from '@angular/core';

// Catalogos que se ocupan en la herramienta
export class Depto {
    constructor(
        public pais: number,
        public id: number,
        public depto: string
    ) { }
}

export class Pais {
    constructor(
        public id: number,
        public pais: string
    ) { }
}

export class Estacion {
    constructor(
        public id: number,
        public estacion: string
    ) { }
}

export class Condicion {
    constructor(
        public id: number,
        public condicion: string
    ) { }
}

export class Tramite {
    constructor(
        public id: number,
        public tramite: string
    ) { }
}

export class Resolucion {
    constructor(
        public id: number,
        public resolucion: string
    ) { }
}

export class Parentesco {
    constructor(
        public id: number,
        public parentesco: string
    ) { }
}

@Injectable()
export class globalCats {

    // == CATALOGOS PARA DEPARTAMENTOS o ESTADOS == //
    getDepto() {
        return [
            new Depto(73, 1, 'ALTA VERAPAZ'),
            new Depto(73, 2, 'BAJA VERAPAZ'),
            new Depto(73, 3, 'CHIMALTENANGO'),
            new Depto(73, 4, 'CHIQUIMULA'),
            new Depto(73, 5, 'PETÉN'),
            new Depto(73, 6, 'EL PROGRESO'),
            new Depto(73, 7, 'QUICHÉ'),
            new Depto(73, 8, 'ESCUINTLA'),
            new Depto(73, 9, 'GUATEMALA'),
            new Depto(73, 10, 'HUEHUETENANGO'),
            new Depto(73, 11, 'IZABAL'),
            new Depto(73, 12, 'JALAPA'),
            new Depto(73, 13, 'JUTIAPA'),
            new Depto(73, 14, 'QUETZALTENANGO'),
            new Depto(73, 15, 'RETALHULEU'),
            new Depto(73, 16, 'SACATEPÉQUEZ'),
            new Depto(73, 17, 'SAN MARCOS'),
            new Depto(73, 18, 'SANTA ROSA'),
            new Depto(73, 19, 'SOLOLÁ'),
            new Depto(73, 20, 'SUCHITEPÉQUEZ'),
            new Depto(73, 21, 'TOTONICAPÁN'),
            new Depto(73, 22, 'ZACAPA'),
            new Depto(54, 23, 'AHUACHAPÁN'),
            new Depto(54, 24, 'CABAÑAS'),
            new Depto(54, 25, 'CHALATENANGO'),
            new Depto(54, 26, 'CUSCATLÁN'),
            new Depto(54, 27, 'LA LIBERTAD'),
            new Depto(54, 28, 'LA PAZ'),
            new Depto(54, 29, 'LA UNIÓN'),
            new Depto(54, 30, 'MORAZÁN'),
            new Depto(54, 31, 'SAN MIGUEL'),
            new Depto(54, 32, 'SAN SALVADOR'),
            new Depto(54, 33, 'SAN VICENTE'),
            new Depto(54, 34, 'SANTA ANA'),
            new Depto(54, 35, 'SONSONATE'),
            new Depto(54, 36, 'USULUTÁN'),
            new Depto(79, 37, 'ATLÁNTIDA'),
            new Depto(79, 38, 'CHOLUTECA'),
            new Depto(79, 39, 'COLÓN'),
            new Depto(79, 40, 'COMAYAGUA'),
            new Depto(79, 41, 'COPÁN'),
            new Depto(79, 42, 'CORTES'),
            new Depto(79, 43, 'EL PARAÍSO'),
            new Depto(79, 44, 'FRANCISCO MORAZÁN'),
            new Depto(79, 45, 'GRACIAS A DIOS'),
            new Depto(79, 46, 'INTIBUCÁ'),
            new Depto(79, 47, 'ISLAS DE LA BAHÍA'),
            new Depto(79, 48, 'LA PAZ'),
            new Depto(79, 49, 'LEMPIRA'),
            new Depto(79, 50, 'OCOTEPEQUE'),
            new Depto(79, 51, 'OLANCHO'),
            new Depto(79, 52, 'SANTA BÁRBARA'),
            new Depto(79, 53, 'VALLE'),
            new Depto(79, 54, 'YORO'),
            new Depto(128, 55, 'ATLANTICO NORTE (RAAN)'),
            new Depto(128, 56, 'ATLANTICO SUR (RAAS)'),
            new Depto(128, 57, 'BOACO'),
            new Depto(128, 58, 'CARAZO'),
            new Depto(128, 59, 'CHINANDEGA'),
            new Depto(128, 60, 'CHONTALES'),
            new Depto(128, 61, 'ESTELI'),
            new Depto(128, 62, 'GRANADA'),
            new Depto(128, 63, 'JINOTEGA'),
            new Depto(128, 64, 'LEON'),
            new Depto(128, 65, 'MADRIZ'),
            new Depto(128, 66, 'MANAGUA'),
            new Depto(128, 67, 'MASAYA'),
            new Depto(128, 68, 'MATAGALPA'),
            new Depto(128, 69, 'NUEVA SEGOVIA'),
            new Depto(128, 70, 'RIO SAN JUAN'),
            new Depto(128, 71, 'RIVAS'),
            new Depto(188, 72, 'AMAZONAS'),
            new Depto(188, 73, 'ANZOÁTEGUI'),
            new Depto(188, 74, 'APURE'),
            new Depto(188, 75, 'ARAGUA'),
            new Depto(188, 76, 'BARINAS'),
            new Depto(188, 77, 'BOLÍVAR'),
            new Depto(188, 78, 'CARABOBO'),
            new Depto(188, 79, 'COJEDES'),
            new Depto(188, 80, 'DELTA AMACURO'),
            new Depto(188, 81, 'DISTRITO CAPITAL'),
            new Depto(188, 82, 'FALCÓN'),
            new Depto(188, 83, 'GUÁRICO'),
            new Depto(188, 84, 'LARA'),
            new Depto(188, 85, 'MÉRIDA'),
            new Depto(188, 86, 'MIRANDA'),
            new Depto(188, 87, 'MONAGAS'),
            new Depto(188, 88, 'NUEVA ESPARTA'),
            new Depto(188, 89, 'PORTUGUESA'),
            new Depto(188, 90, 'SUCRE'),
            new Depto(188, 91, 'TÁCHIRA'),
            new Depto(188, 92, 'TRUJILLO'),
            new Depto(188, 93, 'VARGAS'),
            new Depto(188, 94, 'YARACUY'),
            new Depto(188, 95, 'ZULIA'),
            new Depto(42, 96, 'AMAZONAS'),
            new Depto(42, 97, 'ANTIOQUIA'),
            new Depto(42, 98, 'ARAUCA'),
            new Depto(42, 99, 'ATLÁNTICO'),
            new Depto(42, 100, 'BOLÍVAR'),
            new Depto(42, 101, 'BOYACÁ'),
            new Depto(42, 102, 'CALDAS'),
            new Depto(42, 103, 'CAQUETÁ'),
            new Depto(42, 104, 'CASANARE'),
            new Depto(42, 105, 'CAUCA'),
            new Depto(42, 106, 'CESAR'),
            new Depto(42, 107, 'CHOCÓ'),
            new Depto(42, 108, 'CÓRDOBA'),
            new Depto(42, 109, 'CUNDINAMARCA'),
            new Depto(42, 110, 'GUAINÍA'),
            new Depto(42, 111, 'GUAVIARE'),
            new Depto(42, 112, 'HUILA'),
            new Depto(42, 113, 'LA GUAJIRA'),
            new Depto(42, 114, 'MAGDALENA'),
            new Depto(42, 115, 'META'),
            new Depto(42, 116, 'NARIÑO'),
            new Depto(42, 117, 'NORTE DE SANTANDER'),
            new Depto(42, 118, 'PUTUMAYO'),
            new Depto(42, 119, 'QUINDÍO'),
            new Depto(42, 120, 'RISARALDA'),
            new Depto(42, 121, 'SAN ANDRÉS Y PROVIDENCIA'),
            new Depto(42, 122, 'SANTANDER'),
            new Depto(42, 123, 'SUCRE'),
            new Depto(42, 124, 'TOLIMA'),
            new Depto(42, 125, 'VALLE DEL CAUCA'),
            new Depto(42, 126, 'VAUPÉS'),
            new Depto(42, 127, 'VICHADA'),
            new Depto(38, 128, 'I DE TARAPACÁ '),
            new Depto(38, 129, 'II DE ANTOFAGASTA '),
            new Depto(38, 130, 'III DE ATACAMA '),
            new Depto(38, 131, 'IV DE COQUIMBO '),
            new Depto(38, 132, 'V DE VALPARAÍSO '),
            new Depto(38, 133, 'VI DEL LIBERTADOR GENERAL BERNARDO O\'HIGGINS '),
            new Depto(38, 134, 'VII DEL MAULE '),
            new Depto(38, 135, 'VIII DE CONCEPCIÓN '),
            new Depto(38, 136, 'IX DE LA ARAUCANÍA '),
            new Depto(38, 137, 'X DE LOS LAGOS '),
            new Depto(38, 138, 'XI DE AYSÉN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO '),
            new Depto(38, 139, 'XII DE MAGALLANES Y DE LA ANTÁRTICA CHILENA '),
            new Depto(38, 140, 'METROPOLITANA DE SANTIAGO '),
            new Depto(38, 141, 'XIV DE LOS RÍOS '),
            new Depto(38, 142, 'XV DE ARICA Y PARINACOTA '),
            new Depto(38, 143, 'XVI DEL ÑUBLE '),
            new Depto(9, 144, 'BUENOS AIRES'),
            new Depto(9, 145, 'CATAMARCA'),
            new Depto(9, 146, 'CHACO'),
            new Depto(9, 147, 'CHUBUT'),
            new Depto(9, 148, 'CÓRDOBA'),
            new Depto(9, 149, 'CORRIENTES'),
            new Depto(9, 150, 'ENTRE RÍOS'),
            new Depto(9, 151, 'FORMOSA'),
            new Depto(9, 152, 'JUJUY'),
            new Depto(9, 153, 'LA PAMPA'),
            new Depto(9, 154, 'LA RIOJA'),
            new Depto(9, 155, 'MENDOZA'),
            new Depto(9, 156, 'MISIONES'),
            new Depto(9, 157, 'NEUQUÉN'),
            new Depto(9, 158, 'RÍO NEGRO'),
            new Depto(9, 159, 'SALTA'),
            new Depto(9, 160, 'SAN JUAN'),
            new Depto(9, 161, 'SAN LUIS'),
            new Depto(9, 162, 'SANTA CRUZ'),
            new Depto(9, 163, 'SANTA FE'),
            new Depto(9, 164, 'SANTIAGO DEL ESTERO'),
            new Depto(9, 165, 'TIERRA DEL FUEGO, ANTÁRTIDA E ISLA DEL ATLÁNTICO SUR'),
            new Depto(9, 166, 'TUCUMÁN'),
            new Depto(78, 167, 'ARTIBONITO'),
            new Depto(78, 168, 'CENTRO'),
            new Depto(78, 169, 'GRAND ANSE'),
            new Depto(78, 170, 'NIPPES '),
            new Depto(78, 171, 'NORTE'),
            new Depto(78, 172, 'NORESTE'),
            new Depto(78, 173, 'NOROESTE'),
            new Depto(78, 174, 'OESTE'),
            new Depto(78, 175, 'SURESTE'),
            new Depto(78, 176, 'SUR'),
            new Depto(118, 177, 'AGUASCALIENTES'),
            new Depto(118, 178, 'BAJA CALIFORNIA'),
            new Depto(118, 179, 'BAJA CALIFORNIA SUR'),
            new Depto(118, 180, 'CAMPECHE'),
            new Depto(118, 181, 'CIUDAD DE MÉXICO'),
            new Depto(118, 182, 'CHIAPAS'),
            new Depto(118, 183, 'CHIHUAHUA'),
            new Depto(118, 184, 'COAHUILA DE ZARAGOZA'),
            new Depto(118, 185, 'COLIMA'),
            new Depto(118, 186, 'DURANGO'),
            new Depto(118, 187, 'ESTADO DE MÉXICO'),
            new Depto(118, 188, 'GUANAJUATO'),
            new Depto(118, 189, 'GUERRERO'),
            new Depto(118, 190, 'HIDALGO'),
            new Depto(118, 191, 'JALISCO'),
            new Depto(118, 192, 'MICHOACÁN DE OCAMPO'),
            new Depto(118, 193, 'MORELOS'),
            new Depto(118, 194, 'NAYARIT'),
            new Depto(118, 195, 'NUEVO LEÓN'),
            new Depto(118, 196, 'OAXACA'),
            new Depto(118, 197, 'PUEBLA'),
            new Depto(118, 198, 'QUERÉTARO'),
            new Depto(118, 199, 'QUINTANA ROO'),
            new Depto(118, 200, 'SAN LUIS POTOSÍ'),
            new Depto(118, 201, 'SINALOA'),
            new Depto(118, 202, 'SONORA'),
            new Depto(118, 203, 'TABASCO'),
            new Depto(118, 204, 'TAMAULIPAS'),
            new Depto(118, 205, 'TLAXCALA'),
            new Depto(118, 206, 'VERACRUZ DE IGNACIO DE LA LLAVE'),
            new Depto(118, 207, 'YUCATÁN'),
            new Depto(118, 208, 'ZACATECAS'),
            new Depto(999, 999, 'N/A')
        ]
    }

    // Nacionalidades
    getPaises() {
        return [
            new Pais(194, 'ÁPATRIDA'),
            new Pais(1, 'AFGANISTÁN'),
            new Pais(2, 'ALBANIA'),
            new Pais(3, 'ALEMANIA'),
            new Pais(4, 'ANDORRA'),
            new Pais(5, 'ANGOLA'),
            new Pais(6, 'ANTIGUA Y BARBUDA'),
            new Pais(7, 'ARABIA SAUDITA'),
            new Pais(8, 'ARGELIA'),
            new Pais(9, 'ARGENTINA'),
            new Pais(10, 'ARMENIA'),
            new Pais(11, 'AUSTRALIA'),
            new Pais(12, 'AUSTRIA'),
            new Pais(13, 'AZERBAIYÁN'),
            new Pais(14, 'BAHAMAS'),
            new Pais(15, 'BANGLADÉS'),
            new Pais(16, 'BARBADOS'),
            new Pais(17, 'BARÉIN'),
            new Pais(18, 'BÉLGICA'),
            new Pais(19, 'BELICE'),
            new Pais(20, 'BENÍN'),
            new Pais(21, 'BIELORRUSIA'),
            new Pais(22, 'BIRMANIA'),
            new Pais(23, 'BOLIVIA'),
            new Pais(24, 'BOSNIA Y HERZEGOVINA'),
            new Pais(25, 'BOTSUANA'),
            new Pais(26, 'BRASIL'),
            new Pais(27, 'BRUNÉI'),
            new Pais(28, 'BULGARIA'),
            new Pais(29, 'BURKINA FASO'),
            new Pais(30, 'BURUNDI'),
            new Pais(31, 'BUTÁN'),
            new Pais(32, 'CABO VERDE'),
            new Pais(33, 'CAMBOYA'),
            new Pais(34, 'CAMERÚN'),
            new Pais(35, 'CANADÁ'),
            new Pais(36, 'CATAR'),
            new Pais(37, 'CHAD'),
            new Pais(38, 'CHILE'),
            new Pais(39, 'CHINA'),
            new Pais(40, 'CHIPRE'),
            new Pais(41, 'CIUDAD DEL VATICANO'),
            new Pais(42, 'COLOMBIA'),
            new Pais(43, 'COMORAS'),
            new Pais(44, 'COREA DEL NORTE'),
            new Pais(45, 'COREA DEL SUR'),
            new Pais(46, 'COSTA DE MARFIL'),
            new Pais(47, 'COSTA RICA'),
            new Pais(48, 'CROACIA'),
            new Pais(49, 'CUBA'),
            new Pais(50, 'DINAMARCA'),
            new Pais(51, 'DOMINICA'),
            new Pais(52, 'ECUADOR'),
            new Pais(53, 'EGIPTO'),
            new Pais(54, 'EL SALVADOR'),
            new Pais(55, 'EMIRATOS ÁRABES UNIDOS'),
            new Pais(56, 'ERITREA'),
            new Pais(57, 'ESLOVAQUIA'),
            new Pais(58, 'ESLOVENIA'),
            new Pais(59, 'ESPAÑA'),
            new Pais(60, 'ESTADOS UNIDOS'),
            new Pais(61, 'ESTONIA'),
            new Pais(62, 'ETIOPÍA'),
            new Pais(63, 'FILIPINAS'),
            new Pais(64, 'FINLANDIA'),
            new Pais(65, 'FIYI'),
            new Pais(66, 'FRANCIA'),
            new Pais(67, 'GABÓN'),
            new Pais(68, 'GAMBIA'),
            new Pais(69, 'GEORGIA'),
            new Pais(70, 'GHANA'),
            new Pais(71, 'GRANADA'),
            new Pais(72, 'GRECIA'),
            new Pais(73, 'GUATEMALA'),
            new Pais(74, 'GUYANA'),
            new Pais(75, 'GUINEA'),
            new Pais(76, 'GUINEA ECUATORIAL'),
            new Pais(77, 'GUINEA-BISÁU'),
            new Pais(78, 'HAITÍ'),
            new Pais(79, 'HONDURAS'),
            new Pais(80, 'HUNGRÍA'),
            new Pais(81, 'INDIA'),
            new Pais(82, 'INDONESIA'),
            new Pais(83, 'IRAK'),
            new Pais(84, 'IRÁN'),
            new Pais(85, 'IRLANDA'),
            new Pais(86, 'ISLANDIA'),
            new Pais(87, 'ISLAS MARSHALL'),
            new Pais(88, 'ISLAS SALOMÓN'),
            new Pais(89, 'ISRAEL'),
            new Pais(90, 'ITALIA'),
            new Pais(91, 'JAMAICA'),
            new Pais(92, 'JAPÓN'),
            new Pais(93, 'JORDANIA'),
            new Pais(94, 'KAZAJISTÁN'),
            new Pais(95, 'KENIA'),
            new Pais(96, 'KIRGUISTÁN'),
            new Pais(97, 'KIRIBATI'),
            new Pais(98, 'KUWAIT'),
            new Pais(99, 'LAOS'),
            new Pais(100, 'LESOTO'),
            new Pais(101, 'LETONIA'),
            new Pais(102, 'LÍBANO'),
            new Pais(103, 'LIBERIA'),
            new Pais(104, 'LIBIA'),
            new Pais(105, 'LIECHTENSTEIN'),
            new Pais(106, 'LITUANIA'),
            new Pais(107, 'LUXEMBURGO'),
            new Pais(108, 'MACEDONIA DEL NORTE'),
            new Pais(109, 'MADAGASCAR'),
            new Pais(110, 'MALASIA'),
            new Pais(111, 'MALAUI'),
            new Pais(112, 'MALDIVAS'),
            new Pais(113, 'MALÍ'),
            new Pais(114, 'MALTA'),
            new Pais(115, 'MARRUECOS'),
            new Pais(116, 'MAURICIO'),
            new Pais(117, 'MAURITANIA'),
            new Pais(118, 'MÉXICO'),
            new Pais(119, 'MICRONESIA'),
            new Pais(120, 'MOLDAVIA'),
            new Pais(121, 'MÓNACO'),
            new Pais(122, 'MONGOLIA'),
            new Pais(123, 'MONTENEGRO'),
            new Pais(124, 'MOZAMBIQUE'),
            new Pais(125, 'NAMIBIA'),
            new Pais(126, 'NAURU'),
            new Pais(127, 'NEPAL'),
            new Pais(128, 'NICARAGUA'),
            new Pais(129, 'NÍGER'),
            new Pais(130, 'NIGERIA'),
            new Pais(131, 'NORUEGA'),
            new Pais(132, 'NUEVA ZELANDA'),
            new Pais(133, 'OMÁN'),
            new Pais(134, 'PAÍSES BAJOS'),
            new Pais(135, 'PAKISTÁN'),
            new Pais(136, 'PALAOS'),
            new Pais(137, 'PANAMÁ'),
            new Pais(138, 'PAPÚA NUEVA GUINEA'),
            new Pais(139, 'PARAGUAY'),
            new Pais(140, 'PERÚ'),
            new Pais(141, 'POLONIA'),
            new Pais(142, 'PORTUGAL'),
            new Pais(143, 'REINO UNIDO'),
            new Pais(144, 'REPÚBLICA CENTROAFRICANA'),
            new Pais(145, 'REPÚBLICA CHECA'),
            new Pais(146, 'REPÚBLICA DEL CONGO'),
            new Pais(147, 'REPÚBLICA DOMINICANA'),
            new Pais(148, 'REPÚBLICA SUDAFRICANA'),
            new Pais(149, 'RUANDA'),
            new Pais(150, 'RUMANÍA'),
            new Pais(151, 'RUSIA'),
            new Pais(152, 'SAMOA'),
            new Pais(153, 'SAN CRISTÓBAL Y NIEVES'),
            new Pais(154, 'SAN MARINO'),
            new Pais(155, 'SAN VICENTE Y LAS GRANADINAS'),
            new Pais(156, 'SANTA LUCÍA'),
            new Pais(157, 'SANTO TOMÉ Y PRÍNCIPE'),
            new Pais(158, 'SENEGAL'),
            new Pais(159, 'SERBIA'),
            new Pais(160, 'SEYCHELLES'),
            new Pais(161, 'SIERRA LEONA'),
            new Pais(162, 'SINGAPUR'),
            new Pais(163, 'SIRIA'),
            new Pais(164, 'SOMALIA'),
            new Pais(165, 'SRI LANKA'),
            new Pais(166, 'SUAZILANDIA'),
            new Pais(167, 'SUDÁN'),
            new Pais(168, 'SUDÁN DEL SUR'),
            new Pais(169, 'SUECIA'),
            new Pais(170, 'SUIZA'),
            new Pais(171, 'SURINAM'),
            new Pais(172, 'TAILANDIA'),
            new Pais(173, 'TANZANIA'),
            new Pais(174, 'TAYIKISTÁN'),
            new Pais(175, 'TIMOR ORIENTAL'),
            new Pais(176, 'TOGO'),
            new Pais(177, 'TONGA'),
            new Pais(178, 'TRINIDAD Y TOBAGO'),
            new Pais(179, 'TÚNEZ'),
            new Pais(180, 'TURKMENISTÁN'),
            new Pais(181, 'TURQUÍA'),
            new Pais(182, 'TUVALU'),
            new Pais(183, 'UCRANIA'),
            new Pais(184, 'UGANDA'),
            new Pais(185, 'URUGUAY'),
            new Pais(186, 'UZBEKISTÁN'),
            new Pais(187, 'VANUATU'),
            new Pais(188, 'VENEZUELA'),
            new Pais(189, 'VIETNAM'),
            new Pais(190, 'YEMEN'),
            new Pais(191, 'YIBUTI'),
            new Pais(192, 'ZAMBIA'),
            new Pais(193, 'ZIMBABUE'),
        ]
    }

    getEstacionesMigratorias() {
        return [
            new Estacion(1, 'CHETUMAL , QUINTANA ROO '),
            new Estacion(2, 'TAPACHULA , CHIAPAS '),
            new Estacion(3, 'TENOSIQUE , TABASCO'),
            new Estacion(4, 'ESCÁRCEGA, CAMPECHE'),
            new Estacion(5, 'MÉRIDA, YUCATÁN'),
            new Estacion(6, 'PALENQUE, CHIAPAS'),
            new Estacion(7, 'TUXTLA GUTIÉRREZ , CHIAPAS '),
            new Estacion(8, 'VILLAHERMOSA, TABASCO'),
            new Estacion(9, 'ACAYUCAN , VERACRUZ'),
            new Estacion(10, 'OAXACA, OAXACA'),
            new Estacion(11, 'VERACRUZ, VERACRUZ'),
            new Estacion(12, 'ACAPULCO, GUERRERO '),
            new Estacion(13, 'PUEBLA, PUEBLA '),
            new Estacion(14, 'TLAXCALA DE XICOHTENCATL, TLAXCALA'),
            new Estacion(15, 'IZTAPALAPA, CIUDAD DE MÉXICO'),
            new Estacion(16, 'ZIHUATANEJO, GUERRERO'),
            new Estacion(17, 'PACHUCA , HIDALGO '),
            new Estacion(18, 'MORELIA, MICHOACÁN '),
            new Estacion(19, 'QUERÉTARO , QUERÉTARO'),
            new Estacion(20, 'TAMPICO, TAMAULIPAS '),
            new Estacion(21, 'SAN LUIS POTOSÍ , SLP'),
            new Estacion(22, 'AGUASCALIENTES , AGS'),
            new Estacion(23, 'ZACATECAS, ZACATECAS'),
            new Estacion(24, 'MAZATLÁN, SINALIA '),
            new Estacion(25, 'SALTILLO, COAHUILA '),
            new Estacion(26, 'MATAMOROS, TAMAULIPAS'),
            new Estacion(27, 'REYNOSA, TAMAULIPAS'),
            new Estacion(28, 'NUEVO LAREDO , TAMAULIPAS '),
            new Estacion(29, 'CHIHUAHUA, CHIHUAHUA'),
            new Estacion(30, 'HERMOSILLO, SONORA'),
            new Estacion(31, 'JANOS , CHIHUAHUA'),
            new Estacion(32, 'CIUDAD JUÁREZ, CHIHUAHUA'),
            new Estacion(33, 'MEXICALI , BAJA CALIFORNIA'),
            new Estacion(34, 'TIJUANA , BAJA CALIFORNIA'),
            new Estacion(35, 'MUNICIPIO DE LOS CABOS BAJA CALIFORNIA SUR')
        ]
    }

    getCondicionMigratoria() {
        return [
            new Condicion(1, 'Condicion migratoria REGULAR'),
            new Condicion(2, 'Condicion migratoria IRREGULAR')
        ]
    }

    getTramite() {
        return [
            new Tramite(1, 'REGULARIZACIÓN POR TENER DOCUMENTO VENCIDO'),
            new Tramite(2, 'REGULARIZACIÓN POR VÍNCULO FAMILIAR'),
            new Tramite(3, 'REGULARIZACIÓN POR RAZONES HUMANITARIAS'),
            new Tramite(4, 'CAMBIO DE CONDICIÓN DE ESTANCIA DE VISITANTE A RESIDENTE TEMPORAL'),
            new Tramite(5, 'CAMBIO DE CONDICIÓN DE ESTANCIA DE RESIDENTE TEMPORAL A RESIDENTE PERMANENTE'),
            new Tramite(7, 'OBTENCIÓN DE PERMISO PARA TRABAJAR'),
            new Tramite(8, 'NOTIFICACIÓN DE CAMBIOS'),
            new Tramite(9, 'RENOVACIÓN DE DOCUMENTOS'),
            new Tramite(10, 'REPOSICIÓN DE DOCUMENTOS'),
            new Tramite(12, 'PROGRAMA TEMPORAL DE REGULARIZACION MIGRATORIA'),
            new Tramite(13, 'CONSTANCIA DE TRÁMITE A EMPLEADOS'),
            new Tramite(14, 'OTRO')
        ]
    }

    getResolucion() {
        return [
            new Resolucion(1, 'Residente temporal'),
            new Resolucion(2, 'Residente temporal estudiante'),
            new Resolucion(3, 'Visitante regional'),
            new Resolucion(4, 'Visitante por razones humanitarias'),
            new Resolucion(5, 'Visitante fronterizo'),
            new Resolucion(6, 'Visitante con permiso para realizar actividades remuneradas'),
            new Resolucion(7, 'Visitante sin permiso para realizar actividades remuneradas'),
            new Resolucion(8, 'Visitante con fines de adopción'),
            new Resolucion(9, 'Residente permanente'),
            new Resolucion(10, 'Otra')
        ]
    }

    getResolucion2() {
        return [
            new Resolucion(1, 'Residente temporal'),
            new Resolucion(2, 'Residente temporal estudiante'),
            new Resolucion(3, 'Visitante regional'),
            new Resolucion(4, 'Visitante por razones humanitarias'),
            new Resolucion(5, 'Visitante fronterizo'),
            new Resolucion(6, 'Visitante con permiso para realizar actividades remuneradas'),
            new Resolucion(7, 'Visitante sin permiso para realizar actividades remuneradas'),
            new Resolucion(8, 'Visitante con fines de adopción'),
            new Resolucion(9, 'Residente permanente')
        ]
    }

    getParentesco() {
        return [
            new Parentesco(1, 'Hijo(a)'),
            new Parentesco(2, 'Sobrino(a)'),
            new Parentesco(3, 'Nieto(a)'),
            new Parentesco(4, 'Tutor'),
            new Parentesco(5, 'Otro')
        ]
    }

    // Catalogo entidades federaticas
    static catEntidades = [
        { id: 1, estado: 'AGUASCALIENTES' },
        { id: 2, estado: 'BAJA CALIFORNIA' },
        { id: 3, estado: 'BAJA CALIFORNIA SUR' },
        { id: 4, estado: 'CAMPECHE' },
        { id: 5, estado: 'COAHUILA DE ZARAGOZA' },
        { id: 6, estado: 'COLIMA' },
        { id: 7, estado: 'CHIAPAS' },
        { id: 8, estado: 'CHIHUAHUA' },
        { id: 9, estado: 'CIUDAD DE MÉXICO' },
        { id: 10, estado: 'DURANGO' },
        { id: 11, estado: 'GUANAJUATO' },
        { id: 12, estado: 'GUERRERO' },
        { id: 13, estado: 'HIDALGO' },
        { id: 14, estado: 'JALISCO' },
        { id: 15, estado: 'MÉXICO' },
        { id: 16, estado: 'MICHOACÁN DE OCAMPO' },
        { id: 17, estado: 'MORELOS' },
        { id: 18, estado: 'NAYARIT' },
        { id: 19, estado: 'NUEVO LEÓN' },
        { id: 20, estado: 'OAXACA' },
        { id: 21, estado: 'PUEBLA' },
        { id: 22, estado: 'QUERÉTARO' },
        { id: 23, estado: 'QUINTANA ROO' },
        { id: 24, estado: 'SAN LUIS POTOSÍ' },
        { id: 25, estado: 'SINALOA' },
        { id: 26, estado: 'SONORA' },
        { id: 27, estado: 'TABASCO' },
        { id: 28, estado: 'TAMAULIPAS' },
        { id: 29, estado: 'TLAXCALA' },
        { id: 30, estado: 'VERACRUZ DE IGNACIO DE LA LLAVE' },
        { id: 31, estado: 'YUCATÁN' },
        { id: 32, estado: 'ZACATECAS' }
    ]

    // Identidad de genero
    static catOrientacionSexual = [
        { id: 1, orientacion: 'HETEROSEXUAL' },
        { id: 2, orientacion: 'LESBIANA' },
        { id: 3, orientacion: 'HOMOSEXUAL' },
        { id: 4, orientacion: 'BISEXUAL' },
        { id: 5, orientacion: 'TRANSEXUAL' }
    ];

    // Idiomas
    static catIdiomas = [
        { id: 1, idioma: 'ESPAÑOL' },
        { id: 2, idioma: 'INGLES' },
        { id: 3, idioma: 'CHINO' },
        { id: 4, idioma: 'HINDI' },
        { id: 5, idioma: 'ÁRABE' },
        { id: 6, idioma: 'PORTUGUÉS' },
        { id: 7, idioma: 'BENGALÍ' },
        { id: 8, idioma: 'RUSO' },
        { id: 9, idioma: 'JAPONES' },
        { id: 10, idioma: 'PANYABI' },
        { id: 11, idioma: 'FRANCÉS' },
        { id: 12, idioma: 'CREOLE' },
        { id: 13, idioma: 'GARÍFUNA' },
        { id: 14, idioma: 'OTRO' }
    ];

    // Estado civil
    static catEstadoCivil = [
        { id: 1, edoCivil: 'SOLTERO/A' },
        { id: 2, edoCivil: 'CASADO/A' },
        { id: 3, edoCivil: 'UNION LIBRE' },
        { id: 4, edoCivil: 'SEPARADO/A' },
        { id: 5, edoCivil: 'DIVORCIADO/A' },
        { id: 6, edoCivil: 'VIUDO/A' }
    ];

    static catMedioTransporte = [
        { id: 1, medioTransporte: 'Tierra' },
        { id: 2, medioTransporte: 'Mar' },
        { id: 3, medioTransporte: 'Aire' }
    ];

    static catMotivoOrientacion = [
        { id: 1, motivo: 'Gestión migratoria' },
        { id: 2, motivo: 'Inserción laboral' },
        { id: 3, motivo: 'Canalización a otras entidades' },
        { id: 4, motivo: 'Información y orientación general' },
        { id: 5, motivo: 'Otro' },
    ];
}