import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { misValidaciones } from '../../../shared/validations.directives';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento
import Inputmask from 'inputmask'; // Libreria para mascaras
import { globalCats, Pais } from '../../../shared/catalogos';

// Servicios para el guardado
import { DatabaseService } from '../../../data-access/database.service';
import { DatosMenor } from 'src/app/data-access/entities/datosMenor.entity';

declare var M: any // Variable para materialize
declare var $: any // Variable para jQuery

var dToday = new Date();
var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-seccion-unica-inf',
  templateUrl: './seccion-unica-inf.component.html',
  styleUrls: ['./seccion-unica-inf.component.css'],
  providers: [
    globalCats,
    DatabaseService
  ]
})
export class SeccionUnicaInfComponent implements OnInit {

  epochNow = Date.now();

  paises: Pais[];

  constructor(
    private _cats: globalCats,
    private router: Router,
    private _database: DatabaseService
  ) {
    this.paises = this._cats.getPaises();
  }

  especialObservaciones = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$"

  formSeccionUnicaInf = new FormGroup({
    folioControl: new FormControl(this.epochNow.toString()+'-NNANA'),
    faseControl: new FormControl(4),
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
    telefonoControl: new FormControl('',
      [
        misValidaciones.regexValidator(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i)
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
    if (this.formSeccionUnicaInf.controls.fechaNacimientoControl.valid && !this.formSeccionUnicaInf.controls.fechaNacimientoControl.pristine) {
      document.getElementById('labelEdad').setAttribute('class', 'active');
      this.formSeccionUnicaInf.patchValue({
        edadControl: this.edadPorFechaNac(this.formSeccionUnicaInf.controls.fechaNacimientoControl.value)
      });
    }
  }

  // Funcion para poblar de forma automatica la edad
  eventEdad() { // without type info
    this.fnSetEdad();
  }

  // DEBUG
  fnDEBUG() {
    console.log(this.formSeccionUnicaInf);
  }

  async guardarDatosMenor(formulario) {
    const guardado = await this._database.connection
    const respuesta = await guardado.createQueryBuilder()
      .insert()
      .into(DatosMenor)
      .values(formulario)
      .execute();

    await guardado.close()
    await this.router.navigateByUrl('/entrevista/listadoMenorNA');
    await M.toast({ html: 'Datos del menor guardados con éxito', classes: 'rounded' })
  }

  // Submit del formulario
  submitForm() {
    this.guardarDatosMenor(this.formSeccionUnicaInf.getRawValue());
  };

  ngOnInit() {

    // Init de varios controles
    $(document).ready(function () {

      // Init de los select
      $('select').formSelect();

    });

    // Habilitado de las funciones de inputmask
    Inputmask().mask(document.querySelectorAll("input"));

    // Cosa extraña para campos prellenados
    M.updateTextFields = M.updateTextFields;

    // Telefono
    var valTelefono = document.getElementById("telefono");
    Inputmask({ "mask": "+(99) 99 9999 9999", showMaskOnHover: false }).mask(valTelefono);

  }

}
