import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../data-access/database.service';
import { vwListadoInd } from '../../data-access/entities/vwListadoindividual.entity';
import { vwListadoMenorfam } from '../../data-access/entities/vwLsMenorFam.entity';
import { getConnection } from 'typeorm';


declare var M: any; // Var materialize
@Component({
  selector: 'app-sublistado-familiar',
  templateUrl: './sublistado-familiar.component.html',
  styleUrls: ['./sublistado-familiar.component.css'],
  providers: [ DatabaseService ]
})
export class SublistadoFamiliarComponent implements OnInit, OnDestroy {

  idFolioFamilia: string;
  listadoAdulto: vwListadoInd[] = [];
  listadoMenor: vwListadoMenorfam[] = [];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _database: DatabaseService
  ) { }

  async obtenerListados(id: string) {
    if (getConnection().isConnected){ 
      const obtenerListadoAdulto = getConnection()
      const respuesta = await obtenerListadoAdulto.createQueryBuilder()
      .select("listado")
      .from(vwListadoInd, "listado")
      .where("listado.idFolioFamilia = :idFolioFamilia", {idFolioFamilia: this.idFolioFamilia})
      .getMany()

    const respuesta2 = await obtenerListadoAdulto.createQueryBuilder()
      .select("menor")
      .from(vwListadoMenorfam, "menor")
      .where("menor.idFolioFamilia = :idFolioFamilia", {idFolioFamilia: this.idFolioFamilia})
      .getMany()

      this.listadoAdulto = await respuesta
      this.listadoMenor = await respuesta2
      await obtenerListadoAdulto.close()

    } else {
      const obtenerListadoAdulto = await this._database.connection
      const respuesta = await obtenerListadoAdulto.createQueryBuilder()
      .select("listado")
      .from(vwListadoInd, "listado")
      .where("listado.idFolioFamilia = :idFolioFamilia", {idFolioFamilia: this.idFolioFamilia})
      .getMany()

    const respuesta2 = await obtenerListadoAdulto.createQueryBuilder()
      .select("menor")
      .from(vwListadoMenorfam, "menor")
      .where("menor.idFolioFamilia = :idFolioFamilia", {idFolioFamilia: this.idFolioFamilia})
      .getMany() 

      this.listadoAdulto = await respuesta
      this.listadoMenor = await respuesta2
      await obtenerListadoAdulto.close()
    }
    
      


    // this._listadoFamiliarService.getSubListadoFamAdulto(id)
    //   .subscribe(res =>{
    //     this.listadoAdulto = res as SublistadoFamAdulto[];
    //     // console.log(this.listadoAdulto);
    //   });
  }

  // getListadoMenor(id: string) {
    // this._listadoFamiliarService.getSubListadoFamMenor(id)
    //   .subscribe(res => {
    //     this.listadoMenor = res as SublistadoFamMenor[];
    //   });
  // }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idFolioFamilia = params['id']; // (+) converts string 'id' to a number
    });
    
    this.obtenerListados(this.idFolioFamilia);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
