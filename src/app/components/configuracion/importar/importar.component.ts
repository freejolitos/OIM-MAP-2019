import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

import { DatabaseService } from '../../../data-access/database.service';
import { ControlFases } from 'src/app/data-access/entities/ControlFases.entity';
import { DatosGenerales } from 'src/app/data-access/entities/datosGenerales.entity';
import { DatosMenor } from 'src/app/data-access/entities/datosMenor.entity';
import { DatosMenorFam } from 'src/app/data-access/entities/dtMenorFam.entity';
import { FoliosFamilia } from 'src/app/data-access/entities/foliosFamilia.entity';
import { InsercionLabo } from 'src/app/data-access/entities/insercionLabo.entity';
import { RevisionGesDoc } from 'src/app/data-access/entities/RevisionGesDoc.entity';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css'],
  providers: [
    DatabaseService
  ]
})
export class ImportarComponent implements OnInit {

  cryptPassword: string = 'TebazLuminCrod'

  constructor(
    private _database: DatabaseService
  ) { }

  // Formulario de carga de archivos
  formCargaArchivos = new FormGroup({
    controlFases: new FormControl('', [
      Validators.required
    ]),
    datosGenerales: new FormControl('', [
      Validators.required
    ]),
    datosMenor: new FormControl('', [
      Validators.required
    ]),
    datosMenorFam: new FormControl('', [
      Validators.required
    ]),
    foliosFamilia: new FormControl('', [
      Validators.required
    ]),
    insercionLabo: new FormControl('', [
      Validators.required
    ]),
    revGesDoc: new FormControl('', [
      Validators.required
    ]),
  })

  fnControlFases(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          controlFases: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  fnDatosGenerales(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          datosGenerales: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  fnDatosMenor(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          datosMenor: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  fnDatosMenorFam(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          datosMenorFam: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  fnFoliosFamilia(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          foliosFamilia: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  fnInsercionLaboral(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          insercionLabo: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  fnRevGesDoc(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        var decryptText = JSON.parse(CryptoJS.AES.decrypt(text, this.cryptPassword).toString(CryptoJS.enc.Utf8))
        this.formCargaArchivos.patchValue({
          revGesDoc: decryptText
        })
      }
      reader.readAsText(input.files[index]);
    };
  }

  mensajeControlFases: string
  mensajeDatosGenerales: string
  mensajeDatosMenor: string
  mensajeDatosMenorFam: string
  mensajeFoliosFamilia: string
  mensajeInsercionLabo: string
  mensajeRevGesDoc: string

  async guardarDatos(vControlFases, vDatosGenerales, vDatosMenor, vDatosMenorFam, vFoliosFamilia, vInsercionLabo, vRevGesDoc) {

    const conexion = await this._database.connection

    const insertControlFases = await conexion.createQueryBuilder()
      .insert()
      .into(ControlFases)
      .values(vControlFases)
      .execute()
      .then(() => {
        this.mensajeControlFases = 'Control de fases guardado con exito'
        console.log(this.mensajeControlFases)
      })
      .catch(err => {
        this.mensajeControlFases = 'Error en el guardado de control fases'
        console.error(err)
        console.log(this.mensajeControlFases)
      })

    const insertDatosGenerales = await conexion.createQueryBuilder()
      .insert()
      .into(DatosGenerales)
      .values(vDatosGenerales)
      .execute()
      .then(() => {
        this.mensajeDatosGenerales = 'Datos generales guardado con exito'
        console.log(this.mensajeDatosGenerales)
      })
      .catch(err => {
        this.mensajeDatosGenerales = 'Error en el guardado de datos generales'
        console.error(err)
        console.log(this.mensajeDatosGenerales)
      })

    const insertDatosMenor = await conexion.createQueryBuilder()
      .insert()
      .into(DatosMenor)
      .values(vDatosMenor)
      .execute()
      .then(() => {
        this.mensajeDatosMenor = 'Datos menor guardado con exito'
        console.log(this.mensajeDatosMenor)
      })
      .catch(err => {
        this.mensajeDatosMenor = 'Error en el guardado de datos menor'
        console.error(err)
        console.log(this.mensajeDatosMenor)
      })

    const insertDatosMenorFam = await conexion.createQueryBuilder()
      .insert()
      .into(DatosMenorFam)
      .values(vDatosMenorFam)
      .execute()
      .then(() => {
        this.mensajeDatosMenorFam = 'Datos menor familia guardado con exito'
        console.log(this.mensajeDatosMenorFam)
      })
      .catch(err => {
        this.mensajeDatosMenorFam = 'Error en el guardado de datos menor familia'
        console.error(err)
        console.log(this.mensajeDatosMenorFam)
      })

    const insertFoliosFamilia = await conexion.createQueryBuilder()
      .insert()
      .into(FoliosFamilia)
      .values(vFoliosFamilia)
      .execute()
      .then(() => {
        this.mensajeFoliosFamilia = 'Folios familia guardado con exito'
        console.log(this.mensajeFoliosFamilia)
      })
      .catch(err => {
        this.mensajeFoliosFamilia = 'Error en el guardado de folios familia'
        console.error(err)
        console.log(this.mensajeFoliosFamilia)
      })

    const insertInsercionLabo = await conexion.createQueryBuilder()
      .insert()
      .into(InsercionLabo)
      .values(vInsercionLabo)
      .execute()
      .then(() => {
        this.mensajeInsercionLabo = 'Insercion laboral guardado con exito'
        console.log(this.mensajeInsercionLabo)
      })
      .catch(err => {
        this.mensajeInsercionLabo = 'Error en el guardado de insercion laboral'
        console.error(err)
        console.log(this.mensajeInsercionLabo)
      })

    const insertRevGesDoc = await conexion.createQueryBuilder()
      .insert()
      .into(RevisionGesDoc)
      .values(vRevGesDoc)
      .execute()
      .then(() => {
        this.mensajeRevGesDoc = 'Revision gestion documentos guardado con exito'
        console.log(this.mensajeRevGesDoc)
      })
      .catch(err => {
        this.mensajeRevGesDoc = 'Error en el guardado de revision gestion documentos'
        console.error(err)
        console.log(this.mensajeRevGesDoc)
      })

    // await conexion.close()

  }

  submitArchivos() {
    this.guardarDatos(this.formCargaArchivos.controls.controlFases.value, this.formCargaArchivos.controls.datosGenerales.value, this.formCargaArchivos.controls.datosMenor.value, this.formCargaArchivos.controls.datosMenorFam.value, this.formCargaArchivos.controls.foliosFamilia.value, this.formCargaArchivos.controls.insercionLabo.value, this.formCargaArchivos.controls.revGesDoc.value)
  }

  ngOnInit() {
  }

}
