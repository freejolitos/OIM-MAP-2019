import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Inputmask from 'inputmask';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento

import { DatabaseService } from '../../../data-access/database.service';
import { ControlFases } from '../../../data-access/entities/ControlFases.entity';
import { InsercionLabo } from '../../../data-access/entities/insercionLabo.entity';
import { getConnection } from 'typeorm';


declare var M: any; // Var materialize
declare var $: any; // Var jQuery

var dToday2 = moment(new Date()).format("DD/MM/YYYY");
@Component({
  selector: 'app-insercion-laboral',
  templateUrl: './insercion-laboral.component.html',
  styleUrls: ['./insercion-laboral.component.css'],
  providers: [
    DatabaseService
  ]
})
export class InsercionLaboralComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  vFaseControl: number = 4;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _database: DatabaseService
  ) { }

  // === Patrones REGEX === // 
  mayusMinus = "^[A-Za-z\u00C0-\u024F´ ]+$";
  alphaNum = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$";
  onlyNumbers = "^[0-9]+$";
  forCURP = "^[A-Z0-9]+$";

  formInsercionLaboral = new FormGroup({
    folioControl: new FormControl(''),
    // faseControl: new FormControl(4), // Especial para la fase
    radioPlaticaInformativaControl: new FormControl(''),
    radioCanalizadoControl: new FormControl(''),
    cualf3Control: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]),
    radioEncontroTrabajoControl: new FormControl(''),
    dondeControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]),
    porquef3Control: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    radioObtuvoDocumentosControl: new FormControl(''),
    checkRFCControl: new FormControl(0),
    RFCControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]),
    checkNSSControl: new FormControl(0),
    NSSControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]),
    checkf3OtroControl: new FormControl(0),
    otroControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]),
    porque2Control: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    observacionesFinalesControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    timestamp: new FormControl(dToday2)
  });

  async guardarInsDatosLabo(formulario) {
    if (getConnection().isConnected) {
      const guardarDatos = await getConnection()
      const respuesta = await guardarDatos.createQueryBuilder()
        .insert()
        .into(InsercionLabo)
        .values(formulario)
        .execute();

      const respuesta2 = await guardarDatos.createQueryBuilder()
        .update(ControlFases)
        .set({ faseControl: this.vFaseControl })
        .where("folioControl = :folioControl", { folioControl: this.formInsercionLaboral.controls.folioControl.value })
        .execute();

      await guardarDatos.close()
      await this.router.navigateByUrl('/entrevista/impresionFolio/' + this.formInsercionLaboral.controls.folioControl.value);
      await M.toast({ html: 'Informacion guardada con éxito', classes: 'rounded' });
    } else {
      const guardarDatos = await this._database.connection
      const respuesta = await guardarDatos.createQueryBuilder()
        .insert()
        .into(InsercionLabo)
        .values(formulario)
        .execute();

      const respuesta2 = await guardarDatos.createQueryBuilder()
        .update(ControlFases)
        .set({ faseControl: this.vFaseControl })
        .where("folioControl = :folioControl", { folioControl: this.formInsercionLaboral.controls.folioControl.value })
        .execute();

      await guardarDatos.close()
      await this.router.navigateByUrl('/entrevista/impresionFolio/' + this.formInsercionLaboral.controls.folioControl.value);
      await M.toast({ html: 'Informacion guardada con éxito', classes: 'rounded' });
    }

  }

  submitForm() {
    console.log(this.formInsercionLaboral.value);
    this.guardarInsDatosLabo(this.formInsercionLaboral.getRawValue());
  }

  patchID(id: any) {
    this.formInsercionLaboral.patchValue({
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
