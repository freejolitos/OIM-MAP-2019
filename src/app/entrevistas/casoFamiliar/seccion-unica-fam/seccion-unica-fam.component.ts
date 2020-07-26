import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { misValidaciones } from '../../../shared/validations.directives';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento
import Inputmask from 'inputmask'; // Libreria para mascaras
import { globalCats, Pais, Parentesco, Tramite } from '../../../shared/catalogos';

import { DatabaseService } from '../../../data-access/database.service';
import { DatosMenorFam } from '../../../data-access/entities/dtMenorFam.entity';

declare var M: any // Variable para materialize
declare var $: any // Variable para jQuery

var dToday = new Date();
var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-seccion-unica-fam',
  templateUrl: './seccion-unica-fam.component.html',
  styleUrls: ['./seccion-unica-fam.component.css'],
  providers: [
    globalCats,
    DatabaseService
  ]
})
export class SeccionUnicaFamComponent implements OnInit, OnDestroy {

  epochNow = Date.now();

  idFamilia: number;
  private sub: any;

  paises: Pais[];
  parentesco: Parentesco[];
  tramite: Tramite[];

  constructor(
    private _cats: globalCats,
    private route: ActivatedRoute,
    private router: Router,
    private _database: DatabaseService
  ) {
    this.paises = this._cats.getPaises();
    this.parentesco = this._cats.getParentesco();
    this.tramite = this._cats.getTramite();
  }

especialObservaciones = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$"

  formSeccionUnicaFam = new FormGroup({
    folioControl: new FormControl(this.epochNow.toString()+'-nnaFAM'),
    faseControl: new FormControl(4),
    idFolioFamilia: new FormControl(0),
    nombreCompletoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.pattern("^[A-Za-z\u00C0-\u024F´ ]+$"),
        Validators.required
      ]),
    nacionalidadControl: new FormControl('',
      [
        Validators.required
      ]),
    fechaNacimientoControl: new FormControl('',
      [
        misValidaciones.noFutureDateValidator,
        misValidaciones.dateValidator,
        Validators.required
      ]),
    edadControl: new FormControl(
      {
        value: '',
        disabled: true
      },
      [
        Validators.pattern("^[0-9]+$")
      ]),
    radioGeneroControl: new FormControl('',
      [
        Validators.required
      ]),
    parentescoControl: new FormControl('',
      [
        Validators.required
      ]),
    otroControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.especialObservaciones)
      ]),
    condicionMigratoriaControl: new FormControl('',
      [
        Validators.required
      ]),
    observacionesControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.especialObservaciones)
      ]),
    timestamp: new FormControl(dToday2)
  });

  // === FUNCIONES PARA EL FORMULARIO === //

  // Calculo de edad dada la fecha de nacimiento
  edadPorFechaNac(fechaNac: any): number {
    var a = moment(fechaNac, "DD-MM-YYYY");
    var b = moment(dToday);
    return b.diff(a, 'years');
  }

  // Funcion para setear la edad en el formulario en el campo "edad"
  fnSetEdad() {
    if (this.formSeccionUnicaFam.controls.fechaNacimientoControl.valid && !this.formSeccionUnicaFam.controls.fechaNacimientoControl.pristine) {
      document.getElementById('labelEdad').setAttribute('class', 'active');
      this.formSeccionUnicaFam.patchValue({
        edadControl: this.edadPorFechaNac(this.formSeccionUnicaFam.controls.fechaNacimientoControl.value)
      });
    }
  }

  // Funcion para poblar de forma automatica la edad
  eventEdad() { // without type info
    this.fnSetEdad();
  }

  // DEBUG
  fnDEBUG() {
    console.log(this.formSeccionUnicaFam);
  }

  async guardarDatosMenor(formulario) {
    const guardarDatos = await this._database.connection
    const respuesta = await guardarDatos.createQueryBuilder()
      .insert()
      .into(DatosMenorFam)
      .values(formulario)
      .execute();
    
    await guardarDatos.close()
    await this.router.navigateByUrl('/entrevista/sublistadoFamiliar/' + this.formSeccionUnicaFam.controls.idFolioFamilia.value);
    await M.toast({ html: 'Datos del menor guardados con éxito', classes: 'rounded' })

  }


  // Submit del formulario
  submitForm() {
    console.log(this.formSeccionUnicaFam.getRawValue());
    this.guardarDatosMenor(this.formSeccionUnicaFam.getRawValue());
  };

  fnPatchIdFolioFamilia(id: any) {
    this.formSeccionUnicaFam.patchValue({
      idFolioFamilia: id
    });
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idFamilia = params['id']; // (+) converts string 'id' to a number
      if (!Number.isNaN(this.idFamilia)) {
        this.fnPatchIdFolioFamilia(this.idFamilia);
      }
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
