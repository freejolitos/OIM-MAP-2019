import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento

import { getConnection } from 'typeorm';
import { DatabaseService } from '../../data-access/database.service';
import { vwListadoMenor } from '../../data-access/entities/vwLsMenorNA.entity';
import { seguimientoMenor } from '../../data-access/entities/sgMenorNA.entity';

declare var M: any; // Materializec
declare var $: any;

var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-detalle-menor-na',
  templateUrl: './detalle-menor-na.component.html',
  styleUrls: ['./detalle-menor-na.component.css'],
  providers: [
    DatabaseService
  ]
})
export class DetalleMenorNAComponent implements OnInit, OnDestroy {

  idFolio: string;
  private sub: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private _database: DatabaseService
  ) { }

  patronEspecial = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$"

  formSeguimiento = new FormGroup({
    idFolioMenor: new FormControl(''),
    notaSeguimientoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.patronEspecial),
        Validators.required
      ]),
    timestamp: new FormControl(dToday2)
  })

  async guardarSeguimiento(formulario) {
    const guardarSeguimiento = await getConnection()
    const respuesta2 = await guardarSeguimiento.createQueryBuilder()
      .insert()
      .into(seguimientoMenor)
      .values(formulario)
      .execute();
    
    await guardarSeguimiento.close();
    await  M.toast({ html: 'Nota de seguimiento guardada con éxito', classes: 'rounded' });
    // await this.router.navigateByUrl('/entrevista/listadoMenorNA');
    await location.reload();

  }

  submitForm() {
    this.guardarSeguimiento(this.formSeguimiento.getRawValue());
  }

  detalleMenorNA: vwListadoMenor[] = [];
  notasSeguimiento: seguimientoMenor[] = [];

  async getDetalleMenor(id: any) {
    const getDetalleMenor = await this._database.connection
    const respuesta = await getDetalleMenor.createQueryBuilder()
      .select("detalle")
      .from(vwListadoMenor, "detalle")
      .where("detalle.folioControl = :idFolio", { idFolio: this.idFolio })
      .getMany();
    const respuesta2 = await getDetalleMenor.createQueryBuilder()
      .select("seguimiento")
      .from(seguimientoMenor, "seguimiento")
      .where("seguimiento.idFolioMenor = :idFolio", { idFolio: this.idFolio })
      .getMany();

    this.detalleMenorNA = await respuesta
    this.notasSeguimiento = await respuesta2
    // await getDetalleMenor.close()
  }

  fnPatchFolioMenorNA(idFolio: string) {
    this.formSeguimiento.patchValue({
      idFolioMenor: this.idFolio
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idFolio = params['id'];
    });

    this.getDetalleMenor(this.idFolio);

    this.fnPatchFolioMenorNA(this.idFolio);


    $(document).ready(function () {
      $('.modal').modal({
        'preventScrolling': false
      });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
