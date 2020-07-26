import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { getConnection, getConnectionManager } from 'typeorm';
import { DatabaseService } from '../../data-access/database.service';
import { Citas } from '../../data-access/entities/citas.entity';


@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.css'],
  providers: [ DatabaseService ]
})
export class ListadoCitasComponent implements OnInit {

  constructor(
    public _database: DatabaseService
  ) { }

  // Preparamos el array que contendrá la consulta de las citas
  listadoCitas: Citas[] = []

  async getListadoCitas() { 
    const consultaCitas = await this._database.connection
    const respuesta = await consultaCitas.createQueryBuilder()
      .select("citas")
      .from(Citas, "citas")
      .where("citas.timestamp = :timestamp", {timestamp: moment(new Date()).format("DD/MM/YYYY") })
      .getMany()
    // console.log(respuesta)
    this.listadoCitas = await respuesta
    await consultaCitas.close()
  }

  ngOnInit() {
    this.getListadoCitas();
  }

}
