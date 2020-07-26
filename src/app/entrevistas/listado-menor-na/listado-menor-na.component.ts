import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Like, getConnection, getConnectionManager } from 'typeorm';

import { DatabaseService } from '../../data-access/database.service';
import { vwListadoMenor } from '../../data-access/entities/vwLsMenorNA.entity';


@Component({
  selector: 'app-listado-menor-na',
  templateUrl: './listado-menor-na.component.html',
  styleUrls: ['./listado-menor-na.component.css'],
  providers: [
    DatabaseService
  ]
})
export class ListadoMenorNAComponent implements OnInit {

  constructor(
    private _database: DatabaseService,
    private router: Router
  ) { }

  listadoMenorNA: vwListadoMenor[] = [];

  alphabet = "^[A-Za-z\u00C0-\u024F´ ]+$"

  formFiltrado = new FormGroup({
    filtradoControl: new FormControl('', [
      Validators.pattern(this.alphabet),
      Validators.required
    ])
  })

  async getListadoMenorNA() {
    const obtenerListado = await this._database.connection
    const respuesta = await obtenerListado.createQueryBuilder()
      .select("listado")
      .from(vwListadoMenor, "listado")
      .getMany();

    this.listadoMenorNA = await respuesta
    // await obtenerListado.close()
  }

  async filtrarListado(likeString: string) {
    const filtrarListado = await this._database.connection
    const respuesta = await filtrarListado.getRepository(vwListadoMenor)
      .find({
        nombreCompletoControl: Like('%' + likeString + '%')
      })

    this.listadoMenorNA = await respuesta
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
    await this.router.navigateByUrl('/entrevista/detalleMenorNA/' + folio)
  }

  async nuevaEntrevista() {
    if (getConnection().isConnected) {
      await console.log('Aqui va a pasar algo feo')
      await getConnection().close()
    }
    await this.router.navigateByUrl('/entrevista/seccionUnicaInf')
  }

  ngOnInit() {
    this.getListadoMenorNA();
  }

}
