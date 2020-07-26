import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';
import * as CryptoJS from 'crypto-js';

import { DatabaseService } from '../../../data-access/database.service';
import { expDatosGenerales } from 'src/app/data-access/entities/expDatosGenerales.entity';
import { expControlFases } from 'src/app/data-access/entities/expControlFases.entity';
import { expDatosMenor } from 'src/app/data-access/entities/expDatosMenor.entity';
import { expDatosMenorFam } from 'src/app/data-access/entities/expDatosMenorFam.entity';
import { expFoliosFamilia } from 'src/app/data-access/entities/expFoliosFamilia.entity';
import { expInsercionLaboral } from 'src/app/data-access/entities/expInsercionLaboral.entity';
import { expRevGesDoc } from 'src/app/data-access/entities/expRevGesDoc.entity';


@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css'],
  providers: [
    DatabaseService
  ]
})
export class ExportarComponent implements OnInit {

  epochNow = Date.now();
  cryptPassword: string = 'TebazLuminCrod'

  consultaControlFases: expControlFases[] = [];
  consultaDatosGenerales: expDatosGenerales[] = [];
  consultaDatosMenor: expDatosMenor[] = [];
  consultaDatosMenorFam: expDatosMenorFam[] = [];
  consultaFoliosFamilia: expFoliosFamilia[] = [];
  consultaInsercionLaboral: expInsercionLaboral[] = [];
  consultaRevGesDoc: expRevGesDoc[] = [];

  constructor(
    private _database: DatabaseService
  ) { }

  fnCreateZip(expControlFasesName: any, expControlFasesFile: any, expDatosGeneralesName: any, expDatosGeneralesFile: any, expDatosMenorName: any, expDatosMenorFile: any, expDatosMenorFamName: any, expDatosMenorFamFile: any, expFoliosFamiliaName: any, expFoliosFamiliaFile: any, expInsercionLaboralName: any, expInsercionLaboralFile: any, expRevGesDocName: any, expRevGesDocFile: any) {
    var zip = new JSZip();

    // Archivo control fases
    zip.file('baseExportada/' + expControlFasesName, expControlFasesFile)

    // Archivo datos generales
    zip.file('baseExportada/' + expDatosGeneralesName, expDatosGeneralesFile)

    // Archivo datos menor
    zip.file('baseExportada/' + expDatosMenorName, expDatosMenorFile)

    // Archivo datos menor fam
    zip.file('baseExportada/' + expDatosMenorFamName, expDatosMenorFamFile)

    // Archivo folios familia
    zip.file('baseExportada/' + expFoliosFamiliaName, expFoliosFamiliaFile)

    // Archivo insercion laboral
    zip.file('baseExportada/' + expInsercionLaboralName, expInsercionLaboralFile)

    // Archivo revision gestion documentos
    zip.file('baseExportada/' + expRevGesDocName, expRevGesDocFile)

    zip.generateAsync({ type: "blob" })
      .then(function (content) {
        // see FileSaver.js
        saveAs(content, 'baseExportada.zip');
      });
  }

  async getExportacion() {
    const consulta = await this._database.connection

    const rControlFases = await consulta.createQueryBuilder()
      .select("res")
      .from(expControlFases, "res")
      .getMany()
    this.consultaControlFases = await rControlFases

    const rDatosGenerales = await consulta.createQueryBuilder()
      .select("res")
      .from(expDatosGenerales, "res")
      .getMany()
    this.consultaDatosGenerales = await rDatosGenerales;
    await console.log(this.consultaDatosGenerales)

    const rDatosMenor = await consulta.createQueryBuilder()
      .select("res")
      .from(expDatosMenor, "res")
      .getMany()
    this.consultaDatosMenor = await rDatosMenor;
    await console.log(this.consultaDatosMenor)
    
    const rDatosMenorFam = await consulta.createQueryBuilder()
      .select("res")
      .from(expDatosMenorFam, "res")
      .getMany()
    this.consultaDatosMenorFam = await rDatosMenorFam;
    await console.log(this.consultaDatosMenorFam)
    
    const rFoliosFamilia = await consulta.createQueryBuilder()
      .select("res")
      .from(expFoliosFamilia, "res")
      .getMany()
    this.consultaFoliosFamilia = await rFoliosFamilia;
    await console.log(this.consultaFoliosFamilia)
    
    const rInsersionLabo = await consulta.createQueryBuilder()
      .select("res")
      .from(expInsercionLaboral, "res")
      .getMany()
    this.consultaInsercionLaboral = await rInsersionLabo;
    await console.log(this.consultaInsercionLaboral)
    
    const rRevGesDoc = await consulta.createQueryBuilder()
      .select("res")
      .from(expRevGesDoc, "res")
      .getMany()
    this.consultaRevGesDoc = await rRevGesDoc;
    await console.log(this.consultaRevGesDoc)

    await consulta.close()
  }

  expFile() {

    // Archivo de control de fases
    var expControlFasesFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaControlFases), this.cryptPassword).toString();
    var expControlFasesName = this.epochNow + '-expControlFases.txt'

    // Archivo de datos generales
    var expDatosGeneralesFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaDatosGenerales), this.cryptPassword).toString();
    var expDatosGeneralesName = this.epochNow + '-expDatosGenerales.txt'

    // Archivo datos menor
    var expDatosMenorFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaDatosMenor), this.cryptPassword).toString();
    var expDatosMenorName = this.epochNow + '-expDatosMenor.txt'

    // Archivo datos menor fam
    var expDatosMenorFamFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaDatosMenorFam), this.cryptPassword).toString();
    var expDatosMenorFamName = this.epochNow + '-expDatosMenorFam.txt'

    // Archivo folios familia
    var expFoliosFamiliaFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaFoliosFamilia), this.cryptPassword).toString();
    var expFoliosFamiliaName = this.epochNow + '-expFoliosFamilia.txt'

    // Archivo insercion laboral
    var expInsercionLaboralFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaInsercionLaboral), this.cryptPassword).toString();
    var expInsercionLaboralName = this.epochNow + '-expInsercionLabo.txt'

    // Archivo revision gestion documentos
    var expRevGesDocFile = CryptoJS.AES.encrypt(JSON.stringify(this.consultaRevGesDoc), this.cryptPassword).toString();
    var expRevGesDocName = this.epochNow + '-expRevGesDoc.txt'

    this.fnCreateZip(expControlFasesName, expControlFasesFile, expDatosGeneralesName, expDatosGeneralesFile, expDatosMenorName, expDatosMenorFile, expDatosMenorFamName, expDatosMenorFamFile, expFoliosFamiliaName, expFoliosFamiliaFile, expInsercionLaboralName, expInsercionLaboralFile, expRevGesDocName, expRevGesDocFile)
  }

  ngOnInit() {
    this.getExportacion()
  }

}
