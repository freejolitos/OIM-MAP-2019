import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getConnection, Like } from 'typeorm';

import { DatabaseService } from '../../data-access/database.service';
import { FoliosFamilia } from '../../data-access/entities/foliosFamilia.entity';


declare var M: any // Var materialize
declare var $: any // jQuery

// Obtenemos la fecha de hoy para el fomulario y el folio
var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-listado-familiar',
  templateUrl: './listado-familiar.component.html',
  styleUrls: ['./listado-familiar.component.css'],
  providers: [DatabaseService]
})
export class ListadoFamiliarComponent implements OnInit {

  epochNow = Date.now();

  constructor(
    private _database: DatabaseService,
    private router: Router
  ) { }

  listadoFamiliar: FoliosFamilia[] = [];
  idFamilia: any;
  varVacia: any;

  alphabet = "^[A-Za-z\u00C0-\u024F´ ]+$"

  formNuevaFamilia = new FormGroup({
    idFolioFamilia: new FormControl(this.epochNow.toString() + '-FAM', []),
    identificadorFamilia: new FormControl('', [
      Validators.pattern(this.alphabet),
      Validators.required
    ]),
    timestamp: new FormControl(dToday2)
  })

  formFiltrado = new FormGroup({
    filtradoFamiliaControl: new FormControl('', [
      Validators.pattern(this.alphabet),
      Validators.required
    ])
  })

  async nuevaFamilia(formulario) {
    const guardarFamilia = await this._database.connection
    const respuesta = await guardarFamilia.createQueryBuilder()
      .insert()
      .into(FoliosFamilia)
      .values(formulario)
      .execute();

    await guardarFamilia.close()
    await this.router.navigateByUrl('/entrevista/sublistadoFamiliar/' + this.formNuevaFamilia.controls.idFolioFamilia.value);
    await M.toast({ html: 'Se ha creado el folio familiar: ' + this.formNuevaFamilia.controls.idFolioFamilia.value, classes: 'rounded' })
  }

  async getListadoFamiliar() {
    const obtenerListado = await this._database.connection
    const respuesta = await obtenerListado.createQueryBuilder()
      .select("listado")
      .from(FoliosFamilia, "listado")
      .limit(30)
      .getMany()

    this.listadoFamiliar = await respuesta
    // await obtenerListado.close()
  }

  async filtrarListadoFam(identificadoFam: string) {
    const filtrarListado = await this._database.connection
    const respuesta = await filtrarListado.getRepository(FoliosFamilia)
      .find({
        identificadorFamilia: Like('%'+identificadoFam+'%')
      })
    
    this.listadoFamiliar = await respuesta
  }

  submitForm() {
    console.log(this.formNuevaFamilia.value);
    this.nuevaFamilia(this.formNuevaFamilia.getRawValue());
  }

  submitFiltrado() {
    console.log(this.formFiltrado.controls.filtradoFamiliaControl.value)
    this.filtrarListadoFam(this.formFiltrado.controls.filtradoFamiliaControl.value)
  }

  async closeConn(folio) {
    if (getConnection().isConnected) {
      await console.log('Aqui va a pasar algo feo')
      await getConnection().close()
    }
    await this.router.navigateByUrl('/entrevista/sublistadoFamiliar/' + folio)
  }

  ngOnInit() {

    this.getListadoFamiliar();

    $(document).ready(function () {
      $('.modal').modal();
    });

  }

}
