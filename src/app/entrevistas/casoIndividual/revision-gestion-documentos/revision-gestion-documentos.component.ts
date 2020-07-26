import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Inputmask from 'inputmask';
import { misValidaciones } from '../../../shared/validations.directives'
import { globalCats, Resolucion } from '../../../shared/catalogos';
import * as moment from 'moment';

import { DatabaseService } from '../../../data-access/database.service';
import { RevisionGesDoc } from '../../../data-access/entities/RevisionGesDoc.entity';
import { ControlFases } from '../../../data-access/entities/ControlFases.entity';
import { getConnection } from 'typeorm';

declare var M: any // Var materialize
declare var $: any // Va jQuery

var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-revision-gestion-documentos',
  templateUrl: './revision-gestion-documentos.component.html',
  styleUrls: ['./revision-gestion-documentos.component.css'],
  providers: [
    DatabaseService,
    globalCats
  ]
})
export class RevisionGestionDocumentosComponent implements OnInit, OnDestroy {

  resolucion: Resolucion[];

  id: string;
  private sub: any;
  vFaseControl: number = 3;


  constructor(
    private _cats: globalCats,
    private route: ActivatedRoute,
    private router: Router,
    private _database: DatabaseService
  ) {
    this.resolucion = this._cats.getResolucion2();
  }

  // === Patrones REGEX === // 
  mayusMinus = "^[A-Za-z\u00C0-\u024F´ ]+$";
  alphaNum = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$";
  onlyNumbers = "^[0-9]+$";
  forCURP = "^[A-Z0-9]+$";

  // === Inicio de formulario fase 2 === //
  formRevisionGestion = new FormGroup({
    folioControl: new FormControl(''),
    // faseControl: new FormControl(3), // Especial para la fase
    radioReunioDocumentosControl: new FormControl(0),
    observacionesf2Control: new FormControl('',
      [
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    porQueControl: new FormControl('',
      [
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    radioResolucionMigratoriaControl: new FormControl(''),
    cualControl: new FormControl(0),
    fechaResolucionControl: new FormControl('',
      [
        misValidaciones.dateValidator,
        misValidaciones.noFutureDateValidator
      ]),
    CURPControl: new FormControl('',
      [
        Validators.maxLength(18),
        Validators.pattern(this.forCURP)
      ]),
    negativaControl: new FormControl('',
      [
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    timestamp: new FormControl(dToday2)
  });

  async guardarRevGesDoc(formulario) {
    if (getConnection().isConnected) {
      const guardarDatos = await getConnection()
      const respuesta = await guardarDatos.createQueryBuilder()
        .insert()
        .into(RevisionGesDoc)
        .values(formulario)
        .execute();

      const respuesta2 = await guardarDatos.createQueryBuilder()
        .update(ControlFases)
        .set({ faseControl: this.vFaseControl })
        .where("folioControl = :folioControl", { folioControl: this.formRevisionGestion.controls.folioControl.value })
        .execute();

      await guardarDatos.close();
    } else {
      const guardarDatos = await this._database.connection
      const respuesta = await guardarDatos.createQueryBuilder()
        .insert()
        .into(RevisionGesDoc)
        .values(formulario)
        .execute();

      const respuesta2 = await guardarDatos.createQueryBuilder()
        .update(ControlFases)
        .set({ faseControl: this.vFaseControl })
        .where("folioControl = :folioControl", { folioControl: this.formRevisionGestion.controls.folioControl.value })
        .execute();

      await guardarDatos.close();
    }
    await this.router.navigateByUrl('/entrevista/impresionFolio/' + this.formRevisionGestion.controls.folioControl.value);
    await M.toast({ html: 'Informacion guardada con éxito', classes: 'rounded' })


  }

  submitForm() {
    console.log(this.formRevisionGestion.value);
    this.guardarRevGesDoc(this.formRevisionGestion.getRawValue());
  }

  patchID(id: any) {
    this.formRevisionGestion.patchValue({
      folioControl: id
    })
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.patchID(this.id);
    });

    // Init de varios controles
    $(document).ready(function () {

      // Init de los select
      $('select').formSelect();

    });

    // Habilitado de las funciones de inputmask
    Inputmask().mask(document.querySelectorAll("input"));

    // Cosa extraña para campos prellenados
    M.updateTextFields = M.updateTextFields;

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
