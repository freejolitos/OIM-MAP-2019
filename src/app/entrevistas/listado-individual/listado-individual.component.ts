import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Like, getConnection, getConnectionManager } from 'typeorm';

import { DatabaseService } from '../../data-access/database.service';
import { vwListadoInd } from '../../data-access/entities/vwListadoindividual.entity';

@Component({
  selector: 'app-listado-individual',
  templateUrl: './listado-individual.component.html',
  styleUrls: ['./listado-individual.component.css'],
  providers: [ 
    DatabaseService
  ]
})
export class ListadoIndividualComponent implements OnInit {

  constructor(
    private _database: DatabaseService,
    private router: Router
  ) { }

  listadoIndividual: vwListadoInd[] = [];

  alphabet = "^[A-Za-z\u00C0-\u024F´ ]+$"

  formFiltrado = new FormGroup({
    filtradoControl: new FormControl('', [
      Validators.pattern(this.alphabet),
      Validators.required
    ])
  })

  async obtenerListadoIndividual() {
    const consultaListado = await this._database.connection
    const respuesta = await consultaListado.createQueryBuilder()
      .select("listado")
      .from(vwListadoInd, "listado")
      .where("listado.idFolioFamilia = :idFolioFamilia", {idFolioFamilia: '0'})
      .getMany();

    this.listadoIndividual = await respuesta
    // await consultaListado.close()
  }

  async filtrarListado(likeString: string) {
    const filtrarListado = await this._database.connection
    const respuesta = await filtrarListado.getRepository(vwListadoInd)
      .find({
        nombresControl: Like('%'+likeString+'%')
      })
    
    this.listadoIndividual = await respuesta
  }

  submitFiltrado() {
    console.log(this.formFiltrado.controls.filtradoControl.value)
    this.filtrarListado(this.formFiltrado.controls.filtradoControl.value)
  }

  async closeConn(folio) {
    if (getConnection().isConnected) {
      await console.log('Aqui va a pasar algo feo')
      await getConnection().close()
    }
    await this.router.navigateByUrl('/entrevista/impresionFolio/' + folio)
  }

  async nuevaEntrevista() {
    if (getConnection().isConnected) {
      await console.log('Aqui va a pasar algo feo')
      await getConnection().close()
    }
    await this.router.navigateByUrl('/entrevista/datosGenerales')
  }

  ngOnInit() {

    this.obtenerListadoIndividual();

  }

}
